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


import ApiClient from "../ApiClient";
import ExecuteMessagePostRequest from '../model/ExecuteMessagePostRequest';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the executeMessagePost operation.
     * @callback module:api/DefaultApi~executeMessagePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute a message
     * Accepts different types of messages based on the provided schema
     * @param {module:model/ExecuteMessagePostRequest} executeMessagePostRequest 
     * @param {module:api/DefaultApi~executeMessagePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    executeMessagePost(executeMessagePostRequest, callback) {
      let postBody = executeMessagePostRequest;
      // verify the required parameter 'executeMessagePostRequest' is set
      if (executeMessagePostRequest === undefined || executeMessagePostRequest === null) {
        throw new Error("Missing the required parameter 'executeMessagePostRequest' when calling executeMessagePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/execute-message', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
