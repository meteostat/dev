---
title: meteostat.Normals.coverage | API | Python Library
---

# meteostat.Normals.coverage

The `coverage` method provides information about the completeness of data. It can be used to determine the coverage of records or individual parameters.

## Parameters

You can specify an optional `parameter` to look for. This can be any [response parameter](/python/normals.html#data-structure) of the `Normals` class (e.g. `tmax` for the maximum temperature).

| **Parameter** | **Description**                                      | **Type** | **Default** |
|:--------------|:-----------------------------------------------------|:---------|:------------|
| parameter     | Check coverage of a certain meteorological parameter | String   | None        |

## Returns

Integer between 0 (no records) and 1 (all records)

## Example

Check completeness of precipitation data for Sydney Airport.

```python{4}
from meteostat import Normals

data = Normals('94767')
coverage = data.coverage('prcp')

print(coverage)
```
