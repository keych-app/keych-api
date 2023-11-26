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
    instance = new KeychApi.Trait();
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

  describe('Trait', function() {
    it('should create an instance of Trait', function() {
      // uncomment below and update the code to test Trait
      //var instance = new KeychApi.Trait();
      //expect(instance).to.be.a(KeychApi.Trait);
    });

    it('should have the property displayType (base name: "display_type")', function() {
      // uncomment below and update the code to test the property displayType
      //var instance = new KeychApi.Trait();
      //expect(instance).to.be();
    });

    it('should have the property maxValue (base name: "max_value")', function() {
      // uncomment below and update the code to test the property maxValue
      //var instance = new KeychApi.Trait();
      //expect(instance).to.be();
    });

    it('should have the property traitType (base name: "trait_type")', function() {
      // uncomment below and update the code to test the property traitType
      //var instance = new KeychApi.Trait();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new KeychApi.Trait();
      //expect(instance).to.be();
    });

  });

}));
