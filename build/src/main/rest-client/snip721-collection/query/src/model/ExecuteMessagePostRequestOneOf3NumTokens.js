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
 * The ExecuteMessagePostRequestOneOf3NumTokens model module.
 * @module model/ExecuteMessagePostRequestOneOf3NumTokens
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf3NumTokens {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf3NumTokens</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf3NumTokens
     */
    constructor() { 
        
        ExecuteMessagePostRequestOneOf3NumTokens.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf3NumTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf3NumTokens} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf3NumTokens} The populated <code>ExecuteMessagePostRequestOneOf3NumTokens</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf3NumTokens();

            if (data.hasOwnProperty('viewer')) {
                obj['viewer'] = ViewerInfo.constructFromObject(data['viewer']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf3NumTokens</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf3NumTokens</code>.
     */
    static validateJSON(data) {
        // validate the optional field `viewer`
        if (data['viewer']) { // data not null
          ViewerInfo.validateJSON(data['viewer']);
        }

        return true;
    }


}



/**
 * @member {module:model/ViewerInfo} viewer
 */
ExecuteMessagePostRequestOneOf3NumTokens.prototype['viewer'] = undefined;






export default ExecuteMessagePostRequestOneOf3NumTokens;

