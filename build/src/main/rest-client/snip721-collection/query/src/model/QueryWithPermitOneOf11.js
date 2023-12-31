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
import QueryWithPermitOneOf2NftDossier from './QueryWithPermitOneOf2NftDossier';

/**
 * The QueryWithPermitOneOf11 model module.
 * @module model/QueryWithPermitOneOf11
 * @version 1.0.0
 */
class QueryWithPermitOneOf11 {
    /**
     * Constructs a new <code>QueryWithPermitOneOf11</code>.
     * list all the approvals in place for a specified token if given the owner&#39;s permit
     * @alias module:model/QueryWithPermitOneOf11
     * @param tokenApprovals {module:model/QueryWithPermitOneOf2NftDossier} 
     */
    constructor(tokenApprovals) { 
        
        QueryWithPermitOneOf11.initialize(this, tokenApprovals);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokenApprovals) { 
        obj['token_approvals'] = tokenApprovals;
    }

    /**
     * Constructs a <code>QueryWithPermitOneOf11</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryWithPermitOneOf11} obj Optional instance to populate.
     * @return {module:model/QueryWithPermitOneOf11} The populated <code>QueryWithPermitOneOf11</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryWithPermitOneOf11();

            if (data.hasOwnProperty('token_approvals')) {
                obj['token_approvals'] = QueryWithPermitOneOf2NftDossier.constructFromObject(data['token_approvals']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueryWithPermitOneOf11</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryWithPermitOneOf11</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of QueryWithPermitOneOf11.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `token_approvals`
        if (data['token_approvals']) { // data not null
          QueryWithPermitOneOf2NftDossier.validateJSON(data['token_approvals']);
        }

        return true;
    }


}

QueryWithPermitOneOf11.RequiredProperties = ["token_approvals"];

/**
 * @member {module:model/QueryWithPermitOneOf2NftDossier} token_approvals
 */
QueryWithPermitOneOf11.prototype['token_approvals'] = undefined;






export default QueryWithPermitOneOf11;

