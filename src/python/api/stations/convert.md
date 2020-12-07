---
title: meteostat.Stations.convert | API | Python Library
---

# meteostat.Stations.convert

Convert specific attributes to a different unit.

## Parameters

The `units` parameter takes a dictionary which specifies column-unit pairs.

| **Parameter** | **Description**                                    | **Type**   | **Default** |
|:--------------|:---------------------------------------------------|:-----------|:------------|
| units         | Dictionary which maps attributes to a certain unit | Dictionary | `undefined` |

## Returns

`Stations` class instance

## Example

Get closest weather stations to Seattle, WA and convert distance to miles.

```python{5}
from meteostat import Stations, units

stations = Stations()
stations = stations.nearby(47.6062, -122.3321)
stations = stations.convert({ 'distance': units.feet })
stations = stations.fetch(10)

print(stations)
```
