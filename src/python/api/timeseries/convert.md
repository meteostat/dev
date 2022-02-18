---
title: meteostat.TimeSeries.convert | API | Python
---

# meteostat.TimeSeries.convert

Convert specific attributes to a different unit.

## Parameters

The `units` parameter takes a dictionary which specifies column-unit pairs.

| **Parameter** | **Description**                                    | **Type**   | **Default** |
|:--------------|:---------------------------------------------------|:-----------|:------------|
| units         | Dictionary which maps attributes to a certain unit | Dictionary | undefined   |

## Returns

A copy of `self`

## Examples

### Hourly

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

### Daily

Get daily weather data for Atlanta International Airport and convert to imperial units.

```python{4}
from meteostat import Daily, units

data = Daily('72219')
data = data.convert(units.imperial)
data = data.fetch()

print(data)
```

### Monthly

Get monthly weather data for Atlanta International Airport and convert to imperial units.

```python{4}
from meteostat import Monthly, units

data = Monthly('72219')
data = data.convert(units.imperial)
data = data.fetch()

print(data)
```
