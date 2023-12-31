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
 * The ExecuteMessagePostRequestOneOf19RegisterReceiveNft model module.
 * @module model/ExecuteMessagePostRequestOneOf19RegisterReceiveNft
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf19RegisterReceiveNft {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf19RegisterReceiveNft</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf19RegisterReceiveNft
     * @param codeHash {String} receving contract's code hash
     */
    constructor(codeHash) { 
        
        ExecuteMessagePostRequestOneOf19RegisterReceiveNft.initialize(this, codeHash);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, codeHash) { 
        obj['code_hash'] = codeHash;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf19RegisterReceiveNft</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf19RegisterReceiveNft} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf19RegisterReceiveNft} The populated <code>ExecuteMessagePostRequestOneOf19RegisterReceiveNft</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf19RegisterReceiveNft();

            if (data.hasOwnProperty('also_implements_batch_receive_nft')) {
                obj['also_implements_batch_receive_nft'] = ApiClient.convertToType(data['also_implements_batch_receive_nft'], 'Boolean');
            }
            if (data.hasOwnProperty('code_hash')) {
                obj['code_hash'] = ApiClient.convertToType(data['code_hash'], 'String');
            }
            if (data.hasOwnProperty('padding')) {
                obj['padding'] = ApiClient.convertToType(data['padding'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf19RegisterReceiveNft</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf19RegisterReceiveNft</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf19RegisterReceiveNft.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['code_hash'] && !(typeof data['code_hash'] === 'string' || data['code_hash'] instanceof String)) {
            throw new Error("Expected the field `code_hash` to be a primitive type in the JSON string but got " + data['code_hash']);
        }
        // ensure the json data is a string
        if (data['padding'] && !(typeof data['padding'] === 'string' || data['padding'] instanceof String)) {
            throw new Error("Expected the field `padding` to be a primitive type in the JSON string but got " + data['padding']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf19RegisterReceiveNft.RequiredProperties = ["code_hash"];

/**
 * optionally true if the contract also implements BatchReceiveNft.  Defaults to false if not specified
 * @member {Boolean} also_implements_batch_receive_nft
 */
ExecuteMessagePostRequestOneOf19RegisterReceiveNft.prototype['also_implements_batch_receive_nft'] = undefined;

/**
 * receving contract's code hash
 * @member {String} code_hash
 */
ExecuteMessagePostRequestOneOf19RegisterReceiveNft.prototype['code_hash'] = undefined;

/**
 * optional message length padding
 * @member {String} padding
 */
ExecuteMessagePostRequestOneOf19RegisterReceiveNft.prototype['padding'] = undefined;






export default ExecuteMessagePostRequestOneOf19RegisterReceiveNft;

