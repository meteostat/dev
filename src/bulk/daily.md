---
title: Daily Data | Bulk Data
---

# Daily Data

This endpoint provides one GZ compressed CSV file per weather station.

## Endpoints

Full data dumps, including model data as substitute, are available here:

```
https://bulk.meteostat.net/v2/daily/full/{station}.csv.gz
```

If you only want real observation data, please use the following endpoint instead:

```
https://bulk.meteostat.net/v2/daily/obs/{station}.csv.gz
```

Please replace `{station}` with the ID of a weather station.

Weather stations are identified using their Meteostat ID, which equals the WMO ID for weather stations which are part of the WMO index.

## Structure

CSV files provided through the Meteostat bulk data interface use commas as separators. Each file provides the following columns:

| **Order** | **Parameter** | **Description**                           | **Type** |
|:----------|:--------------|:------------------------------------------|:---------|
| 1         | date          | The date string (format: YYYY-MM-DD)      | String   |
| 2         | tavg          | The average air temperature in °C         | Float    |
| 3         | tmin          | The minimum air temperature in °C         | Float    |
| 4         | tmax          | The maximum air temperature in °C         | Float    |
| 5         | prcp          | The daily precipitation total in mm       | Float    |
| 6         | snow          | The snow depth in mm                      | Integer  |
| 7         | wdir          | The average wind direction in degrees (°) | Integer  |
| 8         | wspd          | The average wind speed in km/h            | Float    |
| 9         | wpgt          | The peak wind gust in km/h                | Float    |
| 10        | pres          | The average sea-level air pressure in hPa | Float    |
| 11        | tsun          | The daily sunshine total in minutes (m)   | Integer  |

More information about the data format is available [here](/formats.html).
