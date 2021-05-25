---
title: meteostat.Normals.fetch | API | Python Library
---

# meteostat.Normals.fetch

You can access the resulting DataFrame of your query using the `fetch()` method.

## Parameters

This method does not take any parameters.

## Returns

Pandas `DataFrame`

## Example

Get climate normals for Atlanta International Airport.

```python{4}
from meteostat import Normals

data = Normals('72219')
data = data.fetch()

print(data)
```
