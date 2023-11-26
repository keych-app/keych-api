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
import LicenseTypeInfoPriceInner from './LicenseTypeInfoPriceInner';

/**
 * The LicenseTypeInfo model module.
 * @module model/LicenseTypeInfo
 * @version 1.0.0
 */
class LicenseTypeInfo {
    /**
     * Constructs a new <code>LicenseTypeInfo</code>.
     * Contains information on a Product&#39;s license type provided by the vendor
     * @alias module:model/LicenseTypeInfo
     * @param symbol {String} Symbol of the license. Must be an alphanumeric string between 3 and 16 characters
     * @param name {String} License type name
     * @param duration {Number} License type duration in days
     */
    constructor(symbol, name, duration) { 
        
        LicenseTypeInfo.initialize(this, symbol, name, duration);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, symbol, name, duration) { 
        obj['symbol'] = symbol;
        obj['name'] = name;
        obj['duration'] = duration;
    }

    /**
     * Constructs a <code>LicenseTypeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseTypeInfo} obj Optional instance to populate.
     * @return {module:model/LicenseTypeInfo} The populated <code>LicenseTypeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseTypeInfo();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], [LicenseTypeInfoPriceInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LicenseTypeInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LicenseTypeInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LicenseTypeInfo.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        if (data['price']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['price'])) {
                throw new Error("Expected the field `price` to be an array in the JSON data but got " + data['price']);
            }
            // validate the optional field `price` (array)
            for (const item of data['price']) {
                LicenseTypeInfoPriceInner.validateJSON(item);
            };
        }

        return true;
    }


}

LicenseTypeInfo.RequiredProperties = ["symbol", "name", "duration"];

/**
 * Symbol of the license. Must be an alphanumeric string between 3 and 16 characters
 * @member {String} symbol
 */
LicenseTypeInfo.prototype['symbol'] = undefined;

/**
 * License type name
 * @member {String} name
 */
LicenseTypeInfo.prototype['name'] = undefined;

/**
 * License Type textual description provided by the vendor
 * @member {String} description
 */
LicenseTypeInfo.prototype['description'] = undefined;

/**
 * License type Image url
 * @member {String} image
 */
LicenseTypeInfo.prototype['image'] = undefined;

/**
 * License type duration in days
 * @member {Number} duration
 */
LicenseTypeInfo.prototype['duration'] = undefined;

/**
 * Array of (fixed) prices in various denominations accepted by the vendor
 * @member {Array.<module:model/LicenseTypeInfoPriceInner>} price
 */
LicenseTypeInfo.prototype['price'] = undefined;






export default LicenseTypeInfo;
