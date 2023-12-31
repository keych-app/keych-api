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
import QueryWithPermitOneOf6InventoryApprovals from './QueryWithPermitOneOf6InventoryApprovals';

/**
 * The QueryWithPermitOneOf12 model module.
 * @module model/QueryWithPermitOneOf12
 * @version 1.0.0
 */
class QueryWithPermitOneOf12 {
    /**
     * Constructs a new <code>QueryWithPermitOneOf12</code>.
     * displays a list of all the CW721-style operators (any address that was granted approval to transfer all of the owner&#39;s tokens).  This query is provided to maintain CW721 compliance
     * @alias module:model/QueryWithPermitOneOf12
     * @param approvedForAll {module:model/QueryWithPermitOneOf6InventoryApprovals} 
     */
    constructor(approvedForAll) { 
        
        QueryWithPermitOneOf12.initialize(this, approvedForAll);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, approvedForAll) { 
        obj['approved_for_all'] = approvedForAll;
    }

    /**
     * Constructs a <code>QueryWithPermitOneOf12</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryWithPermitOneOf12} obj Optional instance to populate.
     * @return {module:model/QueryWithPermitOneOf12} The populated <code>QueryWithPermitOneOf12</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryWithPermitOneOf12();

            if (data.hasOwnProperty('approved_for_all')) {
                obj['approved_for_all'] = QueryWithPermitOneOf6InventoryApprovals.constructFromObject(data['approved_for_all']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueryWithPermitOneOf12</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryWithPermitOneOf12</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of QueryWithPermitOneOf12.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `approved_for_all`
        if (data['approved_for_all']) { // data not null
          QueryWithPermitOneOf6InventoryApprovals.validateJSON(data['approved_for_all']);
        }

        return true;
    }


}

QueryWithPermitOneOf12.RequiredProperties = ["approved_for_all"];

/**
 * @member {module:model/QueryWithPermitOneOf6InventoryApprovals} approved_for_all
 */
QueryWithPermitOneOf12.prototype['approved_for_all'] = undefined;






export default QueryWithPermitOneOf12;

