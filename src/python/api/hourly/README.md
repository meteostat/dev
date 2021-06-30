---
title: meteostat.Hourly | API | Python Library
---

# meteostat.Hourly

Query hourly weather data for one or multiple weather stations or a single geographical point.

## Parameters

The `stations` parameter is required. You can pass a [meteostat.Point](/python/api/point) or a DataFrame returned by the [meteostat.Stations.fetch](/python/api/stations/fetch) method or provide one (String) or multiple Meteostat weather station identifiers (Tuple or List).

| **Parameter** | **Description**                     | **Type**                                              | **Default** |
|:--------------|:------------------------------------|:------------------------------------------------------|:------------|
| loc           | Weather station(s) or Point         | DataFrame, [Point](/python/api/point), String or List | undefined   |
| start         | Start date of the desired period    | Datetime                                              | None        |
| end           | End date of the desired period      | Datetime                                              | None        |
| timezone      | Time zone of the period and records | String                                                | None        |
| model         | Include model data                  | Boolean                                               | True        |

## Attributes

Attributes allow the configuration of general settings and behaviour.

| **Parameter** | **Description**                                      | **Type** | **Default**        |
|:--------------|:-----------------------------------------------------|:---------|:-------------------|
| cache_dir     | The path of the cache directory                      | String   | ~/.meteostat/cache |
| cache_subdir  | The subdirectory of the cache                        | String   | hourly             |
| max_age       | Maximum age of a cached file in seconds              | Integer  | 86400              |
| processes     | Maximum number of processes used for data processing | Integer  | 1                  |
| threads       | Maximum number of threads used for data processing   | Integer  | 1                  |
| chunked       | Use chunked source data                              | Boolean  | True               |

You can disable caching completely by setting `max_age` to `0`.

When changing attributes, make sure to do so before creating a class instance:

```python{3}
from meteostat import Hourly

Hourly.cache_dir = '/my/path/goes/here'

data = Hourly('10637')
```

## Methods

* [meteostat.Hourly.normalize](normalize)
* [meteostat.Hourly.aggregate](aggregate)
* [meteostat.Hourly.interpolate](interpolate)
* [meteostat.Hourly.convert](convert)
* [meteostat.Hourly.coverage](coverage)
* [meteostat.Hourly.fetch](fetch)
* [meteostat.Hourly.count](count)
