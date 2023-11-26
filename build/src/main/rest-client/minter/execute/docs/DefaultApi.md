# KeychApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executeMessagePost**](DefaultApi.md#executeMessagePost) | **POST** /execute-message | Execute a message



## executeMessagePost

> executeMessagePost(executeMessagePostRequest)

Execute a message

Accepts different types of messages based on the provided schema

### Example

```javascript
import KeychApi from 'keych_api';

let apiInstance = new KeychApi.DefaultApi();
let executeMessagePostRequest = new KeychApi.ExecuteMessagePostRequest(); // ExecuteMessagePostRequest | 
apiInstance.executeMessagePost(executeMessagePostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **executeMessagePostRequest** | [**ExecuteMessagePostRequest**](ExecuteMessagePostRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

