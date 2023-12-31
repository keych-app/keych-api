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
    instance = new KeychApi.ExecuteMessagePostRequestOneOfListMyCollections();
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

  describe('ExecuteMessagePostRequestOneOfListMyCollections', function() {
    it('should create an instance of ExecuteMessagePostRequestOneOfListMyCollections', function() {
      // uncomment below and update the code to test ExecuteMessagePostRequestOneOfListMyCollections
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOfListMyCollections();
      //expect(instance).to.be.a(KeychApi.ExecuteMessagePostRequestOneOfListMyCollections);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOfListMyCollections();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function() {
      // uncomment below and update the code to test the property filter
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOfListMyCollections();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "page_size")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOfListMyCollections();
      //expect(instance).to.be();
    });

    it('should have the property permit (base name: "permit")', function() {
      // uncomment below and update the code to test the property permit
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOfListMyCollections();
      //expect(instance).to.be();
    });

    it('should have the property startPage (base name: "start_page")', function() {
      // uncomment below and update the code to test the property startPage
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOfListMyCollections();
      //expect(instance).to.be();
    });

    it('should have the property viewingKey (base name: "viewing_key")', function() {
      // uncomment below and update the code to test the property viewingKey
      //var instance = new KeychApi.ExecuteMessagePostRequestOneOfListMyCollections();
      //expect(instance).to.be();
    });

  });

}));
