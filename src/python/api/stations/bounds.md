---
title: meteostat.Stations.bounds | API | Python Library
---

# meteostat.Stations.bounds

Filter weather stations by rectangular geographical boundaries.

## Parameters

The method requires two latitude-longitude-pairs which specify the `top_left` and `bottom_right` corner of the bounding rectangle.

| **Parameter** | **Description**                           | **Type**      | **Default** |
|:--------------|:------------------------------------------|:--------------|:------------|
| top_left      | Top-left coordinates of the rectangle     | Tuple or List | undefined   |
| bottom_right  | Bottom-right coordinates of the rectangle | Tuple or List | undefined   |

## Returns

`Stations` class instance

## Example

Get number of stations in northern hemisphere.

```python{4}
from meteostat import Stations

stations = Stations()
stations = stations.bounds((90, -180), (0, 180))

print('Stations in northern hemisphere:', stations.count())
```
