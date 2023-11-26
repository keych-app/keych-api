# KeychApi.Coin

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.  # Examples  Use &#x60;from&#x60; to create instances of this and &#x60;u128&#x60; to get the value out:  &#x60;&#x60;&#x60; # use cosmwasm_std::Uint128; let a &#x3D; Uint128::from(123u128); assert_eq!(a.u128(), 123);  let b &#x3D; Uint128::from(42u64); assert_eq!(b.u128(), 42);  let c &#x3D; Uint128::from(70u32); assert_eq!(c.u128(), 70); &#x60;&#x60;&#x60; | 
**denom** | **String** |  | 


