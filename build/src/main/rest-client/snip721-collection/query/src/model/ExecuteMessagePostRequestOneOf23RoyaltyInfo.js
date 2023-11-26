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
import ViewerInfo from './ViewerInfo';

/**
 * The ExecuteMessagePostRequestOneOf23RoyaltyInfo model module.
 * @module model/ExecuteMessagePostRequestOneOf23RoyaltyInfo
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf23RoyaltyInfo {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf23RoyaltyInfo</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf23RoyaltyInfo
     */
    constructor() { 
        
        ExecuteMessagePostRequestOneOf23RoyaltyInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf23RoyaltyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf23RoyaltyInfo} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf23RoyaltyInfo} The populated <code>ExecuteMessagePostRequestOneOf23RoyaltyInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf23RoyaltyInfo();

            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('viewer')) {
                obj['viewer'] = ViewerInfo.constructFromObject(data['viewer']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf23RoyaltyInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf23RoyaltyInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // validate the optional field `viewer`
        if (data['viewer']) { // data not null
          ViewerInfo.validateJSON(data['viewer']);
        }

        return true;
    }


}



/**
 * optional ID of the token whose royalty information should be displayed.  If not provided, display the contract's default royalty information
 * @member {String} token_id
 */
ExecuteMessagePostRequestOneOf23RoyaltyInfo.prototype['token_id'] = undefined;

/**
 * @member {module:model/ViewerInfo} viewer
 */
ExecuteMessagePostRequestOneOf23RoyaltyInfo.prototype['viewer'] = undefined;






export default ExecuteMessagePostRequestOneOf23RoyaltyInfo;

