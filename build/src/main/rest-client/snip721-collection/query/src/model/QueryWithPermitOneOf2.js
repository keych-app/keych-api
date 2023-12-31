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
import QueryWithPermitOneOf2NftDossier from './QueryWithPermitOneOf2NftDossier';

/**
 * The QueryWithPermitOneOf2 model module.
 * @module model/QueryWithPermitOneOf2
 * @version 1.0.0
 */
class QueryWithPermitOneOf2 {
    /**
     * Constructs a new <code>QueryWithPermitOneOf2</code>.
     * displays all the information about a token that the viewer has permission to see.  This may include the owner, the public metadata, the private metadata, royalty information, mint run information, whether the token is unwrapped, whether the token is transferable, and the token and inventory approvals
     * @alias module:model/QueryWithPermitOneOf2
     * @param nftDossier {module:model/QueryWithPermitOneOf2NftDossier} 
     */
    constructor(nftDossier) { 
        
        QueryWithPermitOneOf2.initialize(this, nftDossier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, nftDossier) { 
        obj['nft_dossier'] = nftDossier;
    }

    /**
     * Constructs a <code>QueryWithPermitOneOf2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryWithPermitOneOf2} obj Optional instance to populate.
     * @return {module:model/QueryWithPermitOneOf2} The populated <code>QueryWithPermitOneOf2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryWithPermitOneOf2();

            if (data.hasOwnProperty('nft_dossier')) {
                obj['nft_dossier'] = QueryWithPermitOneOf2NftDossier.constructFromObject(data['nft_dossier']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueryWithPermitOneOf2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryWithPermitOneOf2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of QueryWithPermitOneOf2.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `nft_dossier`
        if (data['nft_dossier']) { // data not null
          QueryWithPermitOneOf2NftDossier.validateJSON(data['nft_dossier']);
        }

        return true;
    }


}

QueryWithPermitOneOf2.RequiredProperties = ["nft_dossier"];

/**
 * @member {module:model/QueryWithPermitOneOf2NftDossier} nft_dossier
 */
QueryWithPermitOneOf2.prototype['nft_dossier'] = undefined;






export default QueryWithPermitOneOf2;

