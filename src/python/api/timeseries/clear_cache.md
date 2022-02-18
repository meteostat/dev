---
title: meteostat.TimeSeries.clear_cache | API | Python
---

# meteostat.TimeSeries.clear_cache

This method cleans up the local cache by removing files which are older than `self.max_age`. The method is automatically called when initializing a new instance of a `TimeSeries`-based class.

**Important:** This method does only affect files cached in the context of the class it is called on. For example, `Daily.clear_cache()` will only remove stale files from the `Daily` cache.

## Parameters

If you want to overwrite the default maximum age, just pass any number of seconds using the `max_age` parameter.

| **Parameter** | **Description**                  | **Type** | **Default**              |
| :------------ | :------------------------------- | :------- | :----------------------- |
| max_age       | Maximum age of a file in seconds | Integer  | `meteostat.Base.max_age` |

## Returns

`None`

## Examples

### Hourly

Remove stale files from the local `Hourly` cache.

```python{3}
from meteostat import Hourly

Hourly.clear_cache()
```

### Daily

Remove stale files from the local `Daily` cache.

```python{3}
from meteostat import Daily

Daily.clear_cache()
```

### Monthly

Remove stale files from the local `Monthly` cache.

```python{3}
from meteostat import Monthly

Monthly.clear_cache()
```
