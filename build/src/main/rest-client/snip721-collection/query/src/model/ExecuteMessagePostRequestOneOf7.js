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
import ExecuteMessagePostRequestOneOf5OwnerOf from './ExecuteMessagePostRequestOneOf5OwnerOf';

/**
 * The ExecuteMessagePostRequestOneOf7 model module.
 * @module model/ExecuteMessagePostRequestOneOf7
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf7 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf7</code>.
     * displays all the information contained in the OwnerOf and NftInfo queries
     * @alias module:model/ExecuteMessagePostRequestOneOf7
     * @param allNftInfo {module:model/ExecuteMessagePostRequestOneOf5OwnerOf} 
     */
    constructor(allNftInfo) { 
        
        ExecuteMessagePostRequestOneOf7.initialize(this, allNftInfo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, allNftInfo) { 
        obj['all_nft_info'] = allNftInfo;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf7</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf7} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf7} The populated <code>ExecuteMessagePostRequestOneOf7</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf7();

            if (data.hasOwnProperty('all_nft_info')) {
                obj['all_nft_info'] = ExecuteMessagePostRequestOneOf5OwnerOf.constructFromObject(data['all_nft_info']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf7</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf7</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf7.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `all_nft_info`
        if (data['all_nft_info']) { // data not null
          ExecuteMessagePostRequestOneOf5OwnerOf.validateJSON(data['all_nft_info']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf7.RequiredProperties = ["all_nft_info"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf5OwnerOf} all_nft_info
 */
ExecuteMessagePostRequestOneOf7.prototype['all_nft_info'] = undefined;






export default ExecuteMessagePostRequestOneOf7;

