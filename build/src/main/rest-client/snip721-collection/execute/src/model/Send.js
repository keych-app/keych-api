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
import ReceiverInfo from './ReceiverInfo';

/**
 * The Send model module.
 * @module model/Send
 * @version 1.0.0
 */
class Send {
    /**
     * Constructs a new <code>Send</code>.
     * send token info used when doing a BatchSendNft
     * @alias module:model/Send
     * @param contract {String} recipient of the sent tokens
     * @param tokenIds {Array.<String>} tokens being sent
     */
    constructor(contract, tokenIds) { 
        
        Send.initialize(this, contract, tokenIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contract, tokenIds) { 
        obj['contract'] = contract;
        obj['token_ids'] = tokenIds;
    }

    /**
     * Constructs a <code>Send</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Send} obj Optional instance to populate.
     * @return {module:model/Send} The populated <code>Send</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Send();

            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('receiver_info')) {
                obj['receiver_info'] = ReceiverInfo.constructFromObject(data['receiver_info']);
            }
            if (data.hasOwnProperty('token_ids')) {
                obj['token_ids'] = ApiClient.convertToType(data['token_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Send</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Send</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Send.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['contract'] && !(typeof data['contract'] === 'string' || data['contract'] instanceof String)) {
            throw new Error("Expected the field `contract` to be a primitive type in the JSON string but got " + data['contract']);
        }
        // ensure the json data is a string
        if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
            throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
        }
        // ensure the json data is a string
        if (data['msg'] && !(typeof data['msg'] === 'string' || data['msg'] instanceof String)) {
            throw new Error("Expected the field `msg` to be a primitive type in the JSON string but got " + data['msg']);
        }
        // validate the optional field `receiver_info`
        if (data['receiver_info']) { // data not null
          ReceiverInfo.validateJSON(data['receiver_info']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['token_ids'])) {
            throw new Error("Expected the field `token_ids` to be an array in the JSON data but got " + data['token_ids']);
        }

        return true;
    }


}

Send.RequiredProperties = ["contract", "token_ids"];

/**
 * recipient of the sent tokens
 * @member {String} contract
 */
Send.prototype['contract'] = undefined;

/**
 * optional memo for the tx
 * @member {String} memo
 */
Send.prototype['memo'] = undefined;

/**
 * Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.  This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>. See also <https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md>.
 * @member {String} msg
 */
Send.prototype['msg'] = undefined;

/**
 * @member {module:model/ReceiverInfo} receiver_info
 */
Send.prototype['receiver_info'] = undefined;

/**
 * tokens being sent
 * @member {Array.<String>} token_ids
 */
Send.prototype['token_ids'] = undefined;






export default Send;
