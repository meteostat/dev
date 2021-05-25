---
title: meteostat.Monthly.coverage | API | Python Library
---

# meteostat.Monthly.coverage

The `coverage` method provides information about the completeness of data. It can be used to determine the coverage of records or individual parameters.

## Parameters

You can specify an optional `parameter` to look for. This can be any [response parameter](/python/monthly.html#data-structure) of the `Monthly` class (e.g. `tmax` for the maximum temperature).

| **Parameter** | **Description**                                      | **Type** | **Default** |
|:--------------|:-----------------------------------------------------|:---------|:------------|
| parameter     | Check coverage of a certain meteorological parameter | String   | None        |

## Returns

Integer between 0 (no records) and 1 (all records)

## Example

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
