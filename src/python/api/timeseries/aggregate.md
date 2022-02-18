---
title: meteostat.TimeSeries.aggregate | API | Python
---

# meteostat.TimeSeries.aggregate

Aggregation is an important tool in data analysis. Meteostat allows both time-wise and spatial aggregation.

## Parameters

The `freq` parameter specifies the time series' frequency. For full specification of available frequencies, please see [here](https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#offset-aliases). If you want to aggregate across all weather stations, just set the `spatial` parameter to `True`.

| **Parameter** | **Description**                            | **Type** | **Default** |
| :------------ | :----------------------------------------- | :------- | :---------- |
| freq          | Group by the specified frequency           | String   | 1H, 1D, 1MS |
| spatial       | Calculate averages across weather stations | Boolean  | `False`     |

## Returns

A copy of `self`

### Aggregate Functions

Meteostat uses the following aggregate functions:

* `temp` => `mean`
* `dwpt` => `mean`
* `rhum` => `mean`
* `tavg` => `mean`
* `tmin` => `min`
* `tmax` => `max`
* `prcp` => `sum`
* `snow` => `max`
* `wdir` => `meteostat.utilities.aggregations.degree_mean`
* `wspd` => `mean`
* `wpgt` => `max`
* `pres` => `mean`
* `tsun` => `sum`
* `coco` => `max`

## Examples

### Hourly

Get weekly weather data for Frankfurt Airport in December 2018.

```python{9}
from datetime import datetime
from meteostat import Stations, Hourly

start = datetime(2018, 12, 1)
end = datetime(2018, 12, 31, 23, 59)

data = Hourly('10637', start=start, end=end)
data = data.normalize()
data = data.aggregate('1W')
data = data.fetch()

print(data)
```

### Daily

Get weekly weather data for Frankfurt Airport in 2018.

```python{9}
from datetime import datetime
from meteostat import Stations, Daily

start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31)

data = Daily('10637', start=start, end=end)
data = data.normalize()
data = data.aggregate('1W')
data = data.fetch()

print(data)
```

### Monthly

Get annual data for Frankfurt Airport from 2000 to 2018.

```python{9}
from datetime import datetime
from meteostat import Monthly

start = datetime(2000, 1, 1)
end = datetime(2018, 12, 31)

data = Monthly('10637', start, end)
data = data.normalize()
data = data.aggregate('1Y')
data = data.fetch()

print(data)
```
