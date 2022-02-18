---
title: meteostat.TimeSeries.fetch | API | Python
---

# meteostat.TimeSeries.fetch

You can access the resulting DataFrame of your query using the `fetch()` method.

## Parameters

This method does not take any parameters.

## Returns

Pandas `DataFrame`

## Examples

### Hourly

Get all data ever recorded at Atlanta International Airport.

```python{6}
from meteostat import Hourly

Hourly.chunked = False

data = Hourly('72219')
data = data.fetch()

print(data)
```

### Daily

Get all data ever recorded at Atlanta International Airport.

```python{4}
from meteostat import Daily

data = Daily('72219')
data = data.fetch()

print(data)
```

### Monthly

Get all data ever recorded at Atlanta International Airport.

```python{4}
from meteostat import Monthly

data = Monthly('72219')
data = data.fetch()

print(data)
```
