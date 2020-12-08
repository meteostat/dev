---
title: meteostat.Hourly.interpolate | API | Python Library
---

# meteostat.Hourly.interpolate

The `interpolate` method closes gaps in time series by applying an interpolation algorithm. Please make sure to first [`normalize`](normalize) your data before interpolating.

## Parameters

The `limit` parameter specifies the maximum number of consecutive `NaN` values which should be filled.

| **Parameter** | **Description**                                      | **Type** | **Default** |
|:--------------|:-----------------------------------------------------|:---------|:------------|
| limit         | Maximum number of missing consecutive values to fill | Integer  | 3           |

## Returns

`Hourly` class instance

## Example

Get normalized 2018 weather data for Vancouver, BC and close gaps of up two three consecutive hours.

```python{13}
from datetime import datetime
from meteostat import Stations, Hourly

stations = Stations()
stations = stations.nearby(49.2497, -123.1193)
station = stations.fetch(1)

start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31, 23, 59)

data = Hourly(station, start=start, end=end)
data = data.normalize()
data = data.interpolate()
data = data.fetch()

print(data)
```
