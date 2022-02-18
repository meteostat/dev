---
title: meteostat.TimeSeries.normalize | API | Python
---

# meteostat.TimeSeries.normalize

In contrast to model data, time series which were recorded by actual weather stations always contain gaps. For instance, because of a temporal outage of some of the sensors. However, when retrieving daily data, for example, you probably expect one record per day. The `normalize` method makes sure that gaps in the time series are filled.

## Parameters

This method does not take any parameters.

## Returns

A copy of `self`

## Examples

### Hourly

Get normalized weather data for 2018 in Vancouver, BC.

```python{12}
from datetime import datetime
from meteostat import Stations, Hourly

stations = Stations()
stations = stations.nearby(49.2497, -123.1193)
station = stations.fetch(1)

start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31, 23, 59)

data = Hourly(station, start=start, end=end)
data = data.normalize()
data = data.fetch()

print(data)
```

### Daily

Get normalized weather data for 2018 in Vancouver, BC.

```python{8}
from datetime import datetime
from meteostat import Daily

start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31)

data = Daily('71892', start=start, end=end)
data = data.normalize()
data = data.fetch()

print(data)
```

### Monthly

Get normalized weather data for Vancouver, BC.

```python{12}
from datetime import datetime
from meteostat import Stations, Monthly

stations = Stations()
stations = stations.nearby(49.2497, -123.1193)
station = stations.fetch(1)

start = datetime(2000, 1, 1)
end = datetime(2018, 12, 31)

data = Monthly(station, start, end)
data = data.normalize()
data = data.fetch()

print(data)
```
