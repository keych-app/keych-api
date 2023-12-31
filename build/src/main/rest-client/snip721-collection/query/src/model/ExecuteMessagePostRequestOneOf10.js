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
import ExecuteMessagePostRequestOneOf10BatchNftDossier from './ExecuteMessagePostRequestOneOf10BatchNftDossier';

/**
 * The ExecuteMessagePostRequestOneOf10 model module.
 * @module model/ExecuteMessagePostRequestOneOf10
 * @version 1.0.0
 */
class ExecuteMessagePostRequestOneOf10 {
    /**
     * Constructs a new <code>ExecuteMessagePostRequestOneOf10</code>.
     * displays all the information about multiple tokens that the viewer has permission to see.  This may include the owner, the public metadata, the private metadata, royalty information, mint run information, whether the token is unwrapped, whether the token is transferable, and the token and inventory approvals
     * @alias module:model/ExecuteMessagePostRequestOneOf10
     * @param batchNftDossier {module:model/ExecuteMessagePostRequestOneOf10BatchNftDossier} 
     */
    constructor(batchNftDossier) { 
        
        ExecuteMessagePostRequestOneOf10.initialize(this, batchNftDossier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, batchNftDossier) { 
        obj['batch_nft_dossier'] = batchNftDossier;
    }

    /**
     * Constructs a <code>ExecuteMessagePostRequestOneOf10</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteMessagePostRequestOneOf10} obj Optional instance to populate.
     * @return {module:model/ExecuteMessagePostRequestOneOf10} The populated <code>ExecuteMessagePostRequestOneOf10</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteMessagePostRequestOneOf10();

            if (data.hasOwnProperty('batch_nft_dossier')) {
                obj['batch_nft_dossier'] = ExecuteMessagePostRequestOneOf10BatchNftDossier.constructFromObject(data['batch_nft_dossier']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExecuteMessagePostRequestOneOf10</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExecuteMessagePostRequestOneOf10</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExecuteMessagePostRequestOneOf10.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `batch_nft_dossier`
        if (data['batch_nft_dossier']) { // data not null
          ExecuteMessagePostRequestOneOf10BatchNftDossier.validateJSON(data['batch_nft_dossier']);
        }

        return true;
    }


}

ExecuteMessagePostRequestOneOf10.RequiredProperties = ["batch_nft_dossier"];

/**
 * @member {module:model/ExecuteMessagePostRequestOneOf10BatchNftDossier} batch_nft_dossier
 */
ExecuteMessagePostRequestOneOf10.prototype['batch_nft_dossier'] = undefined;






export default ExecuteMessagePostRequestOneOf10;

