---
title: meteostat.Stations.count | API | Python Library
---

# meteostat.Stations.count

The `count()` method returns the total number of weather stations in the query result as an integer.

## Parameters

This method does not take any parameters.

## Returns

Integer

## Example

Get the number of weather stations in Germany.

```python{6}
from meteostat import Stations

stations = Stations()
stations = stations.region('DE')

print('Stations in Germany:', stations.count())
```
