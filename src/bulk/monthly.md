---
title: Monthly Data | Bulk Data
---

# Monthly Data

This endpoint provides one GZ compressed CSV file per weather station.

## Endpoints

Full data dumps, including model data as substitute, are available here:

```
https://bulk.meteostat.net/v2/monthly/{station}.csv.gz
```

Please replace `{station}` with the ID of a weather station.

## Structure

CSV files provided through the Meteostat bulk data interface use commas as separators. Each file provides the following columns:

| **Order** | **Parameter** | **Description**                                 | **Type** |
| :-------- | :------------ | :---------------------------------------------- | :------- |
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

## Source Maps

Each dump has a `.map` file associated with it. These source map files are equally structured as the dumps themselves. However, instead of numerical data, they contain flags which identify the original source of an observation or aggregation.

To request a station's map file, use the following URL:

```
https://bulk.meteostat.net/v2/monthly/{station}.map.csv.gz
```

Please replace `{station}` with the ID of a weather station.

### Flags

Please refer to the following table for the meaning of the different flags:

| **Flag** | **Source**                  | **Granularity** | **Aggregated** |
| -------- | --------------------------- | --------------- | -------------- |
| **A**    | National weather service    | Monthly         | X              |
| **B**    | Global dataset              | Monthly         | X              |
| **C**    | National weather service    | Daily           | ✓              |
| **D**    | Global dataset (GHCND)      | Daily           | ✓              |
| **E**    | National weather service    | Hourly          | ✓              |
| **F**    | Global dataset (ISD)        | Hourly          | ✓              |
| **G**    | SYNOP reports               | Hourly          | ✓              |
| **H**    | METAR reports               | Hourly          | ✓              |
| **I**    | Model data (MOSMIX, Met.no) | Hourly          | ✓              |

If the data source is a national weather service (NWS), it refers to the NWS which operates the respective weather station.
