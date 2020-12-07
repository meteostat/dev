---
title: meteostat.Daily.aggregate | API | Python Library
---

# meteostat.Daily.aggregate

Aggregation is an important tool in data analysis. Meteostat allows both time-wise and spatial aggregation.

## Parameters

| **Parameter** | **Description**                            | **Type** | **Default** |
|:--------------|:-------------------------------------------|:---------|:------------|
| freq          | Group by the specified frequency           | String   | '1D'        |
| spatial       | Calculate averages across weather stations | Boolean  | False       |

## Returns

`Daily` class instance

### Aggregate Functions

Meteostat uses the following aggregate functions:

* `tavg` => `mean`
* `tmin` => `min`
* `tmax` => `max`
* `prcp` => `sum`
* `snow` => `mean`
* `wdir` => `mean`
* `wspd` => `mean`
* `wpgt` => `max`
* `pres` => `mean`
* `tsun` => `sum`

## Example

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
