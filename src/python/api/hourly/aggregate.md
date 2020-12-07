---
title: meteostat.Hourly.aggregate | API | Python Library
---

# meteostat.Hourly.aggregate

Aggregation is an important tool in data analysis. Meteostat allows both time-wise and spatial aggregation.

## Parameters

| **Parameter** | **Description**                            | **Type** | **Default** |
|:--------------|:-------------------------------------------|:---------|:------------|
| freq          | Group by the specified frequency           | String   | '1H'        |
| spatial       | Calculate averages across weather stations | Boolean  | False       |

## Returns

`Hourly` class instance

### Aggregate Functions

Meteostat uses the following aggregate functions:

* `temp` => `mean`
* `dwpt` => `mean`
* `rhum` => `mean`
* `prcp` => `sum`
* `snow` => `mean`
* `wdir` => `mean`
* `wspd` => `mean`
* `wpgt` => `max`
* `pres` => `mean`
* `tsun` => `sum`
* `coco` => `max`

## Example

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
