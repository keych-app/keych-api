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
import ExecuteMessagePostRequestOneOf3IsKeyValid from './ExecuteMessagePostRequestOneOf3IsKeyValid';

/**
 * The ExecuteMessagePostRequestOneOf3 model module.
 * @module model/ExecuteMessagePostRequestOneOf3
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf3 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf3</code>.
     * authenticates the supplied address/viewing key. This should be called by offspring.
     * @alias module:model/ExecuteMessagePostRequestOneOf3
     * @param isKeyValid {module:model/ExecuteMessagePostRequestOneOf3IsKeyValid} 
     */
    constructor(isKeyValid) { 
        
        ExecuteMessagePostRequestOneOf3.initialize(this, isKeyValid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isKeyValid) { 
        obj['is_key_valid'] = isKeyValid;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf3} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf3} The populated <code>ExecuteMessagePostRequestOneOf3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf3();

            if (data.hasOwnProperty('is_key_valid')) {
                obj['is_key_valid'] = ExecuteMessagePostRequestOneOf3IsKeyValid.constructFromObject(data['is_key_valid']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf3</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf3</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf3.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `is_key_valid`
        if (data['is_key_valid']) { // data not null
          ExecuteMessagePostRequestOneOf3IsKeyValid.validateJSON(data['is_key_valid']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf3.RequiredProperties = ["is_key_valid"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf3IsKeyValid} is_key_valid
 */
ExecuteMessagePostRequestOneOf3.prototype['is_key_valid'] = undefined;






export default ExecuteMessagePostRequestOneOf3;

