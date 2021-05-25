---
title: meteostat.Monthly.fetch | API | Python Library
---

# meteostat.Monthly.fetch

You can access the resulting `DataFrame` of your query using the `fetch()` method.

## Parameters

This method does not take any parameters.

## Returns

Pandas `DataFrame`

## Example

Get all data ever recorded at Atlanta International Airport.

```python{4}
from meteostat import Monthly

data = Monthly('72219')
data = data.fetch()

print(data)
```
