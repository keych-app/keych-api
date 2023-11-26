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
 * The QueryWithPermitOneOfRoyaltyInfo model module.
 * @module model/QueryWithPermitOneOfRoyaltyInfo
 * @version 1.0.0
 */
class QueryWithPermitOneOfRoyaltyInfo {
    /**
     * Constructs a new <code>QueryWithPermitOneOfRoyaltyInfo</code>.
     * @alias module:model/QueryWithPermitOneOfRoyaltyInfo
     */
    constructor() { 
        
        QueryWithPermitOneOfRoyaltyInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QueryWithPermitOneOfRoyaltyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryWithPermitOneOfRoyaltyInfo} obj Optional instance to populate.
     * @return {module:model/QueryWithPermitOneOfRoyaltyInfo} The populated <code>QueryWithPermitOneOfRoyaltyInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryWithPermitOneOfRoyaltyInfo();

            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueryWithPermitOneOfRoyaltyInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryWithPermitOneOfRoyaltyInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }

        return true;
    }


}



/**
 * optional ID of the token whose royalty information should be displayed.  If not provided, display the contract's default royalty information
 * @member {String} token_id
 */
QueryWithPermitOneOfRoyaltyInfo.prototype['token_id'] = undefined;






export default QueryWithPermitOneOfRoyaltyInfo;

