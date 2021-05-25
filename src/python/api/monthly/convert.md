---
title: meteostat.Monthly.convert | API | Python Library
---

# meteostat.Monthly.convert

Convert specific attributes to a different unit.

## Parameters

The `units` parameter takes a dictionary which specifies column-unit pairs.

| **Parameter** | **Description**                                    | **Type**   | **Default** |
|:--------------|:---------------------------------------------------|:-----------|:------------|
| units         | Dictionary which maps attributes to a certain unit | Dictionary | undefined   |

## Returns

`Monthly` class instance

## Example

Get monthly weather data for Atlanta International Airport and convert to imperial units.

```python{4}
from meteostat import Monthly, units

data = Monthly('72219')
data = data.convert(units.imperial)
data = data.fetch()

print(data)
```
