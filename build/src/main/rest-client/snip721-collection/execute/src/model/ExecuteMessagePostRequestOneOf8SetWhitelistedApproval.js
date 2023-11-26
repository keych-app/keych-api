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
import AccessLevel from './AccessLevel';
import Expiration from './Expiration';

/**
 * The ExecuteMessagePostRequestOneOf8SetWhitelistedApproval model module.
 * @module model/ExecuteMessagePostRequestOneOf8SetWhitelistedApproval
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf8SetWhitelistedApproval {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf8SetWhitelistedApproval</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf8SetWhitelistedApproval
     * @param address {String} address being granted/revoked permission
     */
    constructor(address) { 
        
        ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.initialize(this, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address) { 
        obj['address'] = address;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf8SetWhitelistedApproval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf8SetWhitelistedApproval} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf8SetWhitelistedApproval} The populated <code>ExecuteMessagePostRequestOneOf8SetWhitelistedApproval</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf8SetWhitelistedApproval();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('expires')) {
                obj['expires'] = Expiration.constructFromObject(data['expires']);
            }
            if (data.hasOwnProperty('padding')) {
                obj['padding'] = ApiClient.convertToType(data['padding'], 'String');
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('transfer')) {
                obj['transfer'] = AccessLevel.constructFromObject(data['transfer']);
            }
            if (data.hasOwnProperty('view_owner')) {
                obj['view_owner'] = AccessLevel.constructFromObject(data['view_owner']);
            }
            if (data.hasOwnProperty('view_private_metadata')) {
                obj['view_private_metadata'] = AccessLevel.constructFromObject(data['view_private_metadata']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf8SetWhitelistedApproval</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf8SetWhitelistedApproval</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // validate the optional field `expires`
        if (data['expires']) { // data not null
          Expiration.validateJSON(data['expires']);
        }
        // ensure the json data is a string
        if (data['padding'] && !(typeof data['padding'] === 'string' || data['padding'] instanceof String)) {
            throw new Error("Expected the field `padding` to be a primitive type in the JSON string but got " + data['padding']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // validate the optional field `transfer`
        if (data['transfer']) { // data not null
          AccessLevel.validateJSON(data['transfer']);
        }
        // validate the optional field `view_owner`
        if (data['view_owner']) { // data not null
          AccessLevel.validateJSON(data['view_owner']);
        }
        // validate the optional field `view_private_metadata`
        if (data['view_private_metadata']) { // data not null
          AccessLevel.validateJSON(data['view_private_metadata']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.RequiredProperties = ["address"];

/**
 * address being granted/revoked permission
 * @member {String} address
 */
ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.prototype['address'] = undefined;

/**
 * @member {module:model/Expiration} expires
 */
ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.prototype['expires'] = undefined;

/**
 * optional message length padding
 * @member {String} padding
 */
ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.prototype['padding'] = undefined;

/**
 * optional token id to apply approval/revocation to
 * @member {String} token_id
 */
ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.prototype['token_id'] = undefined;

/**
 * @member {module:model/AccessLevel} transfer
 */
ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.prototype['transfer'] = undefined;

/**
 * @member {module:model/AccessLevel} view_owner
 */
ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.prototype['view_owner'] = undefined;

/**
 * @member {module:model/AccessLevel} view_private_metadata
 */
ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.prototype['view_private_metadata'] = undefined;






export default ExecuteMessagePostRequestOneOf8SetWhitelistedApproval;

