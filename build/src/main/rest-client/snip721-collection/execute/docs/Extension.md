# KeychApi.Extension

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**animationUrl** | **String** | url to a multimedia attachment | [optional] 
**attributes** | [**[Trait]**](Trait.md) | item attributes | [optional] 
**backgroundColor** | **String** | background color represented as a six-character hexadecimal without a pre-pended # | [optional] 
**description** | **String** | item description | [optional] 
**externalUrl** | **String** | url to allow users to view the item on your site | [optional] 
**image** | **String** | url to the image | [optional] 
**imageData** | **String** | raw SVG image data (not recommended). Only use this if you&#39;re not including the image parameter | [optional] 
**media** | [**[MediaFile]**](MediaFile.md) | media files as specified on Stashh that allows for basic authenticatiion and decryption keys. Most of the above is used for bridging public eth NFT metadata easily, whereas &#x60;media&#x60; will be used when minting NFTs on Stashh | [optional] 
**name** | **String** | name of the item | [optional] 
**protectedAttributes** | **[String]** | a select list of trait_types that are in the private metadata.  This will only ever be used in public metadata | [optional] 
**tokenSubtype** | **String** | token subtypes used by Stashh for display groupings (primarily used for badges, which are specified by using \&quot;badge\&quot; as the token_subtype) | [optional] 
**youtubeUrl** | **String** | url to a YouTube video | [optional] 


