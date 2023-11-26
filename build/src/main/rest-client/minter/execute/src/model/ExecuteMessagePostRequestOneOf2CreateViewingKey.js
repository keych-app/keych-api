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
 * The ExecuteMessagePostRequestOneOf2CreateViewingKey model module.
 * @module model/ExecuteMessagePostRequestOneOf2CreateViewingKey
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf2CreateViewingKey {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf2CreateViewingKey</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf2CreateViewingKey
     * @param entropy {String} 
     */
    constructor(entropy) { 
        
        ExecuteMessagePostRequestOneOf2CreateViewingKey.initialize(this, entropy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entropy) { 
        obj['entropy'] = entropy;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf2CreateViewingKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf2CreateViewingKey} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf2CreateViewingKey} The populated <code>ExecuteMessagePostRequestOneOf2CreateViewingKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf2CreateViewingKey();

            if (data.hasOwnProperty('entropy')) {
                obj['entropy'] = ApiClient.convertToType(data['entropy'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf2CreateViewingKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf2CreateViewingKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf2CreateViewingKey.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['entropy'] && !(typeof data['entropy'] === 'string' || data['entropy'] instanceof String)) {
            throw new Error("Expected the field `entropy` to be a primitive type in the JSON string but got " + data['entropy']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf2CreateViewingKey.RequiredProperties = ["entropy"];

/**
 * @member {String} entropy
 */
ExecuteMessagePostRequestOneOf2CreateViewingKey.prototype['entropy'] = undefined;






export default ExecuteMessagePostRequestOneOf2CreateViewingKey;

