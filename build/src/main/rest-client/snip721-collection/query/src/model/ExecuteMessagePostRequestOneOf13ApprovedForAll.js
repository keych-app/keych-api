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
 * The ExecuteMessagePostRequestOneOf13ApprovedForAll model module.
 * @module model/ExecuteMessagePostRequestOneOf13ApprovedForAll
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf13ApprovedForAll {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf13ApprovedForAll</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf13ApprovedForAll
     * @param owner {String} 
     */
    constructor(owner) { 
        
        ExecuteMessagePostRequestOneOf13ApprovedForAll.initialize(this, owner);
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
     * Constructs a <code>ExecuteMessagePostRequestOneOf13ApprovedForAll</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf13ApprovedForAll} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf13ApprovedForAll} The populated <code>ExecuteMessagePostRequestOneOf13ApprovedForAll</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf13ApprovedForAll();

            if (data.hasOwnProperty('include_expired')) {
                obj['include_expired'] = ApiClient.convertToType(data['include_expired'], 'Boolean');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('viewing_key')) {
                obj['viewing_key'] = ApiClient.convertToType(data['viewing_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf13ApprovedForAll</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf13ApprovedForAll</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf13ApprovedForAll.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['viewing_key'] && !(typeof data['viewing_key'] === 'string' || data['viewing_key'] instanceof String)) {
            throw new Error("Expected the field `viewing_key` to be a primitive type in the JSON string but got " + data['viewing_key']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf13ApprovedForAll.RequiredProperties = ["owner"];

/**
 * optionally include expired Approvals in the response list.  If ommitted or false, expired Approvals will be filtered out of the response
 * @member {Boolean} include_expired
 */
ExecuteMessagePostRequestOneOf13ApprovedForAll.prototype['include_expired'] = undefined;

/**
 * @member {String} owner
 */
ExecuteMessagePostRequestOneOf13ApprovedForAll.prototype['owner'] = undefined;

/**
 * optional viewing key to authenticate this query.  It is \"optional\" only in the sense that a CW721 query does not have this field.  However, not providing the key will always result in an empty list
 * @member {String} viewing_key
 */
ExecuteMessagePostRequestOneOf13ApprovedForAll.prototype['viewing_key'] = undefined;






export default ExecuteMessagePostRequestOneOf13ApprovedForAll;
