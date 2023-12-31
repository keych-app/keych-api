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
 * The ExecuteMessagePostRequestOneOf12InventoryApprovals model module.
 * @module model/ExecuteMessagePostRequestOneOf12InventoryApprovals
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf12InventoryApprovals {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf12InventoryApprovals</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf12InventoryApprovals
     * @param address {String} 
     * @param viewingKey {String} the viewing key
     */
    constructor(address, viewingKey) { 
        
        ExecuteMessagePostRequestOneOf12InventoryApprovals.initialize(this, address, viewingKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, viewingKey) { 
        obj['address'] = address;
        obj['viewing_key'] = viewingKey;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf12InventoryApprovals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf12InventoryApprovals} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf12InventoryApprovals} The populated <code>ExecuteMessagePostRequestOneOf12InventoryApprovals</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf12InventoryApprovals();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('include_expired')) {
                obj['include_expired'] = ApiClient.convertToType(data['include_expired'], 'Boolean');
            }
            if (data.hasOwnProperty('viewing_key')) {
                obj['viewing_key'] = ApiClient.convertToType(data['viewing_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf12InventoryApprovals</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf12InventoryApprovals</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf12InventoryApprovals.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['viewing_key'] && !(typeof data['viewing_key'] === 'string' || data['viewing_key'] instanceof String)) {
            throw new Error("Expected the field `viewing_key` to be a primitive type in the JSON string but got " + data['viewing_key']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf12InventoryApprovals.RequiredProperties = ["address", "viewing_key"];

/**
 * @member {String} address
 */
ExecuteMessagePostRequestOneOf12InventoryApprovals.prototype['address'] = undefined;

/**
 * optionally include expired Approvals in the response list.  If ommitted or false, expired Approvals will be filtered out of the response
 * @member {Boolean} include_expired
 */
ExecuteMessagePostRequestOneOf12InventoryApprovals.prototype['include_expired'] = undefined;

/**
 * the viewing key
 * @member {String} viewing_key
 */
ExecuteMessagePostRequestOneOf12InventoryApprovals.prototype['viewing_key'] = undefined;






export default ExecuteMessagePostRequestOneOf12InventoryApprovals;

