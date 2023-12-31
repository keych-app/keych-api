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
 * The QueryWithPermitOneOf6InventoryApprovals model module.
 * @module model/QueryWithPermitOneOf6InventoryApprovals
 * @version 1.0.0
 */
class QueryWithPermitOneOf6InventoryApprovals {
    /**
     * Constructs a new <code>QueryWithPermitOneOf6InventoryApprovals</code>.
     * @alias module:model/QueryWithPermitOneOf6InventoryApprovals
     */
    constructor() { 
        
        QueryWithPermitOneOf6InventoryApprovals.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QueryWithPermitOneOf6InventoryApprovals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryWithPermitOneOf6InventoryApprovals} obj Optional instance to populate.
     * @return {module:model/QueryWithPermitOneOf6InventoryApprovals} The populated <code>QueryWithPermitOneOf6InventoryApprovals</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryWithPermitOneOf6InventoryApprovals();

            if (data.hasOwnProperty('include_expired')) {
                obj['include_expired'] = ApiClient.convertToType(data['include_expired'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueryWithPermitOneOf6InventoryApprovals</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryWithPermitOneOf6InventoryApprovals</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * optionally include expired Approvals in the response list.  If ommitted or false, expired Approvals will be filtered out of the response
 * @member {Boolean} include_expired
 */
QueryWithPermitOneOf6InventoryApprovals.prototype['include_expired'] = undefined;






export default QueryWithPermitOneOf6InventoryApprovals;

