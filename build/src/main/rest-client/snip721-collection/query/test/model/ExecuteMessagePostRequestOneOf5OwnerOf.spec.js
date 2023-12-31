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
    instance = new KeychApi.ExecuteMessagePostRequestOneOf5OwnerOf();
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

  describe('ExecuteMessagePostRequestOneOf5OwnerOf', function() {
    it('should create an instance of ExecuteMessagePostRequestOneOf5OwnerOf', function() {
      // uncomment below and update the code to test ExecuteMessagePostRequestOneOf5OwnerOf
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOf5OwnerOf();
      //expect(instance).to.be.a(KeychApi.ExecuteMessagePostRequestOneOf5OwnerOf);
    });

    it('should have the property includeExpired (base name: "include_expired")', function() {
      // uncomment below and update the code to test the property includeExpired
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOf5OwnerOf();
      //expect(instance).to.be();
    });

    it('should have the property tokenId (base name: "token_id")', function() {
      // uncomment below and update the code to test the property tokenId
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOf5OwnerOf();
      //expect(instance).to.be();
    });

    it('should have the property viewer (base name: "viewer")', function() {
      // uncomment below and update the code to test the property viewer
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOf5OwnerOf();
      //expect(instance).to.be();
    });

  });

}));
