---
title: Configuration | Python Library
---

# Configuration

The Meteostat Python library provides a few configuration parameters which you can modify on demand. If you want to change the configuration for one of the parameters, simply include it in your queries to the `Stations`, `Daily` or `Hourly` class.

## Cache Directory

The cache directory can be changed using the `cache_dir` parameter. By default, Meteostat caches its files in the `~/.meteostat/cache` directory.

## Maximum Age of Cached Files

By default, Meteostat uses the cached version of a file for 24 hours. You can adapt this setting by passing any count of seconds to the `max_age` parameter. If you want to disable caching, just set the `max_age` parameter to `0`.

## Maximum Number of Threads

Meteostat allows the usage multiple threads for parallel data downloads. The library utilizes a single thread by default. You can change this number by modifying the `max_threads` parameter.

## Clearing the Cache

If you want to remove outdated files from the cache, you can call the `clear_cache()` method on any Meteostat class instance. The method only removes files which belong to the class it is called from.

Take the following script as an example:

```python
from meteostat import Daily
from datetime import datetime

daily = Daily('10637', start = datetime(2018, 1, 1), end = datetime(2018, 12, 31))

daily.clear_cache(0)
```

Here, all daily data files will be removed from the cache.

By default, this method removes files which are older than `max_age`. You can change the `max_age` value in your call to the `clear_cache()` method.
