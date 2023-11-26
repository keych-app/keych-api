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
import ViewerInfo from './ViewerInfo';

/**
 * The ExecuteMessagePostRequestOneOf4AllTokens model module.
 * @module model/ExecuteMessagePostRequestOneOf4AllTokens
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf4AllTokens {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf4AllTokens</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf4AllTokens
     */
    constructor() { 
        
        ExecuteMessagePostRequestOneOf4AllTokens.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf4AllTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf4AllTokens} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf4AllTokens} The populated <code>ExecuteMessagePostRequestOneOf4AllTokens</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf4AllTokens();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('start_after')) {
                obj['start_after'] = ApiClient.convertToType(data['start_after'], 'String');
            }
            if (data.hasOwnProperty('viewer')) {
                obj['viewer'] = ViewerInfo.constructFromObject(data['viewer']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf4AllTokens</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf4AllTokens</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['start_after'] && !(typeof data['start_after'] === 'string' || data['start_after'] instanceof String)) {
            throw new Error("Expected the field `start_after` to be a primitive type in the JSON string but got " + data['start_after']);
        }
        // validate the optional field `viewer`
        if (data['viewer']) { // data not null
          ViewerInfo.validateJSON(data['viewer']);
        }

        return true;
    }


}



/**
 * optional number of token ids to display
 * @member {Number} limit
 */
ExecuteMessagePostRequestOneOf4AllTokens.prototype['limit'] = undefined;

/**
 * paginate by providing the last token_id received in the previous query
 * @member {String} start_after
 */
ExecuteMessagePostRequestOneOf4AllTokens.prototype['start_after'] = undefined;

/**
 * @member {module:model/ViewerInfo} viewer
 */
ExecuteMessagePostRequestOneOf4AllTokens.prototype['viewer'] = undefined;






export default ExecuteMessagePostRequestOneOf4AllTokens;

