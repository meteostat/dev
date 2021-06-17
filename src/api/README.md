# JSON API

The Meteostat JSON API provides simple access to a large archive of historical weather and climate data. The records are queried by weather station or geo location and can be filtered by specifying a date range and other optional parameters.

::: tip Donation
Help Meteostat provide free weather and climate data by making a [donation](/contributing.html#donations).
:::

The API is available via this URL:

```
https://api.meteostat.net
```

Access to the API requires users to send their API key along with every request. All API endpoints return a JSON object that contains two properties: `meta` and `data`. The `meta` object provides general information about the data output and debugging information. For instance, the `source` string which holds the names of the organizations which provided the raw data. The `data` property is either an object or an array that contains the actual data output.

All API endpoints are accessible using HTTP Get requests. For debugging, please utilize the HTTP status code of the response.

## API Key

Please submit this [**form**](https://auth.meteostat.net/) to apply for an API key.

## Quick Start

Once you have your API key, head over to your terminal, replace the `{key}` parameter with your personal API key and execute the following command:

```sh
curl --header "x-api-key: {key}" "https://api.meteostat.net/v2/stations/meta?id=10637"
```

You should see meta information for the weather station _Frankfurt Airport_ in JSON format.

## Quota

Free access to the Meteostat API is limited to 2,000 requests per day and no more than two requests per second. Once this limit is reached, all of your requests will result in HTTP 429, too many requests, until your quota is cleared.

## Authentication

When retrieving data from Meteostat API endpoints make sure to send the `x-api-key` header along with every request. You cannot use the `key` URL parameter to authenticate API calls as in version 1.

## Status Codes

All Meteostat API endpoints return one of the following status codes. You can utilize them for debugging.

| **Code** | **Description**                                              |
|:---------|:-------------------------------------------------------------|
| 200      | _Success_: Alls is fine                                      |
| 400      | _Bad Request_: Please check the request parameters           |
| 401      | _Unauthorized_: Make sure to send a valid `x-api-key` header |
| 403      | _Forbidden_: You're not allowed to access this endpoint      |
| 404      | _Not Found_: This endpoint doesn't exist                     |
| 429      | _Too Many Requests_: You've exceeded the quota               |
| 503      | _Service Temporarily Unavailable_: The API is currently down |
