# JSON API

The Meteostat JSON API provides simple access to a large archive of historical weather and climate data. The records are queried by weather station or geo location and can be filtered by specifying a date range and other optional parameters. The API is available via this URL:

```
https://api.meteostat.net
```

Access to the API requires users to send their API key along with every request. All API endpoints return a JSON object that contains two properties: `meta` and `data`. The `meta` object provides general information about the data output and debugging information. For instance, the `source` string which holds the names of the organizations which provided the raw data. The `data` property is either an object or an array that contains the actual data output.

All API endpoints are accessible using HTTP Get requests. For debugging, please utilize the HTTP status code of the response.

## API Key

Please submit this [form](https://auth.meteostat.net/) to apply for an API key.

## Quick Start

Once you have your API key, head over to your terminal, replace the `{key}` parameter with your personal API key and execute the following command:

```sh
curl --header "x-api-key: {key}" "https://api.meteostat.net/v2/stations/meta?id=10637"
```

You should see meta information for the weather station _Frankfurt Airport_ in JSON format.

## Quota

Free access to the Meteostat API is limited to 2,000 requests per day and no more than two requests per second. Once this limit is reached, all of your requests will result in HTTP 429, too many requests, until your quota is cleared.

## Authentication

When retrieving data from Meteostat API endpoints make sure to send the `x-api-key` header along with every request. You cannot use the key URL parameter to authenticate API calls as in version 1.
