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
 * The ExecuteMessagePostRequestOneOf20VerifyTransferApproval model module.
 * @module model/ExecuteMessagePostRequestOneOf20VerifyTransferApproval
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf20VerifyTransferApproval {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf20VerifyTransferApproval</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf20VerifyTransferApproval
     * @param address {String} address that has approval
     * @param tokenIds {Array.<String>} list of tokens to verify approval for
     * @param viewingKey {String} viewing key
     */
    constructor(address, tokenIds, viewingKey) { 
        
        ExecuteMessagePostRequestOneOf20VerifyTransferApproval.initialize(this, address, tokenIds, viewingKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, tokenIds, viewingKey) { 
        obj['address'] = address;
        obj['token_ids'] = tokenIds;
        obj['viewing_key'] = viewingKey;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf20VerifyTransferApproval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf20VerifyTransferApproval} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf20VerifyTransferApproval} The populated <code>ExecuteMessagePostRequestOneOf20VerifyTransferApproval</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf20VerifyTransferApproval();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('token_ids')) {
                obj['token_ids'] = ApiClient.convertToType(data['token_ids'], ['String']);
            }
            if (data.hasOwnProperty('viewing_key')) {
                obj['viewing_key'] = ApiClient.convertToType(data['viewing_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf20VerifyTransferApproval</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf20VerifyTransferApproval</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf20VerifyTransferApproval.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['token_ids'])) {
            throw new Error("Expected the field `token_ids` to be an array in the JSON data but got " + data['token_ids']);
        }
        // ensure the json data is a string
        if (data['viewing_key'] && !(typeof data['viewing_key'] === 'string' || data['viewing_key'] instanceof String)) {
            throw new Error("Expected the field `viewing_key` to be a primitive type in the JSON string but got " + data['viewing_key']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf20VerifyTransferApproval.RequiredProperties = ["address", "token_ids", "viewing_key"];

/**
 * address that has approval
 * @member {String} address
 */
ExecuteMessagePostRequestOneOf20VerifyTransferApproval.prototype['address'] = undefined;

/**
 * list of tokens to verify approval for
 * @member {Array.<String>} token_ids
 */
ExecuteMessagePostRequestOneOf20VerifyTransferApproval.prototype['token_ids'] = undefined;

/**
 * viewing key
 * @member {String} viewing_key
 */
ExecuteMessagePostRequestOneOf20VerifyTransferApproval.prototype['viewing_key'] = undefined;






export default ExecuteMessagePostRequestOneOf20VerifyTransferApproval;

