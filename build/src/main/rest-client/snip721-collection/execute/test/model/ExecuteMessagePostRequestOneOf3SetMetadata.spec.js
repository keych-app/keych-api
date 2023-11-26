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
    instance = new KeychApi.ExecuteMessagePostRequestOneOf3SetMetadata();
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

  describe('ExecuteMessagePostRequestOneOf3SetMetadata', function() {
    it('should create an instance of ExecuteMessagePostRequestOneOf3SetMetadata', function() {
      // uncomment below and update the code to test ExecuteMessagePostRequestOneOf3SetMetadata
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOf3SetMetadata();
      //expect(instance).to.be.a(KeychApi.ExecuteMessagePostRequestOneOf3SetMetadata);
    });

    it('should have the property padding (base name: "padding")', function() {
      // uncomment below and update the code to test the property padding
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOf3SetMetadata();
      //expect(instance).to.be();
    });

    it('should have the property privateMetadata (base name: "private_metadata")', function() {
      // uncomment below and update the code to test the property privateMetadata
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOf3SetMetadata();
      //expect(instance).to.be();
    });

    it('should have the property publicMetadata (base name: "public_metadata")', function() {
      // uncomment below and update the code to test the property publicMetadata
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOf3SetMetadata();
      //expect(instance).to.be();
    });

    it('should have the property tokenId (base name: "token_id")', function() {
      // uncomment below and update the code to test the property tokenId
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOf3SetMetadata();
      //expect(instance).to.be();
    });

  });

}));
