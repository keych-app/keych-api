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
import ExecuteMessagePostRequestOneOf1NewOffspringContract from './ExecuteMessagePostRequestOneOf1NewOffspringContract';

/**
 * The ExecuteMessagePostRequestOneOf1 model module.
 * @module model/ExecuteMessagePostRequestOneOf1
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf1 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf1</code>.
     * Allows the admin to add a new collection contract version
     * @alias module:model/ExecuteMessagePostRequestOneOf1
     */
    constructor() { 
        
        ExecuteMessagePostRequestOneOf1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf1} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf1} The populated <code>ExecuteMessagePostRequestOneOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf1();

            if (data.hasOwnProperty('new_offspring_contract')) {
                obj['new_offspring_contract'] = ExecuteMessagePostRequestOneOf1NewOffspringContract.constructFromObject(data['new_offspring_contract']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf1</code>.
     */
    static validateJSON(data) {
        // validate the optional field `new_offspring_contract`
        if (data['new_offspring_contract']) { // data not null
          ExecuteMessagePostRequestOneOf1NewOffspringContract.validateJSON(data['new_offspring_contract']);
        }

        return true;
    }


}



/**
 * @member {module:model/ExecuteMessagePostRequestOneOf1NewOffspringContract} new_offspring_contract
 */
ExecuteMessagePostRequestOneOf1.prototype['new_offspring_contract'] = undefined;






export default ExecuteMessagePostRequestOneOf1;
