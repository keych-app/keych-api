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
import ExecuteMessagePostRequestOneOf7SetGlobalApproval from './ExecuteMessagePostRequestOneOf7SetGlobalApproval';

/**
 * The ExecuteMessagePostRequestOneOf7 model module.
 * @module model/ExecuteMessagePostRequestOneOf7
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf7 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf7</code>.
     * add/remove approval(s) that whitelist everyone (makes public)
     * @alias module:model/ExecuteMessagePostRequestOneOf7
     * @param setGlobalApproval {module:model/ExecuteMessagePostRequestOneOf7SetGlobalApproval} 
     */
    constructor(setGlobalApproval) { 
        
        ExecuteMessagePostRequestOneOf7.initialize(this, setGlobalApproval);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, setGlobalApproval) { 
        obj['set_global_approval'] = setGlobalApproval;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf7</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf7} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf7} The populated <code>ExecuteMessagePostRequestOneOf7</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf7();

            if (data.hasOwnProperty('set_global_approval')) {
                obj['set_global_approval'] = ExecuteMessagePostRequestOneOf7SetGlobalApproval.constructFromObject(data['set_global_approval']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf7</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf7</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf7.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `set_global_approval`
        if (data['set_global_approval']) { // data not null
          ExecuteMessagePostRequestOneOf7SetGlobalApproval.validateJSON(data['set_global_approval']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf7.RequiredProperties = ["set_global_approval"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf7SetGlobalApproval} set_global_approval
 */
ExecuteMessagePostRequestOneOf7.prototype['set_global_approval'] = undefined;






export default ExecuteMessagePostRequestOneOf7;

