---
title: Climate Normals | Weather Stations | JSON API
---

# Climate Normals

Climate normals are long-term averages of historical weather observations. Usually, these means are calculated over a period of 30 days (_“reference period“_). However, any other time series of sufficient length can be used to calculate climate normals.

Climate normals represent the typical monthly weather at a given location. The averages can also be used for calculating anomalies of current weather and climate conditions.

## Endpoint

Climate normals are provided through this endpoint:

```
GET https://api.meteostat.net/v2/stations/climate
```

## Parameters

Just add the station’s ID through the `station` parameter. Please note that not all weather stations provide climate normals.

| **Parameter** | **Description**        | **Type** | **Required** | **Default** |
|:--------------|:-----------------------|:---------|:-------------|:------------|
| station       | The weather station ID | String   | Yes          | `undefined` |

## Response

The data array of the response contains twelve objects, one per month. Each of these objects includes the following properties.

| **Parameter** | **Description**                            | **Type** |
|:--------------|:-------------------------------------------|:---------|
| month         | The integer number of the month (1 to 12)  | Integer  |
| tavg          | The mean temperature in °C                 | Float    |
| tmin          | The average minimum temperature in °C      | Float    |
| tmax          | The average maximum temperature in °C      | Float    |
| prcp          | The average total precipitation in mm      | Integer  |
| pres          | The average sea-level air pressure in hPa  | Float    |
| tsun          | The average sunshine duration in hours (h) | Integer  |

More information about the data format is available [here](/docs/formats.html).

Additionally, the meta object includes the `start` and `end` year of the climate averages.

## Example

The following example requires the cURL command-line interface. Alternatively, you can use an API client like Postman.

```sh
curl --header "x-api-key: {key}" "https://api.meteostat.net/v2/stations/climate?station=10637"
```

Please replace `{key}` with your personal API key.

## Data Response

The response should look like that:

```json
{
    "meta": {
        "source": "National Oceanic and Atmospheric Administration, Deutscher Wetterdienst",
        "start": 1961,
        "end": 1990,
        "exec_time": 0.015,
        "generated": "2020-06-14 10:15:40"
    },
    "data": [
        {
            "month": 1,
            "tavg": 0.7,
            "tmin": null,
            "tmax": null,
            "prcp": 43.8,
            "pres": 1018,
            "tsun": 41
        },
        {
            "month": 2,
            "tavg": 1.8,
            "tmin": null,
            "tmax": null,
            "prcp": 39.8,
            "pres": 1017.5,
            "tsun": 75
        },
        {
            "month": 3,
            "tavg": 5.2,
            "tmin": null,
            "tmax": null,
            "prcp": 51.1,
            "pres": 1014.9,
            "tsun": 116
        },
        {
            "month": 4,
            "tavg": 9.2,
            "tmin": null,
            "tmax": null,
            "prcp": 51.5,
            "pres": 1014.2,
            "tsun": 163
        },
        {
            "month": 5,
            "tavg": 13.7,
            "tmin": null,
            "tmax": null,
            "prcp": 61.3,
            "pres": 1014.6,
            "tsun": 207
        },
        {
            "month": 6,
            "tavg": 17.1,
            "tmin": null,
            "tmax": null,
            "prcp": 70.2,
            "pres": 1015.6,
            "tsun": 209
        },
        {
            "month": 7,
            "tavg": 18.9,
            "tmin": null,
            "tmax": null,
            "prcp": 63,
            "pres": 1016.6,
            "tsun": 225
        },
        {
            "month": 8,
            "tavg": 18.3,
            "tmin": null,
            "tmax": null,
            "prcp": 64.8,
            "pres": 1016.1,
            "tsun": 204
        },
        {
            "month": 9,
            "tavg": 14.8,
            "tmin": null,
            "tmax": null,
            "prcp": 48.3,
            "pres": 1018.3,
            "tsun": 158
        },
        {
            "month": 10,
            "tavg": 9.8,
            "tmin": null,
            "tmax": null,
            "prcp": 50.5,
            "pres": 1017.6,
            "tsun": 103
        },
        {
            "month": 11,
            "tavg": 4.7,
            "tmin": null,
            "tmax": null,
            "prcp": 59.4,
            "pres": 1018.3,
            "tsun": 48
        },
        {
            "month": 12,
            "tavg": 1.8,
            "tmin": null,
            "tmax": null,
            "prcp": 54.1,
            "pres": 1016.9,
            "tsun": 39
        }
    ]
}
```
