---
title: meteostat.Stations.region | API | Python Library
---

# meteostat.Stations.region

Filter weather stations by country and state/region codes.

## Parameters

The method requires a `country` code and takes an optional `region` parameter.

| **Parameter** | **Description**                 | **Type** | **Default** |
|:--------------|:--------------------------------|:---------|:------------|
| country       | ISO 3166-1 alpha-2 country code | String   | undefined   |
| state         | ISO 3166-2 state or region code | String   | None        |

## Returns

`Stations` class instance

## Example

Get number of weather station in Ontario, Canada.

```python{4}
from meteostat import Stations

stations = Stations()
stations = stations.region('CA', 'ON')

print('Stations in Ontario:', stations.count())
```
