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
    instance = new KeychApi.InstantiateConfig();
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

  describe('InstantiateConfig', function() {
    it('should create an instance of InstantiateConfig', function() {
      // uncomment below and update the code to test InstantiateConfig
      //var instance = new KeychApi.InstantiateConfig();
      //expect(instance).to.be.a(KeychApi.InstantiateConfig);
    });

    it('should have the property enableBurn (base name: "enable_burn")', function() {
      // uncomment below and update the code to test the property enableBurn
      //var instance = new KeychApi.InstantiateConfig();
      //expect(instance).to.be();
    });

    it('should have the property enableSealedMetadata (base name: "enable_sealed_metadata")', function() {
      // uncomment below and update the code to test the property enableSealedMetadata
      //var instance = new KeychApi.InstantiateConfig();
      //expect(instance).to.be();
    });

    it('should have the property minterMayUpdateMetadata (base name: "minter_may_update_metadata")', function() {
      // uncomment below and update the code to test the property minterMayUpdateMetadata
      //var instance = new KeychApi.InstantiateConfig();
      //expect(instance).to.be();
    });

    it('should have the property ownerMayUpdateMetadata (base name: "owner_may_update_metadata")', function() {
      // uncomment below and update the code to test the property ownerMayUpdateMetadata
      //var instance = new KeychApi.InstantiateConfig();
      //expect(instance).to.be();
    });

    it('should have the property publicOwner (base name: "public_owner")', function() {
      // uncomment below and update the code to test the property publicOwner
      //var instance = new KeychApi.InstantiateConfig();
      //expect(instance).to.be();
    });

    it('should have the property publicTokenSupply (base name: "public_token_supply")', function() {
      // uncomment below and update the code to test the property publicTokenSupply
      //var instance = new KeychApi.InstantiateConfig();
      //expect(instance).to.be();
    });

    it('should have the property unwrappedMetadataIsPrivate (base name: "unwrapped_metadata_is_private")', function() {
      // uncomment below and update the code to test the property unwrappedMetadataIsPrivate
      //var instance = new KeychApi.InstantiateConfig();
      //expect(instance).to.be();
    });

  });

}));
