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
 * The ExecuteMessagePostRequestOneOf1ListActiveCollections model module.
 * @module model/ExecuteMessagePostRequestOneOf1ListActiveCollections
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf1ListActiveCollections {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf1ListActiveCollections</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf1ListActiveCollections
     */
    constructor() { 
        
        ExecuteMessagePostRequestOneOf1ListActiveCollections.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf1ListActiveCollections</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf1ListActiveCollections} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf1ListActiveCollections} The populated <code>ExecuteMessagePostRequestOneOf1ListActiveCollections</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf1ListActiveCollections();

            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('start_page')) {
                obj['start_page'] = ApiClient.convertToType(data['start_page'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf1ListActiveCollections</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf1ListActiveCollections</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * optional number of offspring to return in this page. Default: DEFAULT_PAGE_SIZE
 * @member {Number} page_size
 */
ExecuteMessagePostRequestOneOf1ListActiveCollections.prototype['page_size'] = undefined;

/**
 * start page for the offsprings returned and listed. Default: 0
 * @member {Number} start_page
 */
ExecuteMessagePostRequestOneOf1ListActiveCollections.prototype['start_page'] = undefined;






export default ExecuteMessagePostRequestOneOf1ListActiveCollections;
