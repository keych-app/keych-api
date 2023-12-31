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
 * The Royalty model module.
 * @module model/Royalty
 * @version 1.0.0
 */
class Royalty {
    /**
     * Constructs a new <code>Royalty</code>.
     * data for a single royalty
     * @alias module:model/Royalty
     * @param rate {Number} royalty rate
     * @param recipient {String} address to send royalties to
     */
    constructor(rate, recipient) { 
        
        Royalty.initialize(this, rate, recipient);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rate, recipient) { 
        obj['rate'] = rate;
        obj['recipient'] = recipient;
    }

    /**
     * Constructs a <code>Royalty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Royalty} obj Optional instance to populate.
     * @return {module:model/Royalty} The populated <code>Royalty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Royalty();

            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Royalty</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Royalty</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Royalty.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['recipient'] && !(typeof data['recipient'] === 'string' || data['recipient'] instanceof String)) {
            throw new Error("Expected the field `recipient` to be a primitive type in the JSON string but got " + data['recipient']);
        }

        return true;
    }


}

Royalty.RequiredProperties = ["rate", "recipient"];

/**
 * royalty rate
 * @member {Number} rate
 */
Royalty.prototype['rate'] = undefined;

/**
 * address to send royalties to
 * @member {String} recipient
 */
Royalty.prototype['recipient'] = undefined;






export default Royalty;

