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
import ExecuteMessagePostRequestOneOf8SetWhitelistedApproval from './ExecuteMessagePostRequestOneOf8SetWhitelistedApproval';

/**
 * The ExecuteMessagePostRequestOneOf8 model module.
 * @module model/ExecuteMessagePostRequestOneOf8
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf8 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf8</code>.
     * add/remove approval(s) for a specific address on the token(s) you own.  Any permissions that are omitted will keep the current permission setting for that whitelist address
     * @alias module:model/ExecuteMessagePostRequestOneOf8
     * @param setWhitelistedApproval {module:model/ExecuteMessagePostRequestOneOf8SetWhitelistedApproval} 
     */
    constructor(setWhitelistedApproval) { 
        
        ExecuteMessagePostRequestOneOf8.initialize(this, setWhitelistedApproval);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, setWhitelistedApproval) { 
        obj['set_whitelisted_approval'] = setWhitelistedApproval;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf8</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf8} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf8} The populated <code>ExecuteMessagePostRequestOneOf8</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf8();

            if (data.hasOwnProperty('set_whitelisted_approval')) {
                obj['set_whitelisted_approval'] = ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.constructFromObject(data['set_whitelisted_approval']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf8</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf8</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf8.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `set_whitelisted_approval`
        if (data['set_whitelisted_approval']) { // data not null
          ExecuteMessagePostRequestOneOf8SetWhitelistedApproval.validateJSON(data['set_whitelisted_approval']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf8.RequiredProperties = ["set_whitelisted_approval"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf8SetWhitelistedApproval} set_whitelisted_approval
 */
ExecuteMessagePostRequestOneOf8.prototype['set_whitelisted_approval'] = undefined;






export default ExecuteMessagePostRequestOneOf8;

