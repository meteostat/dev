---
title: Hourly Data | Bulk Data
---

# Hourly Data

This endpoint provides one GZ compressed CSV file per weather station. The provided data is being aggregated from historical databases, METAR reports and SYNOP data.

## Endpoints

Full data dumps, including model data as substitute for missing observations, are available here:

```
https://bulk.meteostat.net/v2/hourly/{station}.csv.gz
```

Annual dumps are available, too:

```
https://bulk.meteostat.net/v2/hourly/{year}/{station}.csv.gz
```

Please replace `{year}` with the desired year number and `{station}` with the ID of a weather station.

## Structure

CSV files provided through the Meteostat bulk data interface use commas as separators. Each file provides the following columns:

| **Order** | **Parameter** | **Description**                            | **Type** |
|:----------|:--------------|:-------------------------------------------|:---------|
| 1         | date          | The date string (format: YYYY-MM-DD)       | String   |
| 2         | hour          | The hour (UTC)                             | Integer  |
| 3         | temp          | The air temperature in °C                  | Float    |
| 4         | dwpt          | The dew point in °C                        | Float    |
| 5         | rhum          | The relative humidity in percent (%)       | Integer  |
| 6         | prcp          | The one hour precipitation total in mm     | Float    |
| 7         | snow          | The snow depth in mm                       | Integer  |
| 8         | wdir          | The wind direction in degrees (°)          | Integer  |
| 9         | wspd          | The average wind speed in km/h             | Float    |
| 10        | wpgt          | The peak wind gust in km/h                 | Float    |
| 11        | pres          | The sea-level air pressure in hPa          | Float    |
| 12        | tsun          | The one hour sunshine total in minutes (m) | Integer  |
| 13        | coco          | The weather condition code                 | Integer  |

More information on the data formats and weather condition codes is available [here](/formats.html).

## Source Maps

Each dump has a `.map` file associated with it. These source map files are equally structured as the dumps themselves. However, instead of numerical data, they contain flags which identify the original source of an observation or aggregation.

To request a station's map file, use the following URL:

```
https://bulk.meteostat.net/v2/hourly/{station}.map.csv.gz
```

Please replace `{station}` with the ID of a weather station.

### Flags

Please refer to the following table for the meaning of the different flags:

| **Flag** | **Source**                  |
| -------- | --------------------------- |
| **A**    | National weather service    |
| **B**    | Global dataset (ISD)        |
| **C**    | SYNOP reports               |
| **D**    | METAR reports               |
| **E**    | Model data (MOSMIX, Met.no) |

If the data source is a national weather service (NWS), it refers to the NWS which operates the respective weather station.