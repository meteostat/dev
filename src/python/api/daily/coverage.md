---
title: meteostat.Daily.coverage | API | Python Library
---

# meteostat.Daily.coverage

The `coverage` method provides information about the completeness of data. It can be used to determine the coverage of records or individual parameters.

## Parameters

You can specify an optional `parameter` to look for. This can be any [response parameter](/python/daily.html#response-parameters) of the `Daily` class (e.g. `tmax` for the maximum temperature).

| **Parameter** | **Description**                                      | **Type** | **Default** |
|:--------------|:-----------------------------------------------------|:---------|:------------|
| parameter     | Check coverage of a certain meteorological parameter | String   | None        |

## Returns

Integer between 0 (no records) and 1 (all records)

## Example

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
