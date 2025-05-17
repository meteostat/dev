---
title: Hourly Data | Python Library
---

# Hourly Data

If you want to investigate the weather on a particular day or a short period of time, the `Hourly` class is a perfect match. It may include model data to fill gaps in the observations.

## Example

You can use the `Hourly` class to retrieve historical data and prepare the records for further processing. For more complex analysis and visulization tasks you can utilize Pandas.

```python
# Import Meteostat library and dependencies
from datetime import datetime
from meteostat import Hourly

# Set time period
start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31, 23, 59)

# Get hourly data
data = Hourly('72219', start, end)
data = data.fetch()

# Print DataFrame
print(data)
```

## API

**Parent Class:** [meteostat.TimeSeries](/python/api/timeseries/)

* [meteostat.Hourly](api/hourly/)
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

Each hour is represented by a Pandas `DataFrame` row which provides the weather data recorded at that time. These are the different columns:

| **Column** | **Description**                                                                     | **Type**   |
|:-----------|:------------------------------------------------------------------------------------|:-----------|
| station    | The Meteostat ID of the weather station (only if query refers to multiple stations) | String     |
| time       | The datetime of the observation                                                     | Datetime64 |
| temp       | The air temperature in _°C_                                                         | Float64    |
| dwpt       | The dew point in _°C_                                                               | Float64    |
| rhum       | The relative humidity in percent (_%_)                                              | Float64    |
| prcp       | The one hour precipitation total in _mm_                                            | Float64    |
| snow       | The snow depth in _mm_                                                              | Float64    |
| wdir       | The average wind direction in degrees (_°_)                                         | Float64    |
| wspd       | The average wind speed in _km/h_                                                    | Float64    |
| wpgt       | The peak wind gust in _km/h_                                                        | Float64    |
| pres       | The average sea-level air pressure in _hPa_                                         | Float64    |
| tsun       | The one hour sunshine total in minutes (_m_)                                        | Float64    |
| coco       | The [weather condition code](/formats.html#weather-condition-codes)                 | Float64    |
