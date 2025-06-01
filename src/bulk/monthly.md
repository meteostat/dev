---
title: Monthly Data | Bulk Data
---

# Monthly Data

This endpoint provides one GZ compressed CSV file per weather station.

## Endpoints

Ddata dumps, including model data as substitute for missing observations, are available here:

```
https://data.meteostat.net/monthly/{station}.csv.gz
```

Please replace `{station}` with the ID of a weather station.

## Structure

CSV files provided through the Meteostat bulk data interface use commas as separators. Each file includes a header row containing the column names, which correspond to the parameter codes described [here](/formats.html#meteorological-parameters).

More information on the data formats and weather condition codes is available [here](/formats.html).

### Data Sources

Each data column has a corresponding source column with the `_source` suffix. Monthly data may be aggregated from multiple sources; in such cases, the source column will list the data source IDs separated by a single whitespace.