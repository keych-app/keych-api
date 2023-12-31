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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KeychApi);
  }
}(this, function(expect, KeychApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KeychApi.ExecuteMessagePostRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ExecuteMessagePostRequest', function() {
    it('should create an instance of ExecuteMessagePostRequest', function() {
      // uncomment below and update the code to test ExecuteMessagePostRequest
      //var instance = new KeychApi.ExecuteMessagePostRequest();
      //expect(instance).to.be.a(KeychApi.ExecuteMessagePostRequest);
    });

    it('should have the property listMyCollections (base name: "list_my_collections")', function() {
      // uncomment below and update the code to test the property listMyCollections
      //var instance = new KeychApi.ExecuteMessagePostRequest();
      //expect(instance).to.be();
    });

    it('should have the property listActiveCollections (base name: "list_active_collections")', function() {
      // uncomment below and update the code to test the property listActiveCollections
      //var instance = new KeychApi.ExecuteMessagePostRequest();
      //expect(instance).to.be();
    });

    it('should have the property listInactiveCollections (base name: "list_inactive_collections")', function() {
      // uncomment below and update the code to test the property listInactiveCollections
      //var instance = new KeychApi.ExecuteMessagePostRequest();
      //expect(instance).to.be();
    });

    it('should have the property isKeyValid (base name: "is_key_valid")', function() {
      // uncomment below and update the code to test the property isKeyValid
      //var instance = new KeychApi.ExecuteMessagePostRequest();
      //expect(instance).to.be();
    });

    it('should have the property isPermitValid (base name: "is_permit_valid")', function() {
      // uncomment below and update the code to test the property isPermitValid
      //var instance = new KeychApi.ExecuteMessagePostRequest();
      //expect(instance).to.be();
    });

  });

}));
