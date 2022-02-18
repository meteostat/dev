---
title: meteostat.Normals | API | Python Library
---

# meteostat.Normals

Query climate normals for one or multiple weather stations or a single geographical point.

## Parameters

The `loc` parameter is required. You can pass one (_String_) or multiple Meteostat weather station identifiers (_Tuple_ or _List_), a [meteostat.Point](/python/api/point) or a `DataFrame` returned by the [meteostat.Stations.fetch](/python/api/stations/fetch) method.

By default, Meteostat returns data for all available reference periods. If you want to retrieve climate normals for a specific period, please specify a `start` and `end` year.

| **Parameter** | **Description**              | **Type**                                                     | **Default** |
| :------------ | :--------------------------- | :----------------------------------------------------------- | :---------- |
| loc           | Weather station(s) or Point  | DataFrame, [Point](/python/api/point), String, List or Tuple | undefined   |
| start         | The first year of the period | Integer                                                      | `None`      |
| end           | The last year of the period  | Integer                                                      | `None`      |

## Attributes

Attributes allow the configuration of general settings and behaviour.

| **Parameter** | **Description**                                      | **Type** | **Default**        |
| :------------ | :--------------------------------------------------- | :------- | :----------------- |
| cache_dir     | The path of the cache directory                      | String   | ~/.meteostat/cache |
| cache_subdir  | The subdirectory of the cache                        | String   | Normals            |
| autoclean     | Remove outdated files automatically from cache       | Boolean  | `True`             |
| max_age       | Maximum age of a cached file in seconds              | Integer  | 86400              |
| processes     | Maximum number of processes used for data processing | Integer  | 1                  |
| threads       | Maximum number of threads used for data processing   | Integer  | 1                  |

You can disable caching completely by setting `max_age` to `0`.

When changing attributes, make sure to do so before creating a class instance:

```python{3}
from meteostat import Normals

Normals.cache_dir = '/my/path/goes/here'

data = Normals('10637')
```

## Methods

* [meteostat.Normals.convert](convert)
* [meteostat.Normals.fetch](fetch)
* [meteostat.Normals.count](count)
