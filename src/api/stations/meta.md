---
title: Meta Data | Weather Stations | JSON API
---

# Meta Data

This endpoint provides information which describes a specific weather station. The output includes meta data like latitude, longitude and elevation.

## Endpoint

```
GET https://api.meteostat.net/v2/stations/meta
```

## Parameters

You’ll need to specify one of the following parameters.

| **Parameter** | **Description**                         | **Type** | **Required** | **Default** |
|:--------------|:----------------------------------------|:---------|:-------------|:------------|
| id            | The Meteostat ID of the weather station | String   | No           | `undefined` |
| wmo           | The WMO ID of the weather station       | Integer  | No           | `undefined` |
| icao          | The ICAO ID of the weather station      | String   | No           | `undefined` |

## Response

The response body includes the following properties.

| **Parameter** | **Description**                                                           | **Type** |
|:--------------|:--------------------------------------------------------------------------|:---------|
| id            | The Meteostat ID of the weather station                                   | String   |
| name          | Object containing the name of the weather stations in different languages | Object   |
| country       | ISO 3166-1 alpha-2 country code of the weather station                    | String   |
| region        | ISO 3166-2 state or region code of the weather station                    | String   |
| national      | The national ID of the weather station                                    | String   |
| wmo           | The WMO ID of the weather station                                         | Integer  |
| icao          | The ICAO ID of the weather station                                        | String   |
| iata          | The IATA ID of the weather station                                        | String   |
| latitude      | The latitude of the weather station                                       | Float    |
| longitude     | The longitude of the weather station                                      | Float    |
| elevation     | The elevation of the weather station in meters above sea level            | Integer  |
| timezone      | The time zone of the weather station                                      | String   |
| inventory     | Object containing the periods of available data for this weather station  | Object   |

## Example

The following example requires the cURL command-line interface. Alternatively, you can use an API client like Postman.

```sh
curl --header "x-api-key: {key}" "https://api.meteostat.net/v2/stations/meta?id=71508"
```

Please replace `{key}` with your personal API key.

### Data Response

That’s the expected response:

```json
{
    "meta": {
        "exec_time": 0.001,
        "generated": "2020-06-02 15:54:27"
    },
    "data": {
        "id": "71508",
        "name": {
            "en": "Toronto City"
        },
        "country": "CA",
        "region": "ON",
        "national": null,
        "wmo": "71508",
        "icao": "CXTO",
        "iata": null,
        "latitude": 43.6667,
        "longitude": -79.4,
        "elevation": 113,
        "timezone": "America/Toronto",
        "inventory": {
            "hourly": {
                "start": "2004-08-03",
                "end": "2020-05-31"
            },
            "daily": {
                "start": "2002-06-04",
                "end": "2020-05-25"
            }
        }
    }
}
```
