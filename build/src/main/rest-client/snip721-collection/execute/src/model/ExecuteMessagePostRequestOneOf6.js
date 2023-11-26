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
import ExecuteMessagePostRequestOneOf6MakeOwnershipPrivate from './ExecuteMessagePostRequestOneOf6MakeOwnershipPrivate';

/**
 * The ExecuteMessagePostRequestOneOf6 model module.
 * @module model/ExecuteMessagePostRequestOneOf6
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf6 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf6</code>.
     * if a contract was instantiated to make ownership public by default, this will allow an address to make the ownership of their tokens private.  The address can still use SetGlobalApproval to make ownership public either inventory-wide or for a specific token
     * @alias module:model/ExecuteMessagePostRequestOneOf6
     * @param makeOwnershipPrivate {module:model/ExecuteMessagePostRequestOneOf6MakeOwnershipPrivate} 
     */
    constructor(makeOwnershipPrivate) { 
        
        ExecuteMessagePostRequestOneOf6.initialize(this, makeOwnershipPrivate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, makeOwnershipPrivate) { 
        obj['make_ownership_private'] = makeOwnershipPrivate;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf6} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf6} The populated <code>ExecuteMessagePostRequestOneOf6</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf6();

            if (data.hasOwnProperty('make_ownership_private')) {
                obj['make_ownership_private'] = ExecuteMessagePostRequestOneOf6MakeOwnershipPrivate.constructFromObject(data['make_ownership_private']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf6</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf6</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf6.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `make_ownership_private`
        if (data['make_ownership_private']) { // data not null
          ExecuteMessagePostRequestOneOf6MakeOwnershipPrivate.validateJSON(data['make_ownership_private']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf6.RequiredProperties = ["make_ownership_private"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf6MakeOwnershipPrivate} make_ownership_private
 */
ExecuteMessagePostRequestOneOf6.prototype['make_ownership_private'] = undefined;






export default ExecuteMessagePostRequestOneOf6;

