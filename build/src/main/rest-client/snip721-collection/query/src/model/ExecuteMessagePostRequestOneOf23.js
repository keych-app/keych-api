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
import ExecuteMessagePostRequestOneOf23RoyaltyInfo from './ExecuteMessagePostRequestOneOf23RoyaltyInfo';

/**
 * The ExecuteMessagePostRequestOneOf23 model module.
 * @module model/ExecuteMessagePostRequestOneOf23
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf23 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf23</code>.
     * display the royalty information of a token if a token ID is specified, or display the contract&#39;s default royalty information in no token ID is provided
     * @alias module:model/ExecuteMessagePostRequestOneOf23
     * @param royaltyInfo {module:model/ExecuteMessagePostRequestOneOf23RoyaltyInfo} 
     */
    constructor(royaltyInfo) { 
        
        ExecuteMessagePostRequestOneOf23.initialize(this, royaltyInfo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, royaltyInfo) { 
        obj['royalty_info'] = royaltyInfo;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf23</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf23} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf23} The populated <code>ExecuteMessagePostRequestOneOf23</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf23();

            if (data.hasOwnProperty('royalty_info')) {
                obj['royalty_info'] = ExecuteMessagePostRequestOneOf23RoyaltyInfo.constructFromObject(data['royalty_info']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf23</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf23</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf23.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `royalty_info`
        if (data['royalty_info']) { // data not null
          ExecuteMessagePostRequestOneOf23RoyaltyInfo.validateJSON(data['royalty_info']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf23.RequiredProperties = ["royalty_info"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf23RoyaltyInfo} royalty_info
 */
ExecuteMessagePostRequestOneOf23.prototype['royalty_info'] = undefined;






export default ExecuteMessagePostRequestOneOf23;

