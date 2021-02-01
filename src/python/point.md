---
title: Point Data | Python Library
---

# Point Data

While weather stations provide data that was measured at a specific location, point data is available for any geographic location. This interface reduces complexity for users as it does not require knowledge about the available weather stations. Instead, data can be retrieved directly.

Point data **only returns data if there is at least one nearby weather station** that reported observations in the desired period.

## Example

Using the `Point` class is pretty straight-forward.

```python
# Import Meteostat library
from meteostat import Point

# Create Point for Vancouver, BC
vancouver = Point(49.2497, -123.1193, 70)
```

## API

* [meteostat.Point](api/point/)

## Interpolation Methods

Point data provides more complete time series, as observations of multiple stations are joined together. The data output is being interpolated based on the geographical distance between the different weather stations and the reference point of the query. Additionally, Meteostat adjusts measurements based on difference in altitude.

Meteostat projects the existing observations which are provided by weather stations around the world onto the specified location. For more precise interpolation results, please provide the elevation of your location using the `alt` parameter.

### Weighted Average

By default, Meteostat uses weighted averages as its interpolation method. This method utilizes the geographical similarity of nearby weather stations and the provided point to weigh all available data and produce an aggregated output.

### Nearest Neighbor

Another common interpolation method is _nearest neighbor_ interpolation. This method simply takes the closest neighbor for each record and joins all data into a unified `DataFrame`.
