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
 * The ExecuteMessagePostRequestOneOf24 model module.
 * @module model/ExecuteMessagePostRequestOneOf24
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf24 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf24</code>.
     * display the contract&#39;s creator
     * @alias module:model/ExecuteMessagePostRequestOneOf24
     * @param contractCreator {Object} 
     */
    constructor(contractCreator) { 
        
        ExecuteMessagePostRequestOneOf24.initialize(this, contractCreator);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contractCreator) { 
        obj['contract_creator'] = contractCreator;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf24</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf24} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf24} The populated <code>ExecuteMessagePostRequestOneOf24</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf24();

            if (data.hasOwnProperty('contract_creator')) {
                obj['contract_creator'] = ApiClient.convertToType(data['contract_creator'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf24</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf24</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf24.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf24.RequiredProperties = ["contract_creator"];

/**
 * @member {Object} contract_creator
 */
ExecuteMessagePostRequestOneOf24.prototype['contract_creator'] = undefined;






export default ExecuteMessagePostRequestOneOf24;

