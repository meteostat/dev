---
title: meteostat.Stations.nearby | API | Python Library
---

# meteostat.Stations.nearby

Sort and filter weather stations by physical distance. This method adds a `distance` column to the returned `Stations` class instance which holds the distance of the respective weather station to the reference point in meters.

## Parameters

The `lat` and `lon` parameters are required. Optionally, you can specify a maximum radius in meters using the `radius` parameter.

| **Parameter** | **Description**                            | **Type**         | **Default** |
|:--------------|:-------------------------------------------|:-----------------|:------------|
| lat           | Latitude of a geographical point           | Integer or Float | undefined   |
| lon           | Longitude of a geographical point          | Integer or Float | undefined   |
| radius        | Radius in meters around geographical point | Integer          | None        |

## Returns

`Stations` class instance

## Example

Get closest weather station to Vancouver, BC.

```python{4}
from meteostat import Stations

stations = Stations()
stations = stations.nearby(49.2497, -123.1193)
station = stations.fetch(1)

print(station)
```
