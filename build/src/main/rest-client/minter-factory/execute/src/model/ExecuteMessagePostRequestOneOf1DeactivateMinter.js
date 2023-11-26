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
 * The ExecuteMessagePostRequestOneOf1DeactivateMinter model module.
 * @module model/ExecuteMessagePostRequestOneOf1DeactivateMinter
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf1DeactivateMinter {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf1DeactivateMinter</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOf1DeactivateMinter
     * @param owner {String} A human readable address.  In Cosmos, this is typically bech32 encoded. But for multi-chain smart contracts no assumptions should be made other than being UTF-8 encoded and of reasonable length.  This type represents a validated address. It can be created in the following ways 1. Use `Addr::unchecked(input)` 2. Use `let checked: Addr = deps.api.addr_validate(input)?` 3. Use `let checked: Addr = deps.api.addr_humanize(canonical_addr)?` 4. Deserialize from JSON. This must only be done from JSON that was validated before such as a contract's state. `Addr` must not be used in messages sent by the user because this would result in unvalidated instances.  This type is immutable. If you really need to mutate it (Really? Are you sure?), create a mutable copy using `let mut mutable = Addr::to_string()` and operate on that `String` instance.
     */
    constructor(owner) { 
        
        ExecuteMessagePostRequestOneOf1DeactivateMinter.initialize(this, owner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, owner) { 
        obj['owner'] = owner;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf1DeactivateMinter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf1DeactivateMinter} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf1DeactivateMinter} The populated <code>ExecuteMessagePostRequestOneOf1DeactivateMinter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf1DeactivateMinter();

            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf1DeactivateMinter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf1DeactivateMinter</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf1DeactivateMinter.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf1DeactivateMinter.RequiredProperties = ["owner"];

/**
 * A human readable address.  In Cosmos, this is typically bech32 encoded. But for multi-chain smart contracts no assumptions should be made other than being UTF-8 encoded and of reasonable length.  This type represents a validated address. It can be created in the following ways 1. Use `Addr::unchecked(input)` 2. Use `let checked: Addr = deps.api.addr_validate(input)?` 3. Use `let checked: Addr = deps.api.addr_humanize(canonical_addr)?` 4. Deserialize from JSON. This must only be done from JSON that was validated before such as a contract's state. `Addr` must not be used in messages sent by the user because this would result in unvalidated instances.  This type is immutable. If you really need to mutate it (Really? Are you sure?), create a mutable copy using `let mut mutable = Addr::to_string()` and operate on that `String` instance.
 * @member {String} owner
 */
ExecuteMessagePostRequestOneOf1DeactivateMinter.prototype['owner'] = undefined;






export default ExecuteMessagePostRequestOneOf1DeactivateMinter;

