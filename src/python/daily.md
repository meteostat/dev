---
title: Daily Data | Python Library
---

# Daily Data

Aggregated daily data is very useful when analyzing weather and climate over a longer period of time. The data provided through the `Daily` class contains only aggregated observations. Model data is not included in those statistics which makes the data very accurate, but causes some gaps in the time series.

## API

* [meteostat.Daily](api/daily/)
* [meteostat.Daily.normalize](api/daily/normalize)
* [meteostat.Daily.aggregate](api/daily/aggregate)
* [meteostat.Daily.interpolate](api/daily/interpolate)
* [meteostat.Daily.convert](api/daily/convert)
* [meteostat.Daily.coverage](api/daily/coverage)
* [meteostat.Daily.fetch](api/daily/fetch)
* [meteostat.Daily.count](api/daily/count)

## Data Structure

Each day is represented by a Pandas DataFrame row which provides the weather data recorded on that day. These are the different columns:

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
