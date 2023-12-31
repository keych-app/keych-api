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
import ExecuteMessagePostRequestOneOf7RevokePermit from './ExecuteMessagePostRequestOneOf7RevokePermit';

/**
 * The ExecuteMessagePostRequestOneOf7 model module.
 * @module model/ExecuteMessagePostRequestOneOf7
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf7 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf7</code>.
     * disallow the use of a permit
     * @alias module:model/ExecuteMessagePostRequestOneOf7
     * @param revokePermit {module:model/ExecuteMessagePostRequestOneOf7RevokePermit} 
     */
    constructor(revokePermit) { 
        
        ExecuteMessagePostRequestOneOf7.initialize(this, revokePermit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, revokePermit) { 
        obj['revoke_permit'] = revokePermit;
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

            if (data.hasOwnProperty('revoke_permit')) {
                obj['revoke_permit'] = ExecuteMessagePostRequestOneOf7RevokePermit.constructFromObject(data['revoke_permit']);
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
        // validate the optional field `revoke_permit`
        if (data['revoke_permit']) { // data not null
          ExecuteMessagePostRequestOneOf7RevokePermit.validateJSON(data['revoke_permit']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf7.RequiredProperties = ["revoke_permit"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf7RevokePermit} revoke_permit
 */
ExecuteMessagePostRequestOneOf7.prototype['revoke_permit'] = undefined;






export default ExecuteMessagePostRequestOneOf7;

