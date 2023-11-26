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
import ProductInfo from './ProductInfo';

/**
 * The ExecuteMessagePostRequestOneOfCreateMinter model module.
 * @module model/ExecuteMessagePostRequestOneOfCreateMinter
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOfCreateMinter {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOfCreateMinter</code>.
     * @alias module:model/ExecuteMessagePostRequestOneOfCreateMinter
     * @param entropy {String} String used as entropy by the minter
     * @param productTemplate {module:model/ProductInfo} 
     */
    constructor(entropy, productTemplate) { 
        
        ExecuteMessagePostRequestOneOfCreateMinter.initialize(this, entropy, productTemplate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entropy, productTemplate) { 
        obj['entropy'] = entropy;
        obj['product_template'] = productTemplate;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOfCreateMinter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOfCreateMinter} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOfCreateMinter} The populated <code>ExecuteMessagePostRequestOneOfCreateMinter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOfCreateMinter();

            if (data.hasOwnProperty('entropy')) {
                obj['entropy'] = ApiClient.convertToType(data['entropy'], 'String');
            }
            if (data.hasOwnProperty('product_template')) {
                obj['product_template'] = ApiClient.convertToType(data['product_template'], ProductInfo);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOfCreateMinter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOfCreateMinter</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOfCreateMinter.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['entropy'] && !(typeof data['entropy'] === 'string' || data['entropy'] instanceof String)) {
            throw new Error("Expected the field `entropy` to be a primitive type in the JSON string but got " + data['entropy']);
        }
        // validate the optional field `product_template`
        if (data['product_template']) { // data not null
          ProductInfo.validateJSON(data['product_template']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOfCreateMinter.RequiredProperties = ["entropy", "product_template"];

/**
 * String used as entropy by the minter
 * @member {String} entropy
 */
ExecuteMessagePostRequestOneOfCreateMinter.prototype['entropy'] = undefined;

/**
 * @member {module:model/ProductInfo} product_template
 */
ExecuteMessagePostRequestOneOfCreateMinter.prototype['product_template'] = undefined;






export default ExecuteMessagePostRequestOneOfCreateMinter;

