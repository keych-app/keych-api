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
import CodeInfo from './CodeInfo';

/**
 * The ExecuteMessagePostRequestOneOf2NewMinterContract model module.
 * @module model/ExecuteMessagePostRequestOneOf2NewMinterContract
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf2NewMinterContract {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf2NewMinterContract</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf2NewMinterContract
     * @param minterCodeInfo {module:model/CodeInfo} 
     */
    constructor(minterCodeInfo) { 
        
        ExecuteMessagePostRequestOneOf2NewMinterContract.initialize(this, minterCodeInfo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, minterCodeInfo) { 
        obj['minter_code_info'] = minterCodeInfo;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf2NewMinterContract</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf2NewMinterContract} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf2NewMinterContract} The populated <code>ExecuteMessagePostRequestOneOf2NewMinterContract</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf2NewMinterContract();

            if (data.hasOwnProperty('minter_code_info')) {
                obj['minter_code_info'] = CodeInfo.constructFromObject(data['minter_code_info']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf2NewMinterContract</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf2NewMinterContract</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf2NewMinterContract.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `minter_code_info`
        if (data['minter_code_info']) { // data not null
          CodeInfo.validateJSON(data['minter_code_info']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf2NewMinterContract.RequiredProperties = ["minter_code_info"];

/**
 * @member {module:model/CodeInfo} minter_code_info
 */
ExecuteMessagePostRequestOneOf2NewMinterContract.prototype['minter_code_info'] = undefined;






export default ExecuteMessagePostRequestOneOf2NewMinterContract;

