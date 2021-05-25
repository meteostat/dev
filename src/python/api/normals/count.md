---
title: meteostat.Normals.count | API | Python Library
---

# meteostat.Normals.count

The `count()` method returns the total number of records in the query result as an integer.

## Parameters

This method does not take any parameters.

## Returns

Integer

## Example

Get the total number of rows for Atlanta International Airport.

```python{4}
from meteostat import Normals

data = Normals('72219')
count = data.count()

print(count)
```
