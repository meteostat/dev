---
title: meteostat.Hourly.clear_cache | API | Python Library
---

# meteostat.Hourly.clear_cache

This method cleans up the local `Hourly` cache by removing files which are older than `meteostat.Hourly.max_age`. The method is automatically called when initializing a new instance of the class.

**Important:** This method does only affect files cached in the context of the `Hourly` class.

## Parameters

If you want to overwrite the default maximum age, just pass any number of seconds using the `max_age` parameter.

| **Parameter** | **Description**                  | **Type** | **Default**              |
|:--------------|:---------------------------------|:---------|:-------------------------|
| max_age       | Maximum age of a file in seconds | Integer  | meteostat.Hourly.max_age |

## Returns

`None`

## Example

Remove stale files from the local `Hourly` cache.

```python{3}
from meteostat import Hourly

Hourly.clear_cache()
```
