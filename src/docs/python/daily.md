---
title: Daily Data | Python Library
---

# Daily Data

Aggregated daily data is very useful when analyzing weather and climate over a longer period of time. The data provided through the `Daily` class contains only aggregated observations. Model data is not included in those statistics which makes the data very accurate, but causes some gaps in the time series.

## Data Access
The `Daily` class takes a mandatory `stations` parameter which can either be supplied with a fetched query to the `Stations` class or a list of Meteostat weather station identifiers. Furthermore, you can pass a `start` and `end` datetime to limit your query to a certain time range. Let's have a look at this example:

```python
# Import requirements
from meteostat import Stations, Daily
from datetime import datetime
import matplotlib.pyplot as plt

# Get closest weather station to Vancouver, BC
stations = Stations(lat = 49.2497, lon = -123.1193)
station = stations.fetch(1)

# Get daily data for 2018 at the selected weather station
data = Daily(station, start = datetime(2018, 1, 1), end = datetime(2018, 12, 31))
data = data.fetch()

# Plot line chart including average, minimum and maximum temperature
data.plot(x = 'time', y = ['tavg', 'tmin', 'tmax'], kind = 'line')
plt.show()
```

The `fetch()` method returns a Pandas DataFrame with multiple meteorological columns.

## Response Parameters
The DataFrame provides the following columns:

* `station`: The Meteostat ID of the weather station
* `time`: The date
* `tavg`: The average air temperature in _°C_
* `tmin`: The minimum air temperature in _°C_
* `tmax`: The maximum air temperature in _°C_
* `prcp`: The daily precipitation total in _mm_
* `snow`: The snow depth in _mm_
* `wdir`: The average wind direction in degrees (_°_)
* `wspd`: The average wind speed in _km/h_
* `wpgt`: The peak wind gust in _km/h_
* `pres`: The average sea-level air pressure in _hPa_
* `tsun`: The daily sunshine total in minutes (_m_)

## Normalization
Meteostat essentially skips gaps in its time series. Therefore, the raw response does not necessarily contain one row per day. You can make sure gaps are filled with `nan` values by applying the `normalize()` method. Our example from above could easily be normalized by making a small change:

```python
# Get daily data for 2018 at the selected weather station
data = Daily(station, start = datetime(2018, 1, 1), end = datetime(2018, 12, 31))
# Normalize and fetch
data = data.normalize().fetch()
```

## Interpolation
Normalizing your data paves the way for interpolation. The `interpolate()` method closes gaps in your time series using linear regression. It takes a `limit` parameter which specifies the maximum number of consecutive `nan` values. The default value of `3` means that up to three consecutive missing days are interpolated. Again, we can simply adapt our existing example:

```python
# Get daily data for 2018 at the selected weather station
data = Daily(station, start = datetime(2018, 1, 1), end = datetime(2018, 12, 31))
# Normalize, interpolate and fetch
data = data.normalize().interpolate(limit = 1).fetch()
```

## Aggregation
Aggregation is another important tool in data science. Meteostat provides an `aggregate()` method for time-wise and spatial aggregation. It takes a `freq` parameter which specifies the frequency of our aggregation. Optionally, you can overwrite the default aggregation functions by passing a dictionary to the `functions` parameter. If you want to apply aggregation across all weather stations in your result, just set the `spatial` parameter to `True`.

Let's dig into the [sampled](https://github.com/meteostat/meteostat-python/wiki/Weather-Stations#sample) US average temperatures for the past 40 years as an example:

```python
# Import requirements
from meteostat import Stations, Daily
from datetime import datetime
import matplotlib.pyplot as plt

# Get 50 random weather stations in the US which generally provide daily data
stations = Stations(country = 'US', daily = datetime(2005, 1, 1)).sample(50).fetch()

# Get daily data for all weather stations
data = Daily(stations, start = datetime(1980, 1, 1), end = datetime(2019, 12, 31))

# Normalize and aggregate the statistics annually across all weather stations
data = data.normalize().aggregate(freq = '1Y', spatial = True).fetch()

# Plot a chart of the average temperature
data.plot(y = ['tavg'], kind = 'line', title = 'Average US Annual Temperature from 1980 to 2019')
plt.show()
```

### Default Aggregation Functions
By default, Meteostat uses the following aggregation functions:

* `time` => `first`
* `tavg` => `mean`
* `tmin` => `min`
* `tmax` => `max`
* `prcp` => `sum`
* `snow` => `mean`
* `wdir` => `mean`
* `wspd` => `mean`
* `wpgt` => `max`
* `pres` => `mean`
* `tsun` => `sum`

You can overwrite the defaults by passing a dictionary to the `functions` parameter.

## Data Coverage
The `coverage()` method returns a float value which describes the completeness of a DataFrame or series. A value of `1` (= 100%) means that the dataset is complete. The method takes an optional `parameter` attribute. If present, the method returns the coverage for that particular parameter instead of the whole DataFrame.

## Fetch
The `fetch()` method returns a Pandas DataFrame.
