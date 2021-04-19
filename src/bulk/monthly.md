---
title: Monthly Data | Bulk Data
---

# Monthly Data

This endpoint provides one GZ compressed CSV file per weather station.

## Endpoints

Full data dumps, including model data as substitute, are available here:

```
https://bulk.meteostat.net/v2/monthly/full/{station}.csv.gz
```

If you only want real observation data, please use the following endpoint instead:

```
https://bulk.meteostat.net/v2/monthly/obs/{station}.csv.gz
```

Please replace `{station}` with the ID of a weather station.

Weather stations are identified using their Meteostat ID, which equals the WMO ID for weather stations which are part of the WMO index.

## Structure

CSV files provided through the Meteostat bulk data interface use commas as separators. Each file provides the following columns:

| **Order** | **Parameter** | **Description**                                 | **Type** |
|:----------|:--------------|:------------------------------------------------|:---------|
| 1         | year          | The year (format: YYYY)                         | Integer  |
| 2         | month         | The month (format: MM)                          | Integer  |
| 3         | tavg          | The average air temperature in °C               | Float    |
| 4         | tmin          | The average daily minimum air temperature in °C | Float    |
| 5         | tmax          | The average daily maximum air temperature in °C | Float    |
| 6         | prcp          | The monthly precipitation total in mm           | Float    |
| 7         | snow          | The maximum snow depth in mm                    | Integer  |
| 8         | wdir          | The average wind direction in degrees (°)       | Integer  |
| 9         | wspd          | The average wind speed in km/h                  | Float    |
| 10        | wpgt          | The peak wind gust in km/h                      | Float    |
| 11        | pres          | The average sea-level air pressure in hPa       | Float    |
| 12        | tsun          | The monthly sunshine total in minutes (m)       | Integer  |

More information about the data format is available [here](/formats.html).
