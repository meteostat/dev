---
title: Daily Data | Bulk Data
---

# Daily Data

This endpoint provides one GZ compressed CSV file per weather station.

## Endpoints

Full data dumps, including model data as substitute for missing records, are available here:

```
https://bulk.meteostat.net/v2/daily/{station}.csv.gz
```

Please replace `{station}` with the ID of a weather station.

## Data Structure

CSV files provided through the Meteostat bulk data interface use commas as separators. Each file provides the following columns:

| **Order** | **Parameter** | **Description**                           | **Type** |
| :-------- | :------------ | :---------------------------------------- | :------- |
| 1         | date          | The date string (format: YYYY-MM-DD)      | String   |
| 2         | tavg          | The average air temperature in °C         | Float    |
| 3         | tmin          | The minimum air temperature in °C         | Float    |
| 4         | tmax          | The maximum air temperature in °C         | Float    |
| 5         | prcp          | The daily precipitation total in mm       | Float    |
| 6         | snow          | The maximum snow depth in mm              | Integer  |
| 7         | wdir          | The average wind direction in degrees (°) | Integer  |
| 8         | wspd          | The average wind speed in km/h            | Float    |
| 9         | wpgt          | The peak wind gust in km/h                | Float    |
| 10        | pres          | The average sea-level air pressure in hPa | Float    |
| 11        | tsun          | The daily sunshine total in minutes (m)   | Integer  |

More information about the data format is available [here](/formats.html).

## Source Maps

Each dump has a `.map` file associated with it. These source map files are equally structured as the dumps themselves. However, instead of numerical data, they contain flags which identify the original source of an observation or aggregation.

To request a station's map file, use the following URL:

```
https://bulk.meteostat.net/v2/daily/{station}.map.csv.gz
```

Please replace `{station}` with the ID of a weather station.

### Flags

Please refer to the following table for the meaning of the different flags:

| **Flag** | **Source**                  | **Granularity** | **Aggregated** |
| -------- | --------------------------- | --------------- | -------------- |
| **A**    | National weather service    | Daily           | X              |
| **B**    | Global dataset (GHCND)      | Daily           | X              |
| **C**    | National weather service    | Hourly          | ✓              |
| **D**    | Global dataset (ISD)        | Hourly          | ✓              |
| **E**    | SYNOP reports               | Hourly          | ✓              |
| **F**    | METAR reports               | Hourly          | ✓              |
| **G**    | Model data (MOSMIX, Met.no) | Hourly          | ✓              |

If the data source is a national weather service (NWS), it refers to the NWS which operates the respective weather station.