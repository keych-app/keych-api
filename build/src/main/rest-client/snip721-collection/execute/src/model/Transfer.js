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
 * The Transfer model module.
 * @module model/Transfer
 * @version 1.0.0
 */
class Transfer {
    /**
     * Constructs a new <code>Transfer</code>.
     * token transfer info used when doing a BatchTransferNft
     * @alias module:model/Transfer
     * @param recipient {String} recipient of the transferred tokens
     * @param tokenIds {Array.<String>} tokens being transferred
     */
    constructor(recipient, tokenIds) { 
        
        Transfer.initialize(this, recipient, tokenIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, recipient, tokenIds) { 
        obj['recipient'] = recipient;
        obj['token_ids'] = tokenIds;
    }

    /**
     * Constructs a <code>Transfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transfer} obj Optional instance to populate.
     * @return {module:model/Transfer} The populated <code>Transfer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transfer();

            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('token_ids')) {
                obj['token_ids'] = ApiClient.convertToType(data['token_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Transfer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Transfer</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Transfer.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
            throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
        }
        // ensure the json data is a string
        if (data['recipient'] && !(typeof data['recipient'] === 'string' || data['recipient'] instanceof String)) {
            throw new Error("Expected the field `recipient` to be a primitive type in the JSON string but got " + data['recipient']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['token_ids'])) {
            throw new Error("Expected the field `token_ids` to be an array in the JSON data but got " + data['token_ids']);
        }

        return true;
    }


}

Transfer.RequiredProperties = ["recipient", "token_ids"];

/**
 * optional memo for the tx
 * @member {String} memo
 */
Transfer.prototype['memo'] = undefined;

/**
 * recipient of the transferred tokens
 * @member {String} recipient
 */
Transfer.prototype['recipient'] = undefined;

/**
 * tokens being transferred
 * @member {Array.<String>} token_ids
 */
Transfer.prototype['token_ids'] = undefined;






export default Transfer;

