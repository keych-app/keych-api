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
import RoyaltyInfo from './RoyaltyInfo';

/**
 * The ExecuteMessagePostRequestOneOf4SetRoyaltyInfo model module.
 * @module model/ExecuteMessagePostRequestOneOf4SetRoyaltyInfo
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf4SetRoyaltyInfo {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf4SetRoyaltyInfo</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf4SetRoyaltyInfo
     */
    constructor() { 
        
        ExecuteMessagePostRequestOneOf4SetRoyaltyInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf4SetRoyaltyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf4SetRoyaltyInfo} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf4SetRoyaltyInfo} The populated <code>ExecuteMessagePostRequestOneOf4SetRoyaltyInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf4SetRoyaltyInfo();

            if (data.hasOwnProperty('padding')) {
                obj['padding'] = ApiClient.convertToType(data['padding'], 'String');
            }
            if (data.hasOwnProperty('royalty_info')) {
                obj['royalty_info'] = RoyaltyInfo.constructFromObject(data['royalty_info']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf4SetRoyaltyInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf4SetRoyaltyInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['padding'] && !(typeof data['padding'] === 'string' || data['padding'] instanceof String)) {
            throw new Error("Expected the field `padding` to be a primitive type in the JSON string but got " + data['padding']);
        }
        // validate the optional field `royalty_info`
        if (data['royalty_info']) { // data not null
          RoyaltyInfo.validateJSON(data['royalty_info']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }

        return true;
    }


}



/**
 * optional message length padding
 * @member {String} padding
 */
ExecuteMessagePostRequestOneOf4SetRoyaltyInfo.prototype['padding'] = undefined;

/**
 * @member {module:model/RoyaltyInfo} royalty_info
 */
ExecuteMessagePostRequestOneOf4SetRoyaltyInfo.prototype['royalty_info'] = undefined;

/**
 * optional id of the token whose royalty information should be updated.  If not provided, this updates the default royalty information for any new tokens minted on the contract
 * @member {String} token_id
 */
ExecuteMessagePostRequestOneOf4SetRoyaltyInfo.prototype['token_id'] = undefined;






export default ExecuteMessagePostRequestOneOf4SetRoyaltyInfo;

