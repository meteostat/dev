---
title: meteostat.Monthly.normalize | API | Python Library
---

# meteostat.Monthly.normalize

In contrast to model data, time series which were recorded by actual weather stations always contain gaps. For instance, because of a temporal outage of some of the sensors. However, when retrieving monthly data, you probably expect one record per month. The `normalize` method makes sure that gaps in the time series are filled.

## Parameters

This method does not take any parameters.

## Returns

`Monthly` class instance

## Example

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
