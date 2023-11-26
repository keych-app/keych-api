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
import ExecuteMessagePostRequestOneOf4SetRoyaltyInfo from './ExecuteMessagePostRequestOneOf4SetRoyaltyInfo';

/**
 * The ExecuteMessagePostRequestOneOf4 model module.
 * @module model/ExecuteMessagePostRequestOneOf4
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf4 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf4</code>.
     * set royalty information.  If no token ID is provided, this royalty info will become the default RoyaltyInfo for any new tokens minted on the contract.  If a token ID is provided, this can only be called by the token creator and only when the creator is the current owner.  Royalties can not be set on a token that is not transferable, because they can never be sold
     * @alias module:model/ExecuteMessagePostRequestOneOf4
     * @param setRoyaltyInfo {module:model/ExecuteMessagePostRequestOneOf4SetRoyaltyInfo} 
     */
    constructor(setRoyaltyInfo) { 
        
        ExecuteMessagePostRequestOneOf4.initialize(this, setRoyaltyInfo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, setRoyaltyInfo) { 
        obj['set_royalty_info'] = setRoyaltyInfo;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf4} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf4} The populated <code>ExecuteMessagePostRequestOneOf4</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf4();

            if (data.hasOwnProperty('set_royalty_info')) {
                obj['set_royalty_info'] = ExecuteMessagePostRequestOneOf4SetRoyaltyInfo.constructFromObject(data['set_royalty_info']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf4</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf4</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf4.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `set_royalty_info`
        if (data['set_royalty_info']) { // data not null
          ExecuteMessagePostRequestOneOf4SetRoyaltyInfo.validateJSON(data['set_royalty_info']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf4.RequiredProperties = ["set_royalty_info"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf4SetRoyaltyInfo} set_royalty_info
 */
ExecuteMessagePostRequestOneOf4.prototype['set_royalty_info'] = undefined;






export default ExecuteMessagePostRequestOneOf4;
