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
import Send from './Send';

/**
 * The ExecuteMessagePostRequestOneOf16BatchSendNft model module.
 * @module model/ExecuteMessagePostRequestOneOf16BatchSendNft
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf16BatchSendNft {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf16BatchSendNft</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf16BatchSendNft
     * @param sends {Array.<module:model/Send>} list of sends to perform
     */
    constructor(sends) { 
        
        ExecuteMessagePostRequestOneOf16BatchSendNft.initialize(this, sends);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sends) { 
        obj['sends'] = sends;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf16BatchSendNft</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf16BatchSendNft} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf16BatchSendNft} The populated <code>ExecuteMessagePostRequestOneOf16BatchSendNft</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf16BatchSendNft();

            if (data.hasOwnProperty('padding')) {
                obj['padding'] = ApiClient.convertToType(data['padding'], 'String');
            }
            if (data.hasOwnProperty('sends')) {
                obj['sends'] = ApiClient.convertToType(data['sends'], [Send]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf16BatchSendNft</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf16BatchSendNft</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf16BatchSendNft.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['padding'] && !(typeof data['padding'] === 'string' || data['padding'] instanceof String)) {
            throw new Error("Expected the field `padding` to be a primitive type in the JSON string but got " + data['padding']);
        }
        if (data['sends']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sends'])) {
                throw new Error("Expected the field `sends` to be an array in the JSON data but got " + data['sends']);
            }
            // validate the optional field `sends` (array)
            for (const item of data['sends']) {
                Send.validateJSON(item);
            };
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf16BatchSendNft.RequiredProperties = ["sends"];

/**
 * optional message length padding
 * @member {String} padding
 */
ExecuteMessagePostRequestOneOf16BatchSendNft.prototype['padding'] = undefined;

/**
 * list of sends to perform
 * @member {Array.<module:model/Send>} sends
 */
ExecuteMessagePostRequestOneOf16BatchSendNft.prototype['sends'] = undefined;






export default ExecuteMessagePostRequestOneOf16BatchSendNft;

