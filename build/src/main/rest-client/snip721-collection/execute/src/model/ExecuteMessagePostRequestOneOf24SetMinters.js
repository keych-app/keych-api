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
 * The ExecuteMessagePostRequestOneOf24SetMinters model module.
 * @module model/ExecuteMessagePostRequestOneOf24SetMinters
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf24SetMinters {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf24SetMinters</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf24SetMinters
     * @param minters {Array.<String>} list of addresses with minting authority
     */
    constructor(minters) { 
        
        ExecuteMessagePostRequestOneOf24SetMinters.initialize(this, minters);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, minters) { 
        obj['minters'] = minters;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf24SetMinters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf24SetMinters} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf24SetMinters} The populated <code>ExecuteMessagePostRequestOneOf24SetMinters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf24SetMinters();

            if (data.hasOwnProperty('minters')) {
                obj['minters'] = ApiClient.convertToType(data['minters'], ['String']);
            }
            if (data.hasOwnProperty('padding')) {
                obj['padding'] = ApiClient.convertToType(data['padding'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf24SetMinters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf24SetMinters</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf24SetMinters.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['minters'])) {
            throw new Error("Expected the field `minters` to be an array in the JSON data but got " + data['minters']);
        }
        // ensure the json data is a string
        if (data['padding'] && !(typeof data['padding'] === 'string' || data['padding'] instanceof String)) {
            throw new Error("Expected the field `padding` to be a primitive type in the JSON string but got " + data['padding']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf24SetMinters.RequiredProperties = ["minters"];

/**
 * list of addresses with minting authority
 * @member {Array.<String>} minters
 */
ExecuteMessagePostRequestOneOf24SetMinters.prototype['minters'] = undefined;

/**
 * optional message length padding
 * @member {String} padding
 */
ExecuteMessagePostRequestOneOf24SetMinters.prototype['padding'] = undefined;






export default ExecuteMessagePostRequestOneOf24SetMinters;

