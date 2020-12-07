---
title: meteostat.Daily.normalize | API | Python Library
---

# meteostat.Daily.normalize

In contrast to model data, time series which were recorded by actual weather stations always contain gaps. For instance, because of a temporal outage of some of the sensors. However, when retrieving daily data, you probably expect one record per day. The `normalize` method makes sure that gaps in the time series are filled.

## Parameters

This method does not take any parameters.

## Returns

`Daily` class instance

## Example

Get normalized weather data for 2018 in Vancouver, BC.

```python{12}
from datetime import datetime
from meteostat import Stations, Daily

stations = Stations()
stations = stations.nearby(49.2497, -123.1193)
station = stations.fetch(1)

start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31)

data = Daily(station, start=start, end=end)
data = data.normalize()
data = data.fetch()

print(data)
```
