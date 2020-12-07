---
title: meteostat.Stations.identifier | API | Python Library
---

# meteostat.Stations.identifier

Filter weather stations by one or multiple identifiers. The method supports Meteostat, WMO and ICAO identifiers.

## Parameters

Both parameters are required. The weather station `code` can be a single ID or a tuple/list of identifiers.

| **Parameter** | **Description**                      | **Type**              | **Default** |
|:--------------|:-------------------------------------|:----------------------|:------------|
| organization  | The organization which issued the ID | String                | undefined   |
| code          | The identifier                       | String, Tuple or List | undefined   |

## Returns

`Stations` class instance

## Example

Get weather station at Frankfurt Airport by ICAO ID.

```python{4}
from meteostat import Stations

stations = Stations()
station = stations.id('icao', 'EDDF').fetch()

print(station)
```
