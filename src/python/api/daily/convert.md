---
title: meteostat.Daily.convert | API | Python Library
---

# meteostat.Daily.convert

Convert specific attributes to a different unit.

## Parameters

The `units` parameter takes a dictionary which specifies column-unit pairs.

| **Parameter** | **Description**                                    | **Type**   | **Default** |
|:--------------|:---------------------------------------------------|:-----------|:------------|
| units         | Dictionary which maps attributes to a certain unit | Dictionary | `undefined` |

## Returns

`Daily` class instance

## Example

Get daily weather data for Atlanta International Airport and convert to imperial units.

```python{4}
from meteostat import Daily, units

data = Daily('72219')
data = data.convert(units.imperial)
data = data.fetch()

print(data)
```
