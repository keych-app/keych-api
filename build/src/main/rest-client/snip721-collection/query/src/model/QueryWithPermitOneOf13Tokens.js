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
 * The QueryWithPermitOneOf13Tokens model module.
 * @module model/QueryWithPermitOneOf13Tokens
 * @version 1.0.0
 */
class QueryWithPermitOneOf13Tokens {
    /**
     * Constructs a new <code>QueryWithPermitOneOf13Tokens</code>.
     * @alias module:model/QueryWithPermitOneOf13Tokens
     * @param owner {String} 
     */
    constructor(owner) { 
        
        QueryWithPermitOneOf13Tokens.initialize(this, owner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, owner) { 
        obj['owner'] = owner;
    }

    /**
     * Constructs a <code>QueryWithPermitOneOf13Tokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryWithPermitOneOf13Tokens} obj Optional instance to populate.
     * @return {module:model/QueryWithPermitOneOf13Tokens} The populated <code>QueryWithPermitOneOf13Tokens</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryWithPermitOneOf13Tokens();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('start_after')) {
                obj['start_after'] = ApiClient.convertToType(data['start_after'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueryWithPermitOneOf13Tokens</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryWithPermitOneOf13Tokens</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of QueryWithPermitOneOf13Tokens.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['start_after'] && !(typeof data['start_after'] === 'string' || data['start_after'] instanceof String)) {
            throw new Error("Expected the field `start_after` to be a primitive type in the JSON string but got " + data['start_after']);
        }

        return true;
    }


}

QueryWithPermitOneOf13Tokens.RequiredProperties = ["owner"];

/**
 * optional number of token ids to display
 * @member {Number} limit
 */
QueryWithPermitOneOf13Tokens.prototype['limit'] = undefined;

/**
 * @member {String} owner
 */
QueryWithPermitOneOf13Tokens.prototype['owner'] = undefined;

/**
 * paginate by providing the last token_id received in the previous query
 * @member {String} start_after
 */
QueryWithPermitOneOf13Tokens.prototype['start_after'] = undefined;






export default QueryWithPermitOneOf13Tokens;

