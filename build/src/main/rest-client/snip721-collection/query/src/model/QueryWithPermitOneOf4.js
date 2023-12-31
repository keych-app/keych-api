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
 * The QueryWithPermitOneOf4 model module.
 * @module model/QueryWithPermitOneOf4
 * @version 1.0.0
 */
class QueryWithPermitOneOf4 {
    /**
     * Constructs a new <code>QueryWithPermitOneOf4</code>.
     * display the owner of the specified token if authorized to view it.  If the requester is also the token&#39;s owner, the response will also include a list of any addresses that can transfer this token.  The transfer approval list is for CW721 compliance, but the NftDossier query will be more complete by showing viewing approvals as well
     * @alias module:model/QueryWithPermitOneOf4
     * @param ownerOf {module:model/QueryWithPermitOneOf2NftDossier} 
     */
    constructor(ownerOf) { 
        
        QueryWithPermitOneOf4.initialize(this, ownerOf);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ownerOf) { 
        obj['owner_of'] = ownerOf;
    }

    /**
     * Constructs a <code>QueryWithPermitOneOf4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryWithPermitOneOf4} obj Optional instance to populate.
     * @return {module:model/QueryWithPermitOneOf4} The populated <code>QueryWithPermitOneOf4</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryWithPermitOneOf4();

            if (data.hasOwnProperty('owner_of')) {
                obj['owner_of'] = QueryWithPermitOneOf2NftDossier.constructFromObject(data['owner_of']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueryWithPermitOneOf4</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryWithPermitOneOf4</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of QueryWithPermitOneOf4.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `owner_of`
        if (data['owner_of']) { // data not null
          QueryWithPermitOneOf2NftDossier.validateJSON(data['owner_of']);
        }

        return true;
    }


}

QueryWithPermitOneOf4.RequiredProperties = ["owner_of"];

/**
 * @member {module:model/QueryWithPermitOneOf2NftDossier} owner_of
 */
QueryWithPermitOneOf4.prototype['owner_of'] = undefined;






export default QueryWithPermitOneOf4;

