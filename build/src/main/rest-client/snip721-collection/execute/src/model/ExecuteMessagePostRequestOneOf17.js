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
import ExecuteMessagePostRequestOneOf17BurnNft from './ExecuteMessagePostRequestOneOf17BurnNft';

/**
 * The ExecuteMessagePostRequestOneOf17 model module.
 * @module model/ExecuteMessagePostRequestOneOf17
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf17 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf17</code>.
     * burn a token.  This can be always be done on a non-transferable token, regardless of whether burn has been enabled on the contract.  An owner should always have a way to get rid of a token they do not want, and burning is the only way to do that if the token is non-transferable
     * @alias module:model/ExecuteMessagePostRequestOneOf17
     * @param burnNft {module:model/ExecuteMessagePostRequestOneOf17BurnNft} 
     */
    constructor(burnNft) { 
        
        ExecuteMessagePostRequestOneOf17.initialize(this, burnNft);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, burnNft) { 
        obj['burn_nft'] = burnNft;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf17</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf17} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf17} The populated <code>ExecuteMessagePostRequestOneOf17</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf17();

            if (data.hasOwnProperty('burn_nft')) {
                obj['burn_nft'] = ExecuteMessagePostRequestOneOf17BurnNft.constructFromObject(data['burn_nft']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf17</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf17</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf17.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `burn_nft`
        if (data['burn_nft']) { // data not null
          ExecuteMessagePostRequestOneOf17BurnNft.validateJSON(data['burn_nft']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf17.RequiredProperties = ["burn_nft"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf17BurnNft} burn_nft
 */
ExecuteMessagePostRequestOneOf17.prototype['burn_nft'] = undefined;






export default ExecuteMessagePostRequestOneOf17;

