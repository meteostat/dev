---
title: Nearby ‹ Weather Stations ‹ JSON API
---

# Nearby Weather Stations

The nearby endpoint enables users to find weather stations by geo location. When calling this endpoint make sure to provide valid geographic coordinates (decimal degrees) using the lat (latitude) and lon (longitude) parameters. The limit parameter allows us to specify the maximum number of weather stations returned by this endpoint.

By default, the endpoint only returns weather stations which are closer than 100 kilometers to the specified geo location. If you want to limit your query to a certain radius in kilometers, just set the radius parameter to any integer value.

## Endpoint

The endpoint is available through this URL:

```
GET https://api.meteostat.net/v2/stations/nearby
```

## Parameters

When calling this endpoint please refer to the following parameters.

| **Parameter** | **Description**                       | **Data Type** | **Required** | **Default** |
|---------------|---------------------------------------|---------------|--------------|-------------|
| lat           | The latitude of the location          | Float         | Yes          | `undefined` |
| lon           | The longitude of the location         | Float         | Yes          | `undefined` |
| limit         | The maximum number of results         | Integer       | No           | 8           |
| radius        | The radius of the query in kilometers | Integer       | No           | 100         |

## Response

The response body includes the following properties.

| **Parameter** | **Description**                                                                                | **Data Type** |
|---------------|------------------------------------------------------------------------------------------------|---------------|
| id            | The Meteostat ID of the weather station                                                        | String        |
| name          | Object containing the name of the weather stations in different languages                      | Object        |
| active        | A boolean value which is true if the weather station reported data within the previous 90 days | Boolean       |
| distance      | The distance to the geo location defined in the request                                        | Float         |

## Example

The following example returns the five closest weather stations to Singapore. It requires the cURL command-line interface. Alternatively, you can use an API client like Postman.

```
curl --header "x-api-key: {key}" "https://api.meteostat.net/v2/stations/nearby?lat=1.28&lon=103.83&limit=3"
```

Please replace `{key}` with your personal API key.

### Data Response

The response should look like that:

```json
{
    "meta": {
        "exec_time": 0.022,
        "generated": "2020-06-12 12:24:59"
    },
    "data": [
        {
            "id": "48694",
            "name": {
                "en": "Singapore / Paya Lebar"
            },
            "active": true,
            "distance": 15.3
        },
        {
            "id": "48692",
            "name": {
                "en": "Singapore / Seletar"
            },
            "active": true,
            "distance": 18.4
        },
        {
            "id": "48698",
            "name": {
                "en": "Singapore / Changi Airport"
            },
            "active": true,
            "distance": 20.8
        }
    ]
}
```
