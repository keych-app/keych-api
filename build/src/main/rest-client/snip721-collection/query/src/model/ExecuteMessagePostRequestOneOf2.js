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
 * The ExecuteMessagePostRequestOneOf2 model module.
 * @module model/ExecuteMessagePostRequestOneOf2
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf2 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf2</code>.
     * display the list of authorized minters
     * @alias module:model/ExecuteMessagePostRequestOneOf2
     * @param minters {Object} 
     */
    constructor(minters) { 
        
        ExecuteMessagePostRequestOneOf2.initialize(this, minters);
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
     * Constructs a <code>ExecuteMessagePostRequestOneOf2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf2} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf2} The populated <code>ExecuteMessagePostRequestOneOf2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf2();

            if (data.hasOwnProperty('minters')) {
                obj['minters'] = ApiClient.convertToType(data['minters'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf2.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf2.RequiredProperties = ["minters"];

/**
 * @member {Object} minters
 */
ExecuteMessagePostRequestOneOf2.prototype['minters'] = undefined;






export default ExecuteMessagePostRequestOneOf2;

