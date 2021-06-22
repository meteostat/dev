---
title: meteostat.Monthly.aggregate | API | Python Library
---

# meteostat.Monthly.aggregate

Aggregation is an important tool in data analysis. Meteostat allows both time-wise and spatial aggregation.

## Parameters

The `freq` parameter specifies the time series frequency. For full specification of available frequencies, please see [here](https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#offset-aliases). If you want to aggregate across all weather stations, just set the `spatial` parameter to `true`.

| **Parameter** | **Description**                            | **Type** | **Default** |
|:--------------|:-------------------------------------------|:---------|:------------|
| freq          | Group by the specified frequency           | String   | '1M'        |
| spatial       | Calculate averages across weather stations | Boolean  | False       |

## Returns

`Monthly` class instance

### Aggregate Functions

Meteostat uses the following aggregate functions:

* `tavg` => `mean`
* `tmin` => `mean`
* `tmax` => `mean`
* `prcp` => `sum`
* `snow` => `max`
* `wdir` => `mean`
* `wspd` => `mean`
* `wpgt` => `max`
* `pres` => `mean`
* `tsun` => `sum`

## Example

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
