---
title: meteostat.Hourly.count | API | Python Library
---

# meteostat.Hourly.count

The `count()` method returns the total number of records in the query result as an integer.

## Parameters

This method does not take any parameters.

## Returns

Integer

## Example

Get the total number of records ever recorded at Atlanta International Airport.

```python{6}
from meteostat import Hourly

Hourly.chunked = False

data = Hourly('72219')
count = data.count()

print(count)
```
