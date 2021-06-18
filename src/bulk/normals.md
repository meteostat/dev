---
title: Climate Normals | Bulk Data
---

# Climate Normals

Essentially, climate normals are a summary of the typical weather over a period of 30 years. This endpoint provides one GZ compressed CSV file per weather station which contains all available reference periods for the respective weather station.

## Endpoint

```
https://bulk.meteostat.net/v2/normals/{station}.csv.gz
```

Please replace `{station}` with the ID of a weather station.

Weather stations are identified using their Meteostat ID, which equals the WMO ID for weather stations which are part of the WMO index.

## Structure

CSV files provided through the Meteostat bulk data interface use commas as separators. Each file provides the following columns:

| **Order** | **Parameter** | **Description**                                 | **Type** |
|:----------|:--------------|:------------------------------------------------|:---------|
| 1         | start         | The first year (YYYY) of the period             | Integer  |
| 1         | end           | The last year (YYYY) of the period              | Integer  |
| 2         | month         | The month                                       | Integer  |
| 4         | tmin          | The average daily minimum air temperature in °C | Float    |
| 5         | tmax          | The average daily maximum air temperature in °C | Float    |
| 6         | prcp          | The monthly precipitation total in mm           | Float    |
| 9         | wspd          | The average wind speed in km/h                  | Float    |
| 11        | pres          | The average sea-level air pressure in hPa       | Float    |
| 12        | tsun          | The monthly sunshine total in minutes (m)       | Integer  |

More information about the data format is available [here](/formats.html).
