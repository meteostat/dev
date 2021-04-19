---
title: Hourly Data | Weather Stations | JSON API
---

# Hourly Data

This endpoint provides historical hourly observations for a particular weather station. Furthermore, gaps in the time series can be filled in with statistically optimized model data. The data provided through this endpoint is aggregated from multiple governmental interfaces.

Hourly observations are coming in with an offset of about two to three hours. However, some data might be added multiple days or even months later, depending on how the different weather services are updating their datasets.

Hourly data can be queried for a **maximum of 10 days** per request.

## Endpoint

Hourly data is provided through this endpoint:

```
GET https://api.meteostat.net/v2/stations/hourly
```

## Parameters

When calling this endpoint please refer to the following parameters.

| **Parameter** | **Description**                                                                                                               | **Type** | **Required** | **Default** |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------|:---------|:-------------|:------------|
| station       | The weather station ID                                                                                                        | String   | Yes          | `undefined` |
| start         | The start date of the query (format: YYYY-MM-DD)                                                                              | String   | Yes          | `undefined` |
| end           | The end date of the query (format: YYYY-MM-DD)                                                                                | String   | Yes          | `undefined` |
| tz            | The time zone according to the tz database                                                                                    | String   | No           | UTC         |
| model         | A boolean parameter that specifies whether missing observations should be substituted with statistically optimized model data | Integer  | No           | 0           |

## Response

The response body includes the following properties.

| **Parameter** | **Description**                                                            | **Type** |
|:--------------|:---------------------------------------------------------------------------|:---------|
| time          | UTC time stamp (format: YYYY-MM-DD hh:mm:ss)                               | String   |
| time_local    | Local time stamp (format: YYYY-MM-DD hh:mm:ss); only provided if tz is set | String   |
| temp          | The air temperature in °C                                                  | Float    |
| dwpt          | The dew point in °C                                                        | Float    |
| rhum          | The relative humidity in percent (%)                                       | Integer  |
| prcp          | The one hour precipitation total in mm                                     | Float    |
| snow          | The snow depth in mm                                                       | Integer  |
| wdir          | The wind direction in degrees (°)                                          | Integer  |
| wspd          | The average wind speed in km/h                                             | Float    |
| wpgt          | The peak wind gust in km/h                                                 | Float    |
| pres          | The sea-level air pressure in hPa                                          | Float    |
| tsun          | The one hour sunshine total in minutes (m)                                 | Integer  |
| coco          | The weather condition code                                                 | Integer  |

More information on the data formats and weather condition codes is available [here](/formats.html).

## Example

The following example requires the cURL command-line interface. Alternatively, you can use an API client like Postman.

```sh
curl --header "x-api-key: {key}" "https://api.meteostat.net/v2/stations/hourly?station=10637&start=2020-02-01&end=2020-02-04"
```

Please replace `{key}` with your personal API key.

### Data Response

The data output returns one object per hour. Have a look at this example:

```json
{
	"time": "2019-12-31 23:00:00",
	"time_local": "2020-01-01 00:00:00",
	"temp": 1.6,
	"dwpt": 0.1,
	"rhum": 90,
	"prcp": 0,
	"snow": 0,
	"wdir": 300,
	"wspd": 5,
	"wpgt": 10,
	"pres": 1036.4,
	"tsun": 0,
	"coco": 4
}
```
