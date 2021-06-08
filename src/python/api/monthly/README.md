---
title: meteostat.Monthly | API | Python Library
---

# meteostat.Monthly

Query monthly weather data for one or multiple weather stations or a single geographical point.

## Parameters

The `loc` parameter is required. You can pass a [meteostat.Point](/python/api/point), a `DataFrame` returned by the [meteostat.Stations.fetch](/python/api/stations/fetch) method or provide one (String) or multiple Meteostat weather station identifiers (Tuple or List).

| **Parameter** | **Description**                  | **Type**                                              | **Default** |
|:--------------|:---------------------------------|:------------------------------------------------------|:------------|
| loc           | Weather station(s) or Point      | DataFrame, [Point](/python/api/point), String or List | undefined   |
| start         | Start date of the desired period | Datetime                                              | None        |
| end           | End date of the desired period   | Datetime                                              | None        |
| model         | Include model data               | Boolean                                               | True        |

## Attributes

Attributes allow the configuration of general settings and behaviour.

| **Parameter** | **Description**                                    | **Type** | **Default**        |
|:--------------|:---------------------------------------------------|:---------|:-------------------|
| cache_dir     | The path of the cache directory                    | String   | ~/.meteostat/cache |
| cache_subdir  | The subdirectory of the cache                      | String   | monthly            |
| max_age       | Maximum age of a cached file in seconds            | Integer  | 86400              |
| max_threads   | Maximum number of threads used for data processing | Integer  | 1                  |

You can disable caching completely by setting `max_age` to `0`.

When changing attributes, make sure to do so before creating a class instance:

```python{3}
from meteostat import Monthly

Monthly.cache_dir = '/my/path/goes/here'

data = Monthly('10637')
```

## Methods

* [meteostat.Monthly.normalize](normalize)
* [meteostat.Monthly.aggregate](aggregate)
* [meteostat.Monthly.interpolate](interpolate)
* [meteostat.Monthly.convert](convert)
* [meteostat.Monthly.coverage](coverage)
* [meteostat.Monthly.fetch](fetch)
* [meteostat.Monthly.count](count)
