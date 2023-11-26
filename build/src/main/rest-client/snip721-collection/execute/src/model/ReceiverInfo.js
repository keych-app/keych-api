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
 * The ReceiverInfo model module.
 * @module model/ReceiverInfo
 * @version 1.0.0
 */
class ReceiverInfo {
    /**
     * Constructs a new <code>ReceiverInfo</code>.
     * a recipient contract&#39;s code hash and whether it implements BatchReceiveNft
     * @alias module:model/ReceiverInfo
     * @param recipientCodeHash {String} recipient's code hash
     */
    constructor(recipientCodeHash) { 
        
        ReceiverInfo.initialize(this, recipientCodeHash);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, recipientCodeHash) { 
        obj['recipient_code_hash'] = recipientCodeHash;
    }

    /**
     * Constructs a <code>ReceiverInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceiverInfo} obj Optional instance to populate.
     * @return {module:model/ReceiverInfo} The populated <code>ReceiverInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceiverInfo();

            if (data.hasOwnProperty('also_implements_batch_receive_nft')) {
                obj['also_implements_batch_receive_nft'] = ApiClient.convertToType(data['also_implements_batch_receive_nft'], 'Boolean');
            }
            if (data.hasOwnProperty('recipient_code_hash')) {
                obj['recipient_code_hash'] = ApiClient.convertToType(data['recipient_code_hash'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReceiverInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReceiverInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReceiverInfo.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['recipient_code_hash'] && !(typeof data['recipient_code_hash'] === 'string' || data['recipient_code_hash'] instanceof String)) {
            throw new Error("Expected the field `recipient_code_hash` to be a primitive type in the JSON string but got " + data['recipient_code_hash']);
        }

        return true;
    }


}

ReceiverInfo.RequiredProperties = ["recipient_code_hash"];

/**
 * true if the contract also implements BacthReceiveNft.  Defaults to false if not specified
 * @member {Boolean} also_implements_batch_receive_nft
 */
ReceiverInfo.prototype['also_implements_batch_receive_nft'] = undefined;

/**
 * recipient's code hash
 * @member {String} recipient_code_hash
 */
ReceiverInfo.prototype['recipient_code_hash'] = undefined;






export default ReceiverInfo;
