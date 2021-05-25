---
title: meteostat.Normals.convert | API | Python Library
---

# meteostat.Normals.convert

Convert specific attributes to a different unit.

## Parameters

The `units` parameter takes a dictionary which specifies column-unit pairs.

| **Parameter** | **Description**                                    | **Type**   | **Default** |
|:--------------|:---------------------------------------------------|:-----------|:------------|
| units         | Dictionary which maps attributes to a certain unit | Dictionary | undefined   |

## Returns

`Normals` class instance

## Example

Get climate normals for Atlanta Airport and convert to imperial units.

```python{4}
from meteostat import Normals, units

data = Normals('72219')
data = data.convert(units.imperial)
data = data.fetch()

print(data)
```
