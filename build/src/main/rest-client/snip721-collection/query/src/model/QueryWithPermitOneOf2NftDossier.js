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
 * The QueryWithPermitOneOf2NftDossier model module.
 * @module model/QueryWithPermitOneOf2NftDossier
 * @version 1.0.0
 */
class QueryWithPermitOneOf2NftDossier {
    /**
     * Constructs a new <code>QueryWithPermitOneOf2NftDossier</code>.
     * @alias module:model/QueryWithPermitOneOf2NftDossier
     * @param tokenId {String} 
     */
    constructor(tokenId) { 
        
        QueryWithPermitOneOf2NftDossier.initialize(this, tokenId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokenId) { 
        obj['token_id'] = tokenId;
    }

    /**
     * Constructs a <code>QueryWithPermitOneOf2NftDossier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryWithPermitOneOf2NftDossier} obj Optional instance to populate.
     * @return {module:model/QueryWithPermitOneOf2NftDossier} The populated <code>QueryWithPermitOneOf2NftDossier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryWithPermitOneOf2NftDossier();

            if (data.hasOwnProperty('include_expired')) {
                obj['include_expired'] = ApiClient.convertToType(data['include_expired'], 'Boolean');
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueryWithPermitOneOf2NftDossier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryWithPermitOneOf2NftDossier</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of QueryWithPermitOneOf2NftDossier.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }

        return true;
    }


}

QueryWithPermitOneOf2NftDossier.RequiredProperties = ["token_id"];

/**
 * optionally include expired Approvals in the response list.  If ommitted or false, expired Approvals will be filtered out of the response
 * @member {Boolean} include_expired
 */
QueryWithPermitOneOf2NftDossier.prototype['include_expired'] = undefined;

/**
 * @member {String} token_id
 */
QueryWithPermitOneOf2NftDossier.prototype['token_id'] = undefined;






export default QueryWithPermitOneOf2NftDossier;
