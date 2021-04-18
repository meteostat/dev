---
title: Daily Data | Point Data | JSON API
---

# Daily Data

This endpoint provides historical daily statistics for a geographic location. The data provided through this endpoint is aggregated from multiple governmental interfaces.

Daily data is coming in with an offset of about one to seven days. However, some data might be added multiple days or even months later, depending on how the different weather services are updating their datasets. Additionally, Meteostat provides daily aggregates based on hourly observations.

Daily data can be queried for a **maximum of 370 days** per request.

## Endpoint

Daily data is provided through this endpoint:

```
GET https://api.meteostat.net/v2/point/daily
```

## Parameters

In order to query data for any location you’ll need to specify the `lat` and `lon` parameters. You will probably also want to add the `alt` parameter to your request to make the output more precise. If you do not set the `alt` parameter, Meteostat will detect the elevation using its own elevation model.

| **Parameter** | **Description**                                  | **Type** | **Required** | **Default** |
|:--------------|:-------------------------------------------------|:---------|:-------------|:------------|
| lat           | The latitude of the geographic location          | Float    | Yes          | `undefined` |
| lon           | The longitude of the geographic location         | Float    | Yes          | `undefined` |
| alt           | The elevation of the geographic location         | Integer  | No           | 0           |
| start         | The start date of the query (format: YYYY-MM-DD) | String   | Yes          | `undefined` |
| end           | The end date of the query (format: YYYY-MM-DD)   | String   | Yes          | `undefined` |

## Response

The response body includes the following properties.

| **Parameter** | **Description**                           | **Type** |
|:--------------|:------------------------------------------|:---------|
| date          | The date string (format: YYYY-MM-DD)      | String   |
| tavg          | The average air temperature in °C         | Float    |
| tmin          | The minimum air temperature in °C         | Float    |
| tmax          | The maximum air temperature in °C         | Float    |
| prcp          | The daily precipitation total in mm       | Float    |
| snow          | The snow depth in mm                      | Integer  |
| wdir          | The average wind direction in degrees (°) | Integer  |
| wspd          | The average wind speed in km/h            | Float    |
| wpgt          | The peak wind gust in km/h                | Float    |
| pres          | The average sea-level air pressure in hPa | Float    |
| tsun          | The daily sunshine total in minutes (m)   | Integer  |

More information about the data format is available [here](/docs/formats.html).

## Example

The following example requires the cURL command-line interface. Alternatively, you can use an API client like Postman.

```sh
curl --header "x-api-key: {key}" "https://api.meteostat.net/v2/point/daily?lat=33.749&lon=-84.388&alt=336&start=2019-06-01&end=2019-06-30"
```

Please replace `{key}` with your personal API key.

### Data Response

The data output returns one object per day. Have a look at this example:

```json
{
	"date": "2020-02-01",
	"tavg": 11.4,
	"tmin": 7.8,
	"tmax": 12.8,
	"prcp": 10.1,
	"snow": 0,
	"wdir": 210,
	"wspd": 22.3,
	"wpgt": 126,
	"pres": 1009.6,
	"tsun": 0
}
```
