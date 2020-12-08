---
title: meteostat.Stations.fetch | API | Python Library
---

# meteostat.Stations.fetch

After you have specified a query through the `Stations` class you can now access the result using the `fetch()` method.

## Parameters

The method takes an optional `limit` argument. If no `limit` is specified, Meteostat will return all weather stations which meet the criteria. The weather stations are returned as a Pandas DataFrame.

If you want to select a random subset of weather stations, just pass `sample=True` combined with any `limit` to the `fetch()` method. Sampling is useful for performing analysis of larger areas on a sample set of weather stations which represent the whole area.

| **Parameter** | **Description**                                                 | **Type** | **Default** |
|:--------------|:----------------------------------------------------------------|:---------|:------------|
| limit         | The maximum number of weather stations which should be returned | Integer  | None        |
| sample        | Randomize the order of weather stations                         | Boolean  | False       |

## Returns

Pandas DataFrame

## Example

Fetch a sampled subset of weather stations in the US.

```python{5}
from meteostat import Stations

stations = Stations()
stations = stations.region('US')
stations = stations.fetch(10, sample=True)

print(stations)
```
