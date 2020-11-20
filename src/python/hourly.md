---
title: Hourly Data | Python Library
---

# Hourly Data

If you want to investigate the weather on a particular day or a short period of time, the `Hourly` class is a perfect match. It may include [MOSMIX](https://www.dwd.de/EN/ourservices/met_application_mosmix/met_application_mosmix.html) model data to fill gaps in the observations.

## Data Access

The `Hourly` class takes a mandatory `stations` parameter which can be supplied with a fetched query to the `Stations` class, a list of Meteostat weather station identifiers or a single identifier. Furthermore, you can pass a `start` and `end` _datetime_ to limit your query to a certain time range.

Let's have a look at this example:

```python
# Import requirements
from meteostat import Stations, Hourly
from datetime import datetime

# Get closest weather station to random coordinates
stations = Stations(lat = 50, lon = 8)
station = stations.fetch(1)

# Fetch hourly data for one day
data = Hourly(station, start = datetime(2020, 1, 1), end = datetime(2020, 1, 1, 23, 59))

# Print response DataFrame
print(data.fetch())
```

The `fetch()` method returns a Pandas DataFrame with multiple meteorological columns. If your query refers to a single weather station, the DataFrame has an index on the `time` column. Otherwise, the response DataFrame has a multi index on the `time` and `station` columns.

## Response Parameters

The DataFrame provides the following columns:

* `station`: The Meteostat ID of the weather station (only if your query refers to multiple stations)
* `time`: The datetime of the observation
* `temp`: The air temperature in _°C_
* `dwpt`: The dew point in _°C_
* `rhum`: The relative humidity in percent (_%_)
* `prcp`: The one hour precipitation total in _mm_
* `snow`: The snow depth in _mm_
* `wdir`: The average wind direction in degrees (_°_)
* `wspd`: The average wind speed in _km/h_
* `wpgt`: The peak wind gust in _km/h_
* `pres`: The average sea-level air pressure in _hPa_
* `tsun`: The one hour sunshine total in minutes (_m_)
* `coco`: The [weather condition code](/docs/formats.html#weather-condition-codes)

## Normalization

Meteostat essentially skips gaps in its time series. Therefore, the raw response does not necessarily contain one row per hour. You can make sure gaps are filled with `nan` values by applying the `normalize()` method. Our example from above could easily be normalized by making a small change:

```python
# Fetch hourly data for one day
data = Hourly(station, start = datetime(2020, 1, 1), end = datetime(2020, 1, 1, 23, 59))
# Normalize
data = data.normalize()
```

## Interpolation

Normalizing your data paves the way for interpolation. The `interpolate()` method closes gaps in your time series using linear regression. It takes a `limit` parameter which specifies the maximum number of consecutive `nan` values. The default value of `3` means that up to three consecutive missing hours are interpolated. Again, we can simply adapt our existing example:

```python
# Fetch hourly data for one day
data = Hourly(station, start = datetime(2020, 1, 1), end = datetime(2020, 1, 1, 23, 59))
# Normalize and interpolate up to three hours
data = data.normalize().interpolate(limit = 3)
```

## Aggregation

Aggregation is another important tool in data science. Meteostat provides an `aggregate()` method for time-wise and spatial aggregation. It takes a `freq` parameter which specifies the frequency of our aggregation. Optionally, you can overwrite the default aggregation functions by passing a dictionary to the `functions` parameter. If you want to apply aggregation across all weather stations in your result, just set the `spatial` parameter to `True`.

Let's calculate the summary of a particular day at Frankfurt Airport as an example:

```python
# Import dependencies
from meteostat import Stations, Hourly
from datetime import datetime

# Get weather station 'Frankfurt Airport' by WMO ID
stations = Stations(wmo = '10637')
station = stations.fetch(1)

# Get hourly data for January 1, 2020
data = Hourly(station, start = datetime(2020, 1, 1), end = datetime(2020, 1, 1, 23, 59))
data = data.aggregate(freq = '1D')

# Print summary
print(data.fetch())
```

### Default Aggregation Functions

By default, Meteostat uses the following aggregation functions:

* `time` => `first`
* `temp` => `mean`
* `dwpt` => `mean`
* `rhum` => `mean`
* `prcp` => `sum`
* `snow` => `mean`
* `wdir` => `mean`
* `wspd` => `mean`
* `wpgt` => `max`
* `pres` => `mean`
* `tsun` => `sum`
* `coco` => `max`

You can overwrite the defaults by passing a dictionary to the `functions` parameter.

## Data Coverage

The `coverage()` method returns a float value which describes the completeness of a DataFrame or series. A value of `1` (= 100%) means that the dataset is complete. The method takes an optional `parameter` attribute. If present, the method returns the coverage for that particular parameter instead of the whole DataFrame.

## Fetch

The `fetch()` method returns a Pandas DataFrame. If your query refers to a single weather station, the DataFrame has an index on the `time` column. Otherwise, the response DataFrame has a multi index on the `time` and `station` columns.
