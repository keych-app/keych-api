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
import ExecuteMessagePostRequestOneOfListMyMinter from './ExecuteMessagePostRequestOneOfListMyMinter';

/**
 * The ExecuteMessagePostRequestOneOf model module.
 * @module model/ExecuteMessagePostRequestOneOf
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf</code>.
     * lists all minter whose owner is the given address.
     * @alias module:model/ExecuteMessagePostRequestOneOf
     * @param listMyMinter {module:model/ExecuteMessagePostRequestOneOfListMyMinter} 
     */
    constructor(listMyMinter) { 
        
        ExecuteMessagePostRequestOneOf.initialize(this, listMyMinter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, listMyMinter) { 
        obj['list_my_minter'] = listMyMinter;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf} The populated <code>ExecuteMessagePostRequestOneOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf();

            if (data.hasOwnProperty('list_my_minter')) {
                obj['list_my_minter'] = ExecuteMessagePostRequestOneOfListMyMinter.constructFromObject(data['list_my_minter']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `list_my_minter`
        if (data['list_my_minter']) { // data not null
          ExecuteMessagePostRequestOneOfListMyMinter.validateJSON(data['list_my_minter']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf.RequiredProperties = ["list_my_minter"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOfListMyMinter} list_my_minter
 */
ExecuteMessagePostRequestOneOf.prototype['list_my_minter'] = undefined;






export default ExecuteMessagePostRequestOneOf;
