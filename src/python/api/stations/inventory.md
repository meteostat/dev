---
title: meteostat.Stations.inventory | API | Python Library
---

# meteostat.Stations.inventory

Filter weather stations by data availability.

## Parameters

The `granularity` specifies whether you refer to daily or hourly data. The `required` parameter can be set to one of the following:

* `True` if you want to filter for weather stations which provided data at any time in the past
* Any **datetime** if you only want weather stations which provided data on a certain date
* A **tuple** or **list** which holds two **datetime** items that define a period of time

| **Parameter** | **Description**                                        | **Type**              | **Default** |
|:--------------|:-------------------------------------------------------|:----------------------|:------------|
| granularity   | The granularity, can be 'hourly' or 'daily'            | String                | undefined   |
| required      | Require general availability, a certain date or period | String, Tuple or List | undefined   |

## Returns

`Stations` class instance

## Example

Get closest weather station to Mannheim which did report daily data on January 1, 2020.

```python{6}
from datetime import datetime
from meteostat import Stations

stations = Stations()
stations = stations.nearby(49.4967, 8.4795)
stations = stations.inventory('daily', datetime(2020, 1, 1))
station = stations.fetch(1)

print(station)
```
