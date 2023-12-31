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
 * The LicenseTypeInfoPriceInner model module.
 * @module model/LicenseTypeInfoPriceInner
 * @version 1.0.0
 */
class LicenseTypeInfoPriceInner {
    /**
     * Constructs a new <code>LicenseTypeInfoPriceInner</code>.
     * @alias module:model/LicenseTypeInfoPriceInner
     * @param amount {Number} 
     * @param denom {String} 
     */
    constructor(amount, denom) { 
        
        LicenseTypeInfoPriceInner.initialize(this, amount, denom);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, denom) { 
        obj['amount'] = amount;
        obj['denom'] = denom;
    }

    /**
     * Constructs a <code>LicenseTypeInfoPriceInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseTypeInfoPriceInner} obj Optional instance to populate.
     * @return {module:model/LicenseTypeInfoPriceInner} The populated <code>LicenseTypeInfoPriceInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseTypeInfoPriceInner();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('denom')) {
                obj['denom'] = ApiClient.convertToType(data['denom'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LicenseTypeInfoPriceInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LicenseTypeInfoPriceInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LicenseTypeInfoPriceInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['denom'] && !(typeof data['denom'] === 'string' || data['denom'] instanceof String)) {
            throw new Error("Expected the field `denom` to be a primitive type in the JSON string but got " + data['denom']);
        }

        return true;
    }


}

LicenseTypeInfoPriceInner.RequiredProperties = ["amount", "denom"];

/**
 * 
 * @member {Number} amount
 */
LicenseTypeInfoPriceInner.prototype['amount'] = undefined;

/**
 * 
 * @member {String} denom
 */
LicenseTypeInfoPriceInner.prototype['denom'] = undefined;






export default LicenseTypeInfoPriceInner;

