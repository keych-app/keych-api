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
 * The Coin model module.
 * @module model/Coin
 * @version 1.0.0
 */
class Coin {
    /**
     * Constructs a new <code>Coin</code>.
     * @alias module:model/Coin
     * @param amount {String} A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.  # Examples  Use `from` to create instances of this and `u128` to get the value out:  ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);  let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);  let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
     * @param denom {String} 
     */
    constructor(amount, denom) { 
        
        Coin.initialize(this, amount, denom);
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
     * Constructs a <code>Coin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Coin} obj Optional instance to populate.
     * @return {module:model/Coin} The populated <code>Coin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Coin();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('denom')) {
                obj['denom'] = ApiClient.convertToType(data['denom'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Coin</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Coin</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Coin.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['denom'] && !(typeof data['denom'] === 'string' || data['denom'] instanceof String)) {
            throw new Error("Expected the field `denom` to be a primitive type in the JSON string but got " + data['denom']);
        }

        return true;
    }


}

Coin.RequiredProperties = ["amount", "denom"];

/**
 * A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.  # Examples  Use `from` to create instances of this and `u128` to get the value out:  ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);  let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);  let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
 * @member {String} amount
 */
Coin.prototype['amount'] = undefined;

/**
 * @member {String} denom
 */
Coin.prototype['denom'] = undefined;






export default Coin;

