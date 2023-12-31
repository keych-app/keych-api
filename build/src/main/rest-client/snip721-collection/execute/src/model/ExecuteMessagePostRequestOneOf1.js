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
import ExecuteMessagePostRequestOneOf1BatchMintNft from './ExecuteMessagePostRequestOneOf1BatchMintNft';

/**
 * The ExecuteMessagePostRequestOneOf1 model module.
 * @module model/ExecuteMessagePostRequestOneOf1
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf1 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf1</code>.
     * Mint multiple tokens
     * @alias module:model/ExecuteMessagePostRequestOneOf1
     * @param batchMintNft {module:model/ExecuteMessagePostRequestOneOf1BatchMintNft} 
     */
    constructor(batchMintNft) { 
        
        ExecuteMessagePostRequestOneOf1.initialize(this, batchMintNft);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, batchMintNft) { 
        obj['batch_mint_nft'] = batchMintNft;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf1} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf1} The populated <code>ExecuteMessagePostRequestOneOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf1();

            if (data.hasOwnProperty('batch_mint_nft')) {
                obj['batch_mint_nft'] = ExecuteMessagePostRequestOneOf1BatchMintNft.constructFromObject(data['batch_mint_nft']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf1.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `batch_mint_nft`
        if (data['batch_mint_nft']) { // data not null
          ExecuteMessagePostRequestOneOf1BatchMintNft.validateJSON(data['batch_mint_nft']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf1.RequiredProperties = ["batch_mint_nft"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf1BatchMintNft} batch_mint_nft
 */
ExecuteMessagePostRequestOneOf1.prototype['batch_mint_nft'] = undefined;






export default ExecuteMessagePostRequestOneOf1;

