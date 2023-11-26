# KeychApi.ExecuteMessagePostRequestOneOf1DeactivateMinter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **String** | A human readable address.  In Cosmos, this is typically bech32 encoded. But for multi-chain smart contracts no assumptions should be made other than being UTF-8 encoded and of reasonable length.  This type represents a validated address. It can be created in the following ways 1. Use &#x60;Addr::unchecked(input)&#x60; 2. Use &#x60;let checked: Addr &#x3D; deps.api.addr_validate(input)?&#x60; 3. Use &#x60;let checked: Addr &#x3D; deps.api.addr_humanize(canonical_addr)?&#x60; 4. Deserialize from JSON. This must only be done from JSON that was validated before such as a contract&#39;s state. &#x60;Addr&#x60; must not be used in messages sent by the user because this would result in unvalidated instances.  This type is immutable. If you really need to mutate it (Really? Are you sure?), create a mutable copy using &#x60;let mut mutable &#x3D; Addr::to_string()&#x60; and operate on that &#x60;String&#x60; instance. | 


