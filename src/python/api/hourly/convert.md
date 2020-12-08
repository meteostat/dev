---
title: meteostat.Hourly.convert | API | Python Library
---

# meteostat.Hourly.convert

Convert specific attributes to a different unit.

## Parameters

The `units` parameter takes a dictionary which specifies column-unit pairs.

| **Parameter** | **Description**                                    | **Type**   | **Default** |
|:--------------|:---------------------------------------------------|:-----------|:------------|
| units         | Dictionary which maps attributes to a certain unit | Dictionary | undefined   |

## Returns

`Hourly` class instance

## Example

Get daily weather data for Atlanta International Airport in 2019 and convert to imperial units.

```python{8}
from datetime import datetime
from meteostat import Daily, units

start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31, 23, 59)

data = Hourly('72219', start, end)
data = data.convert(units.imperial)
data = data.fetch()

print(data)
```
