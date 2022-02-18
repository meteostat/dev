---
title: meteostat.TimeSeries.coverage | API | Python
---

# meteostat.TimeSeries.coverage

The `coverage` method provides information about the completeness of data. It can be used to determine the coverage of records or individual parameters.

## Parameters

You can specify an optional `parameter` to look for (e.g. `prcp` for precipitation).

| **Parameter** | **Description**                                      | **Type** | **Default** |
| :------------ | :--------------------------------------------------- | :------- | :---------- |
| parameter     | Check coverage of a certain meteorological parameter | String   | `None`      |

## Returns

Integer between 0 (no records) and 1 (all records).

## Examples

### Hourly

Check completeness of records for Sydney Airport in 2018.

```python{8}
from datetime import datetime
from meteostat import Hourly

start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31, 23, 59)

data = Hourly('94767', start=start, end=end)
coverage = data.coverage()

print(coverage)
```

### Daily

Check completeness of records for Sydney Airport in 2019.

```python{8}
from datetime import datetime
from meteostat import Daily

start = datetime(2019, 1, 1)
end = datetime(2019, 12, 31)

data = Daily('94767', start=start, end=end)
coverage = data.coverage()

print(coverage)
```

### Monthly

Check completeness of records for Sydney Airport in 2019.

```python{8}
from datetime import datetime
from meteostat import Monthly

start = datetime(2019, 1, 1)
end = datetime(2019, 12, 31)

data = Monthly('94767', start, end)
coverage = data.coverage()

print(coverage)
```
