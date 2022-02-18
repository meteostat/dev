---
title: meteostat.Monthly | API | Python Library
---

# meteostat.Monthly

Query monthly weather data for one or multiple weather stations or a single geographical point.

**Parent Class:** [meteostat.TimeSeries](/python/api/timeseries/)

## Parameters

The `loc` parameter is required. You can pass one (_String_) or multiple Meteostat weather station identifiers (_Tuple_ or _List_), a [meteostat.Point](/python/api/point) or a `DataFrame` returned by the [meteostat.Stations.fetch](/python/api/stations/fetch) method.

| **Parameter** | **Description**                  | **Type**                                                     | **Default** |
| :------------ | :------------------------------- | :----------------------------------------------------------- | :---------- |
| loc           | Weather station(s) or Point      | DataFrame, [Point](/python/api/point), String, List or Tuple | undefined   |
| start         | Start date of the desired period | Datetime                                                     | None        |
| end           | End date of the desired period   | Datetime                                                     | None        |
| model         | Include model data               | Boolean                                                      | True        |

## Attributes

Attributes allow the configuration of general settings and behaviour.

| **Parameter** | **Description**                                      | **Type** | **Default**        |
| :------------ | :--------------------------------------------------- | :------- | :----------------- |
| cache_dir     | The path of the cache directory                      | String   | ~/.meteostat/cache |
| cache_subdir  | The subdirectory of the cache                        | String   | monthly            |
| autoclean     | Remove outdated files automatically from cache       | Boolean  | `True`             |
| max_age       | Maximum age of a cached file in seconds              | Integer  | 86400              |
| processes     | Maximum number of processes used for data processing | Integer  | 1                  |
| threads       | Maximum number of threads used for data processing   | Integer  | 1                  |

You can disable caching completely by setting `max_age` to `0`.

When changing attributes, make sure to do so before creating a class instance:

```python{3}
from meteostat import Monthly

Monthly.cache_dir = '/my/path/goes/here'

data = Monthly('10637')
```

## Methods

* [meteostat.TimeSeries.normalize](/python/api/timeseries/normalize)
* [meteostat.TimeSeries.aggregate](/python/api/timeseries/aggregate)
* [meteostat.TimeSeries.interpolate](/python/api/timeseries/interpolate)
* [meteostat.TimeSeries.convert](/python/api/timeseries/convert)
* [meteostat.TimeSeries.coverage](/python/api/timeseries/coverage)
* [meteostat.TimeSeries.fetch](/python/api/timeseries/fetch)
* [meteostat.TimeSeries.count](/python/api/timeseries/count)
* [meteostat.TimeSeries.stations](/python/api/timeseries/stations)
* [meteostat.TimeSeries.clear_cache](/python/api/timeseries/clear_cache)