# KeychApi.PostInstantiateCallback

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codeHash** | **String** | code hash of the contract to execute | 
**contractAddress** | **String** | address of the contract to execute | 
**msg** | **String** | Binary is a wrapper around Vec&lt;u8&gt; to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.  This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec&lt;u8&gt;. See also &lt;https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md&gt;. | 
**send** | [**[Coin]**](Coin.md) | list of native Coin to send with the callback message | 


