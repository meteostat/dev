---
title: meteostat.Hourly.fetch | API | Python Library
---

# meteostat.Hourly.fetch

You can access the resulting DataFrame of your query using the `fetch()` method.

## Parameters

This method does not take any parameters.

## Returns

Pandas DataFrame

## Example

Get all data ever recorded at Atlanta International Airport.

```python{6}
from meteostat import Hourly

Hourly.chunked = False

data = Hourly('72219')
data = data.fetch()

print(data)
```
