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
import FilterTypes from './FilterTypes';
import PermitForTokenPermissions from './PermitForTokenPermissions';

/**
 * The ExecuteMessagePostRequestOneOfListMyMinter model module.
 * @module model/ExecuteMessagePostRequestOneOfListMyMinter
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOfListMyMinter {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOfListMyMinter</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOfListMyMinter
     */
    constructor() { 
        
        ExecuteMessagePostRequestOneOfListMyMinter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOfListMyMinter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOfListMyMinter} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOfListMyMinter} The populated <code>ExecuteMessagePostRequestOneOfListMyMinter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOfListMyMinter();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = FilterTypes.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('permit')) {
                obj['permit'] = PermitForTokenPermissions.constructFromObject(data['permit']);
            }
            if (data.hasOwnProperty('start_page')) {
                obj['start_page'] = ApiClient.convertToType(data['start_page'], 'Number');
            }
            if (data.hasOwnProperty('viewing_key')) {
                obj['viewing_key'] = ApiClient.convertToType(data['viewing_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOfListMyMinter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOfListMyMinter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // validate the optional field `permit`
        if (data['permit']) { // data not null
          PermitForTokenPermissions.validateJSON(data['permit']);
        }
        // ensure the json data is a string
        if (data['viewing_key'] && !(typeof data['viewing_key'] === 'string' || data['viewing_key'] instanceof String)) {
            throw new Error("Expected the field `viewing_key` to be a primitive type in the JSON string but got " + data['viewing_key']);
        }

        return true;
    }


}



/**
 * address whose activity to display
 * @member {String} address
 */
ExecuteMessagePostRequestOneOfListMyMinter.prototype['address'] = undefined;

/**
 * @member {module:model/FilterTypes} filter
 */
ExecuteMessagePostRequestOneOfListMyMinter.prototype['filter'] = undefined;

/**
 * optional number of minter to return in this page (applies to both active and inactive). Default: DEFAULT_PAGE_SIZE
 * @member {Number} page_size
 */
ExecuteMessagePostRequestOneOfListMyMinter.prototype['page_size'] = undefined;

/**
 * @member {module:model/PermitForTokenPermissions} permit
 */
ExecuteMessagePostRequestOneOfListMyMinter.prototype['permit'] = undefined;

/**
 * start page for the minters returned and listed (applies to both active and inactive). Default: 0
 * @member {Number} start_page
 */
ExecuteMessagePostRequestOneOfListMyMinter.prototype['start_page'] = undefined;

/**
 * viewing key
 * @member {String} viewing_key
 */
ExecuteMessagePostRequestOneOfListMyMinter.prototype['viewing_key'] = undefined;






export default ExecuteMessagePostRequestOneOfListMyMinter;

