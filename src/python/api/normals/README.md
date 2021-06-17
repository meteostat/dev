---
title: meteostat.Normals | API | Python Library
---

# meteostat.Normals

Query climate normals for one or multiple weather stations or a single geographical point.

## Parameters

The `loc` parameter is required. You can pass a [meteostat.Point](/python/api/point), a `DataFrame` returned by the [meteostat.Stations.fetch](/python/api/stations/fetch) method or provide one (String) or multiple Meteostat weather station identifiers (Tuple or List).

The `period` defaults to `auto` which will return climate normals for the latest available period. Alternatively, you can set the parameter to `all` if you need a DataFrame which contains all available reference periods. You can also set a specific period by passing a `tuple` which contains both the start and the end year (e.g. `(1960, 1990)`).

| **Parameter** | **Description**             | **Type**                                              | **Default** |
|:--------------|:----------------------------|:------------------------------------------------------|:------------|
| loc           | Weather station(s) or Point | DataFrame, [Point](/python/api/point), String or List | undefined   |
| period        | The reference period        | Tuple, String                                         | 'auto'      |

## Attributes

Attributes allow the configuration of general settings and behaviour.

| **Parameter** | **Description**                                    | **Type** | **Default**        |
|:--------------|:---------------------------------------------------|:---------|:-------------------|
| cache_dir     | The path of the cache directory                    | String   | ~/.meteostat/cache |
| cache_subdir  | The subdirectory of the cache                      | String   | Normals            |
| max_age       | Maximum age of a cached file in seconds            | Integer  | 86400              |
| max_threads   | Maximum number of threads used for data processing | Integer  | 1                  |

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
