---
title: Search ‹ Weather Stations ‹ JSON API
---

# Finding Weather Stations

Many API endpoints require a weather station indentifier. Most weather stations are identified by their WMO ID. However, some weather stations may not be listed in the WMO index. Therefore, these weather stations are given five-digit IDs containing both numbers and letters.

## Endpoint

```
GET https://api.meteostat.net/v2/stations/search
```

## Parameters

| **Parameter** | **Description**               | **Data Type** | **Required** | **Default** |
|---------------|-------------------------------|---------------|--------------|-------------|
| query         | The search string             | String        | Yes          | undefined   |
| limit         | The maximum number of results | Integer       | No           | 8           |

Alternatively, you can download a full list of all weather stations available via Meteostat in JSON format.

## Response

The response body includes the following properties.

| **Parameter** | **Description**                                                                                | **Data Type** |
|---------------|------------------------------------------------------------------------------------------------|---------------|
| id            | The Meteostat ID of the weather station                                                        | String        |
| name          | Object containing the name of the weather stations in different languages                      | Object        |
| country       | ISO 3166-1 alpha-2 country code of the weather station                                         | String        |
| region        | The state or region of the weather station                                                     | String        |
| national      | The national ID of the weather station                                                         | String        |
| wmo           | The WMO ID of the weather station                                                              | Integer       |
| icao          | The ICAO ID of the weather station                                                             | String        |
| iata          | The IATA ID of the weather station                                                             | String        |
| latitude      | The latitude of the weather station                                                            | Float         |
| longitude     | The longitude of the weather station                                                           | Float         |
| elevation     | The elevation of the weather station in meters above sea level                                 | Integer       |
| timezone      | The time zone of the weather station                                                           | String        |
| active        | A boolean value which is true if the weather station reported data within the previous 90 days | Boolean       |

## Example: Search results for “vancouver”

The following example shows search results for the term “vancouver”. It requires the cURL command-line interface. Alternatively, you can use an API client like Postman.

```
curl --header "x-api-key: {key}" "https://api.meteostat.net/v2/stations/search?query=vancouver"
```

Please replace `{key}` with your personal API key.

### Data Response

The request returns four results:

* Vancouver Airport
* West Vancouver
* Vancouver / Officers Row
* Vancouver

This is the JSON output:

```json
{
    "meta": {
        "exec_time": 0.022,
        "generated": "2020-06-14 10:06:26"
    },
    "data": [
        {
            "id": "71892",
            "name": {
                "en": "Vancouver Airport"
            },
            "country": "CA",
            "region": "BC",
            "national": null,
            "wmo": "71892",
            "icao": "CYVR",
            "iata": null,
            "latitude": 49.1833,
            "longitude": -123.1667,
            "elevation": 3,
            "timezone": "America/Vancouver",
            "active": true
        },
        {
            "id": "71784",
            "name": {
                "en": "West Vancouver"
            },
            "country": "CA",
            "region": "BC",
            "national": null,
            "wmo": "71784",
            "icao": "CWWA",
            "iata": null,
            "latitude": 49.35,
            "longitude": -123.1833,
            "elevation": 178,
            "timezone": "America/Vancouver",
            "active": true
        },
        {
            "id": "KVUO0",
            "name": {
                "en": "Vancouver / Officers Row"
            },
            "country": "US",
            "region": "WA",
            "national": null,
            "wmo": null,
            "icao": "KVUO",
            "iata": null,
            "latitude": 45.6205,
            "longitude": -122.6565,
            "elevation": 9,
            "timezone": "America/Los_Angeles",
            "active": true
        },
        {
            "id": "71201",
            "name": {
                "en": "Vancouver"
            },
            "country": "CA",
            "region": "BC",
            "national": null,
            "wmo": "71201",
            "icao": "CWHC",
            "iata": null,
            "latitude": 49.3,
            "longitude": -123.1167,
            "elevation": 2,
            "timezone": "America/Vancouver",
            "active": true
        }
    ]
}
```
