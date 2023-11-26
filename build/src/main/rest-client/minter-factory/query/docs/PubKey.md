# KeychApi.PubKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | ignored, but must be \&quot;tendermint/PubKeySecp256k1\&quot; otherwise the verification will fail | 
**value** | **String** | Binary is a wrapper around Vec&lt;u8&gt; to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.  This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec&lt;u8&gt; | 


