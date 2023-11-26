# KeychApi.InstantiateConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enableBurn** | **Boolean** | Indicates whether burn functionality should be enabled default: False | [optional] 
**enableSealedMetadata** | **Boolean** | indicates whether sealed metadata should be enabled.  If sealed metadata is enabled, the private metadata is not viewable by anyone, not even the owner, until the owner calls the Reveal function.  When Reveal is called, the sealed metadata is irreversibly moved to the public metadata (as default).  if unwrapped_metadata_is_private is set to true, it will remain as private metadata, but the owner will now be able to see it.  Anyone will be able to query the token to know that it has been unwrapped.  This simulates buying/selling a wrapped card that no one knows which card it is until it is unwrapped. If sealed metadata is not enabled, all tokens are considered unwrapped default:  False | [optional] 
**minterMayUpdateMetadata** | **Boolean** | indicates whether a minter is permitted to update a token&#39;s metadata default: True | [optional] 
**ownerMayUpdateMetadata** | **Boolean** | indicates whether the owner of a token is permitted to update a token&#39;s metadata default: False | [optional] 
**publicOwner** | **Boolean** | indicates whether token ownership is public or private.  A user can still change whether the ownership of their tokens is public or private default: False | [optional] 
**publicTokenSupply** | **Boolean** | indicates whether the token IDs and the number of tokens controlled by the contract are public.  If the token supply is private, only minters can view the token IDs and number of tokens controlled by the contract default: False | [optional] 
**unwrappedMetadataIsPrivate** | **Boolean** | indicates if the Reveal function should keep the sealed metadata private after unwrapping This config value is ignored if sealed metadata is not enabled default: False | [optional] 


