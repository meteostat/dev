---
title: meteostat.Monthly.interpolate | API | Python Library
---

# meteostat.Monthly.interpolate

The `interpolate` method closes gaps in time series by applying an interpolation algorithm. Please make sure to first [`normalize`](normalize) your data before interpolating.

## Parameters

The `limit` parameter specifies the maximum number of consecutive `NaN` values which should be filled.

| **Parameter** | **Description**                                      | **Type** | **Default** |
|:--------------|:-----------------------------------------------------|:---------|:------------|
| limit         | Maximum number of missing consecutive values to fill | Integer  | 3           |

## Returns

`Monthly` class instance

## Example

Get normalized weather data for Vancouver, BC and close gaps of up two three consecutive months.

```python{13}
from datetime import datetime
from meteostat import Stations, Monthly

stations = Stations()
stations = stations.nearby(49.2497, -123.1193)
station = stations.fetch(1)

start = datetime(2000, 1, 1)
end = datetime(2018, 12, 31)

data = Monthly(station, start, end)
data = data.normalize()
data = data.interpolate()
data = data.fetch()

print(data)
```
