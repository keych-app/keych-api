# KeychApi.Send

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **String** | recipient of the sent tokens | 
**memo** | **String** | optional memo for the tx | [optional] 
**msg** | **String** | Binary is a wrapper around Vec&lt;u8&gt; to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.  This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec&lt;u8&gt;. See also &lt;https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md&gt;. | [optional] 
**receiverInfo** | [**ReceiverInfo**](ReceiverInfo.md) |  | [optional] 
**tokenIds** | **[String]** | tokens being sent | 


