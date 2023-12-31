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
 * The ExecuteMessagePostRequestOneOf21SetViewingKey model module.
 * @module model/ExecuteMessagePostRequestOneOf21SetViewingKey
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf21SetViewingKey {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf21SetViewingKey</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf21SetViewingKey
     * @param key {String} desired viewing key
     */
    constructor(key) { 
        
        ExecuteMessagePostRequestOneOf21SetViewingKey.initialize(this, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key) { 
        obj['key'] = key;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf21SetViewingKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf21SetViewingKey} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf21SetViewingKey} The populated <code>ExecuteMessagePostRequestOneOf21SetViewingKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf21SetViewingKey();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('padding')) {
                obj['padding'] = ApiClient.convertToType(data['padding'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf21SetViewingKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf21SetViewingKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf21SetViewingKey.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['padding'] && !(typeof data['padding'] === 'string' || data['padding'] instanceof String)) {
            throw new Error("Expected the field `padding` to be a primitive type in the JSON string but got " + data['padding']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf21SetViewingKey.RequiredProperties = ["key"];

/**
 * desired viewing key
 * @member {String} key
 */
ExecuteMessagePostRequestOneOf21SetViewingKey.prototype['key'] = undefined;

/**
 * optional message length padding
 * @member {String} padding
 */
ExecuteMessagePostRequestOneOf21SetViewingKey.prototype['padding'] = undefined;






export default ExecuteMessagePostRequestOneOf21SetViewingKey;

