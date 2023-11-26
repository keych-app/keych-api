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
import Expiration from './Expiration';

/**
 * The ExecuteMessagePostRequestOneOf11ApproveAll model module.
 * @module model/ExecuteMessagePostRequestOneOf11ApproveAll
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf11ApproveAll {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf11ApproveAll</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf11ApproveAll
     * @param operator {String} address being granted permission to transfer
     */
    constructor(operator) { 
        
        ExecuteMessagePostRequestOneOf11ApproveAll.initialize(this, operator);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operator) { 
        obj['operator'] = operator;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf11ApproveAll</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf11ApproveAll} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf11ApproveAll} The populated <code>ExecuteMessagePostRequestOneOf11ApproveAll</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf11ApproveAll();

            if (data.hasOwnProperty('expires')) {
                obj['expires'] = Expiration.constructFromObject(data['expires']);
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('padding')) {
                obj['padding'] = ApiClient.convertToType(data['padding'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf11ApproveAll</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf11ApproveAll</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf11ApproveAll.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `expires`
        if (data['expires']) { // data not null
          Expiration.validateJSON(data['expires']);
        }
        // ensure the json data is a string
        if (data['operator'] && !(typeof data['operator'] === 'string' || data['operator'] instanceof String)) {
            throw new Error("Expected the field `operator` to be a primitive type in the JSON string but got " + data['operator']);
        }
        // ensure the json data is a string
        if (data['padding'] && !(typeof data['padding'] === 'string' || data['padding'] instanceof String)) {
            throw new Error("Expected the field `padding` to be a primitive type in the JSON string but got " + data['padding']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf11ApproveAll.RequiredProperties = ["operator"];

/**
 * @member {module:model/Expiration} expires
 */
ExecuteMessagePostRequestOneOf11ApproveAll.prototype['expires'] = undefined;

/**
 * address being granted permission to transfer
 * @member {String} operator
 */
ExecuteMessagePostRequestOneOf11ApproveAll.prototype['operator'] = undefined;

/**
 * optional message length padding
 * @member {String} padding
 */
ExecuteMessagePostRequestOneOf11ApproveAll.prototype['padding'] = undefined;






export default ExecuteMessagePostRequestOneOf11ApproveAll;

