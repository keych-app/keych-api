# KeychApi.ExecuteMessagePostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | name of token contract | 
**symbol** | **String** | token contract symbol | 
**admin** | **String** | optional admin address, env.message.sender if missing | [optional] 
**minterPub** | **String** | minter elliptic public key. Used for key exchange minter&lt;--&gt;collection | 
**entropy** | **String** | entropy used for prng seed | 
**royaltyInfo** | [**RoyaltyInfo**](RoyaltyInfo.md) |  | [optional] 
**config** | [**InstantiateConfig**](InstantiateConfig.md) |  | [optional] 
**postInitCallback** | [**PostInstantiateCallback**](PostInstantiateCallback.md) |  | [optional] 


