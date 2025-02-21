---
title: meteostat.Point | API | Python Library
---

# meteostat.Point

Automatically select weather stations by geographic location.

## Parameters

The `lat` and `lon` parameters are required. You should also specify the `alt` parameter for better results.

| **Parameter** | **Description** | **Type** | **Default** | **Unit**        |
|---------------|-----------------|----------|-------------|-----------------|
| lat           | The latitude    | Float    | undefined   | Decimal degrees |
| lon           | The longitude   | Float    | undefined   | Decimal degrees |
| alt           | The altitude    | Integer  | None        | Meters          |

## Attributes

Attributes allow the configuration of general settings and behaviour.

| **Parameter** | **Description**                                                                                                              | **Type** | **Default** |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------|:---------|:------------|
| method        | The interpolation method ([weighted](/python/point.html#weighted-average) or [nearest](/python/point.html#nearest-neighbor)) | String   | nearest     |
| radius        | Maximum radius for nearby stations in meters                                                                                 | Integer  | 35000       |
| alt_range     | Maximum difference in altitude meters                                                                                        | Integer  | 350         |
| max_count     | Maximum number of stations used for interpolation                                                                            | Integer  | 4           |
| adapt_temp    | Adapt temperature data based on altitude                                                                                     | Boolean  | `True`      |
| weight_dist   | The weight of the 2D distance                                                                                                | Float    | 0.6         |
| weight_alt    | The weight of the difference in altitude                                                                                     | Float    | 0.4         |
