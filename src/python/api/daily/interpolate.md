---
title: meteostat.Daily.interpolate | API | Python Library
---

# meteostat.Daily.interpolate

The `interpolate` method closes gaps in time series by applying an interpolation algorithm. Please make sure to first [`normalize`](normalize) your data before interpolating.

## Parameters

| **Parameter** | **Description**                                      | **Type** | **Default** |
|:--------------|:-----------------------------------------------------|:---------|:------------|
| limit         | Maximum number of missing consecutive values to fill | Integer  | 3           |

## Returns

`Daily` class instance

## Example

Get normalized 2018 weather data for Vancouver, BC and close gaps of up two three consecutive days.

```python{13}
from datetime import datetime
from meteostat import Stations, Daily

stations = Stations()
stations = stations.nearby(49.2497, -123.1193)
station = stations.fetch(1)

start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31)

data = Daily(station, start=start, end=end)
data = data.normalize()
data = data.interpolate()
data = data.fetch()

print(data)
```
