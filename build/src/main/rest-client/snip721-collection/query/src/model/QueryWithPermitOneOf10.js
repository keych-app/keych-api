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
import QueryWithPermitOneOf10AllTokens from './QueryWithPermitOneOf10AllTokens';

/**
 * The QueryWithPermitOneOf10 model module.
 * @module model/QueryWithPermitOneOf10
 * @version 1.0.0
 */
class QueryWithPermitOneOf10 {
    /**
     * Constructs a new <code>QueryWithPermitOneOf10</code>.
     * display an optionally paginated list of all the tokens controlled by the contract. The token supply must either be public, or the querier must be an authenticated minter
     * @alias module:model/QueryWithPermitOneOf10
     * @param allTokens {module:model/QueryWithPermitOneOf10AllTokens} 
     */
    constructor(allTokens) { 
        
        QueryWithPermitOneOf10.initialize(this, allTokens);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, allTokens) { 
        obj['all_tokens'] = allTokens;
    }

    /**
     * Constructs a <code>QueryWithPermitOneOf10</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryWithPermitOneOf10} obj Optional instance to populate.
     * @return {module:model/QueryWithPermitOneOf10} The populated <code>QueryWithPermitOneOf10</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryWithPermitOneOf10();

            if (data.hasOwnProperty('all_tokens')) {
                obj['all_tokens'] = QueryWithPermitOneOf10AllTokens.constructFromObject(data['all_tokens']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueryWithPermitOneOf10</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryWithPermitOneOf10</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of QueryWithPermitOneOf10.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `all_tokens`
        if (data['all_tokens']) { // data not null
          QueryWithPermitOneOf10AllTokens.validateJSON(data['all_tokens']);
        }

        return true;
    }


}

QueryWithPermitOneOf10.RequiredProperties = ["all_tokens"];

/**
 * @member {module:model/QueryWithPermitOneOf10AllTokens} all_tokens
 */
QueryWithPermitOneOf10.prototype['all_tokens'] = undefined;






export default QueryWithPermitOneOf10;

