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

/**
 * The CodeInfo model module.
 * @module model/CodeInfo
 * @version 1.0.0
 */
class CodeInfo {
    /**
     * Constructs a new <code>CodeInfo</code>.
     * Info needed to instantiate a contract
     * @alias module:model/CodeInfo
     * @param codeId {Number} code id of the stored contract
     * @param codeHash {String} code hash of the stored contract
     */
    constructor(codeId, codeHash) { 
        
        CodeInfo.initialize(this, codeId, codeHash);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, codeId, codeHash) { 
        obj['code_id'] = codeId;
        obj['code_hash'] = codeHash;
    }

    /**
     * Constructs a <code>CodeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeInfo} obj Optional instance to populate.
     * @return {module:model/CodeInfo} The populated <code>CodeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeInfo();

            if (data.hasOwnProperty('code_id')) {
                obj['code_id'] = ApiClient.convertToType(data['code_id'], 'Number');
            }
            if (data.hasOwnProperty('code_hash')) {
                obj['code_hash'] = ApiClient.convertToType(data['code_hash'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CodeInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CodeInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CodeInfo.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['code_hash'] && !(typeof data['code_hash'] === 'string' || data['code_hash'] instanceof String)) {
            throw new Error("Expected the field `code_hash` to be a primitive type in the JSON string but got " + data['code_hash']);
        }

        return true;
    }


}

CodeInfo.RequiredProperties = ["code_id", "code_hash"];

/**
 * code id of the stored contract
 * @member {Number} code_id
 */
CodeInfo.prototype['code_id'] = undefined;

/**
 * code hash of the stored contract
 * @member {String} code_hash
 */
CodeInfo.prototype['code_hash'] = undefined;






export default CodeInfo;
