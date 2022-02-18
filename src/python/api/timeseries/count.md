---
title: meteostat.TimeSeries.count | API | Python
---

# meteostat.TimeSeries.count

The `count()` method returns the total number of records in the query result as an integer.

## Parameters

This method does not take any parameters.

## Returns

Integer

## Examples

### Hourly

Get the total number of records ever recorded at Atlanta International Airport.

```python{6}
from meteostat import Hourly

Hourly.chunked = False

data = Hourly('72219')
count = data.count()

print(count)
```

### Daily

Get the total number of records ever recorded at Atlanta International Airport.

```python{4}
from meteostat import Daily

data = Daily('72219')
count = data.count()

print(count)
```

### Monthly

Get the total number of records ever recorded at Atlanta International Airport.

```python{4}
from meteostat import Monthly

data = Monthly('72219')
count = data.count()

print(count)
```
