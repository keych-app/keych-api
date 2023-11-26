/**
 * Keych API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ExecuteMessagePostRequestOneOf8PrivateMetadata from './ExecuteMessagePostRequestOneOf8PrivateMetadata';

/**
 * The ExecuteMessagePostRequestOneOf8 model module.
 * @module model/ExecuteMessagePostRequestOneOf8
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf8 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf8</code>.
     * displays the private metadata if permitted to view it
     * @alias module:model/ExecuteMessagePostRequestOneOf8
     * @param privateMetadata {module:model/ExecuteMessagePostRequestOneOf8PrivateMetadata} 
     */
    constructor(privateMetadata) { 
        
        ExecuteMessagePostRequestOneOf8.initialize(this, privateMetadata);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, privateMetadata) { 
        obj['private_metadata'] = privateMetadata;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf8</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf8} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf8} The populated <code>ExecuteMessagePostRequestOneOf8</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf8();

            if (data.hasOwnProperty('private_metadata')) {
                obj['private_metadata'] = ExecuteMessagePostRequestOneOf8PrivateMetadata.constructFromObject(data['private_metadata']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf8</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf8</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf8.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `private_metadata`
        if (data['private_metadata']) { // data not null
          ExecuteMessagePostRequestOneOf8PrivateMetadata.validateJSON(data['private_metadata']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf8.RequiredProperties = ["private_metadata"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf8PrivateMetadata} private_metadata
 */
ExecuteMessagePostRequestOneOf8.prototype['private_metadata'] = undefined;






export default ExecuteMessagePostRequestOneOf8;

