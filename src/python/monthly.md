---
title: Monthly Data | Python Library
---

# Monthly Data

Aggregated monthly data is very useful when analyzing weather and climate over a longer period of time. It may include model data to fill gaps in the observations.

## Example

You can use the `Monthly` class to retrieve historical data and prepare the records for further processing. For more complex analysis and visulization tasks you can utilize Pandas.

```python
# Import Meteostat library and dependencies
from datetime import datetime
import matplotlib.pyplot as plt
from meteostat import Stations, Monthly

# Set time period
start = datetime(2000, 1, 1)
end = datetime(2018, 12, 31)

# Get Monthly data
data = Monthly('10637', start, end)
data = data.fetch()

# Plot line chart including average, minimum and maximum temperature
data.plot(y=['tavg', 'tmin', 'tmax'])
plt.show()
```

## API

* [meteostat.Monthly](api/monthly/)
* [meteostat.Monthly.normalize](api/monthly/normalize)
* [meteostat.Monthly.aggregate](api/monthly/aggregate)
* [meteostat.Monthly.interpolate](api/monthly/interpolate)
* [meteostat.Monthly.convert](api/monthly/convert)
* [meteostat.Monthly.coverage](api/monthly/coverage)
* [meteostat.Monthly.fetch](api/monthly/fetch)
* [meteostat.Monthly.count](api/monthly/count)

## Data Structure

Each month is represented by a Pandas `DataFrame` row which provides the weather data recorded during that month. These are the different columns:

| **Column** | **Description**                                                                     | **Type**   |
|:-----------|:------------------------------------------------------------------------------------|:-----------|
| station    | The Meteostat ID of the weather station (only if query refers to multiple stations) | String     |
| time       | The month, represented as a date                                                    | Datetime64 |
| tavg       | The average air temperature in _°C_                                                 | Float64    |
| tmin       | The minimum air temperature in _°C_                                                 | Float64    |
| tmax       | The maximum air temperature in _°C_                                                 | Float64    |
| prcp       | The monthly precipitation total in _mm_                                             | Float64    |
| snow       | The maximum snow depth in _mm_                                                      | Float64    |
| wdir       | The average wind direction in degrees (_°_)                                         | Float64    |
| wspd       | The average wind speed in _km/h_                                                    | Float64    |
| wpgt       | The peak wind gust in _km/h_                                                        | Float64    |
| pres       | The average sea-level air pressure in _hPa_                                         | Float64    |
| tsun       | The monthly sunshine total in minutes (_m_)                                         | Float64    |
