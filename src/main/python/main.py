import json
import os
import shutil
import subprocess
import sys

def update_refs(schema):  # $ref paths for OpenAPI
    if isinstance(schema, dict):
        # Iterate over a list of items to avoid runtime error
        for key, value in list(schema.items()):
            if key == '$ref':
                # Update $ref to point to the components/schemas location
                schema[key] = value.replace('#/definitions/', '#/components/schemas/')
            else:
                update_refs(value)
    elif isinstance(schema, list):
        for item in schema:
            update_refs(item)


def handle_nullable_types(schema):
    if isinstance(schema, dict):
        for key, value in list(schema.items()):
            if key == 'type' and isinstance(value, list) and 'null' in value:
                schema['nullable'] = True
                schema['type'] = [t for t in value if t != 'null'][0]  # Take the first non-null type
            else:
                handle_nullable_types(value)
    elif isinstance(schema, list):
        for item in schema:
            handle_nullable_types(item)


def create_request_body_schema(schema):
    if 'oneOf' in schema:
        return {"oneOf": schema["oneOf"]}
    else:
        return {
            "type": "object",
            "properties": schema.get("properties", {}),
            "required": schema.get("required", [])
        }


def json_to_openapi(json_schema):
    openapi_schema = {
        "openapi": "3.0.0",
        "info": {
            "title": "Keych API",
            "version": "1.0.0",
        },
        "paths": {
            "/execute-message": {  # Example endpoint
                "post": {
                    "summary": "Execute a message",
                    "description": "Accepts different types of messages based on the provided schema",
                    "requestBody": {
                        "required": True,
                        "content": {
                            "application/json": {
                                "schema": create_request_body_schema(json_schema)
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Message processed successfully"
                            # Define the response schema, if applicable
                        },
                        "default": {
                            "description": "An error occurred"
                        }
                    },
                },
            },
        },
        "components": {
            "schemas": json_schema.get("definitions", {}),
        },
    }
    update_refs(openapi_schema)
    handle_nullable_types(openapi_schema)
    return openapi_schema


if len(sys.argv) != 2:
    print("Root folder is missing. Please, provide it as command line argument")
    sys.exit(1)

ROOT_FOLDER = sys.argv[1]
INPUT_FOLDER = os.path.join(ROOT_FOLDER, 'src', 'main', 'schema')
BUILD_FOLDER = os.path.join(ROOT_FOLDER, 'build', 'src', 'main')
OPENAPI_FOLDER = os.path.join(BUILD_FOLDER, 'openapi')
RESTCLIENT_FOLDER = os.path.join(BUILD_FOLDER, 'rest-client')

# Check for valid input folders
for f in [ROOT_FOLDER, INPUT_FOLDER, BUILD_FOLDER]:
    assert os.path.isdir(f), f'Not a folder: {f}'
# Setup output directories
shutil.rmtree(BUILD_FOLDER)
for d in [BUILD_FOLDER, OPENAPI_FOLDER, RESTCLIENT_FOLDER]:
    os.makedirs(d)

# Generate OpenAPI definitions (from input JSON schemas)
for folder_name in next(os.walk(INPUT_FOLDER))[1]:
    input_folder = os.path.join(INPUT_FOLDER, folder_name)
    output_folder = os.path.join(OPENAPI_FOLDER, folder_name)
    if os.path.isdir(input_folder):
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
        for filename in os.listdir(input_folder):
            # Process only files ending with '_msg.json'
            if filename.endswith('_msg.json'):
                input_filepath = os.path.join(input_folder, filename)
                output_filepath = os.path.join(output_folder, filename.replace('_msg.json', '.json'))
                print(f"[OpenAPI] Process file: '{input_filepath}' -> '{output_filepath}'")
                with open(input_filepath, 'r') as fp:
                    json_schema = json.load(fp)
                openapi_schema = json_to_openapi(json_schema)
                # Save the OpenAPI schema as output file
                with open(output_filepath, 'w') as fp:
                    json.dump(openapi_schema, fp, indent=4)

# Generate REST Clients (from previously generated OpenAPI definitions)
for folder_name in os.listdir(OPENAPI_FOLDER):
    input_folder = os.path.join(OPENAPI_FOLDER, folder_name)
    if os.path.isdir(input_folder):
        for filename in os.listdir(input_folder):
            if filename.endswith('.yaml') or filename.endswith('.json'):
                input_folderpath = os.path.join(input_folder, filename)
                file_basename = '.'.join(filename.split('.')[:-1])  # TODO: maybe exist something similar from 3rd parties libs
                output_folderpath = os.path.join(RESTCLIENT_FOLDER, folder_name, file_basename)
                # OpenAPI Generator runs from Docker
                cmd = [
                    'docker', 'run', '--rm',
                    '-v', f'{BUILD_FOLDER.replace("\\", "/")}:/local',
                    'openapitools/openapi-generator-cli', 'generate',
                    '-i', f'/local/{os.path.relpath(input_folderpath, BUILD_FOLDER).replace("\\", "/")}',
                    '-g', 'javascript',
                    '-o', f'/local/{os.path.relpath(output_folderpath, BUILD_FOLDER).replace("\\", "/")}'
                ]
                # Run the command
                subprocess.run(cmd, check=True)
                print(f"Generated JavaScript client for '{filename}' into '{output_folderpath}'")
