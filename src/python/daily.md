---
title: Daily Data | Python Library
---

# Daily Data

Aggregated daily data is very useful when analyzing weather and climate over medium to long periods of time. It may include model data to fill gaps in the observations.

## Example

You can use the `Daily` class to retrieve historical data and prepare the records for further processing. For more complex analysis and visulization tasks you can utilize Pandas.

```python
# Import Meteostat library and dependencies
from datetime import datetime
import matplotlib.pyplot as plt
from meteostat import Stations, Daily

# Set time period
start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31)

# Get daily data
data = Daily('10637', start, end)
data = data.fetch()

# Plot line chart including average, minimum and maximum temperature
data.plot(y=['tavg', 'tmin', 'tmax'])
plt.show()
```

## API

**Parent Class:** [meteostat.TimeSeries](/python/api/timeseries/)

* [meteostat.Daily](api/daily/)
* [meteostat.TimeSeries.normalize](api/timeseries/normalize)
* [meteostat.TimeSeries.aggregate](api/timeseries/aggregate)
* [meteostat.TimeSeries.interpolate](api/timeseries/interpolate)
* [meteostat.TimeSeries.convert](api/timeseries/convert)
* [meteostat.TimeSeries.coverage](api/timeseries/coverage)
* [meteostat.TimeSeries.fetch](api/timeseries/fetch)
* [meteostat.TimeSeries.count](api/timeseries/count)
* [meteostat.TimeSeries.stations](api/timeseries/stations)
* [meteostat.TimeSeries.clear_cache](api/timeseries/clear_cache)

## Data Structure

Each day is represented by a Pandas `DataFrame` row which provides the weather data recorded on that day. These are the different columns:

| **Column** | **Description**                                                                     | **Type**   |
|:-----------|:------------------------------------------------------------------------------------|:-----------|
| station    | The Meteostat ID of the weather station (only if query refers to multiple stations) | String     |
| time       | The date                                                                            | Datetime64 |
| tavg       | The average air temperature in _°C_                                                 | Float64    |
| tmin       | The minimum air temperature in _°C_                                                 | Float64    |
| tmax       | The maximum air temperature in _°C_                                                 | Float64    |
| prcp       | The daily precipitation total in _mm_                                               | Float64    |
| snow       | The snow depth in _mm_                                                              | Float64    |
| wdir       | The average wind direction in degrees (_°_)                                         | Float64    |
| wspd       | The average wind speed in _km/h_                                                    | Float64    |
| wpgt       | The peak wind gust in _km/h_                                                        | Float64    |
| pres       | The average sea-level air pressure in _hPa_                                         | Float64    |
| tsun       | The daily sunshine total in minutes (_m_)                                           | Float64    |
