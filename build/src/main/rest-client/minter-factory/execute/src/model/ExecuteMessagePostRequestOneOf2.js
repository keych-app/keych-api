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
import ExecuteMessagePostRequestOneOf2NewMinterContract from './ExecuteMessagePostRequestOneOf2NewMinterContract';

/**
 * The ExecuteMessagePostRequestOneOf2 model module.
 * @module model/ExecuteMessagePostRequestOneOf2
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf2 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf2</code>.
     * Allows the admin to add a new minter contract version
     * @alias module:model/ExecuteMessagePostRequestOneOf2
     * @param newMinterContract {module:model/ExecuteMessagePostRequestOneOf2NewMinterContract} 
     */
    constructor(newMinterContract) { 
        
        ExecuteMessagePostRequestOneOf2.initialize(this, newMinterContract);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, newMinterContract) { 
        obj['new_minter_contract'] = newMinterContract;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf2} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf2} The populated <code>ExecuteMessagePostRequestOneOf2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf2();

            if (data.hasOwnProperty('new_minter_contract')) {
                obj['new_minter_contract'] = ExecuteMessagePostRequestOneOf2NewMinterContract.constructFromObject(data['new_minter_contract']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf2.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `new_minter_contract`
        if (data['new_minter_contract']) { // data not null
          ExecuteMessagePostRequestOneOf2NewMinterContract.validateJSON(data['new_minter_contract']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf2.RequiredProperties = ["new_minter_contract"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf2NewMinterContract} new_minter_contract
 */
ExecuteMessagePostRequestOneOf2.prototype['new_minter_contract'] = undefined;






export default ExecuteMessagePostRequestOneOf2;

