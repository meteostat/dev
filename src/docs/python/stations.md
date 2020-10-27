---
title: Weather Stations | Python Library
---

# Weather Stations

In contrast to other meteorological data interfaces Meteostat does not use a global data model. Instead, Meteostat provides weather observations and long-term climate statistics for individual weather stations. Understandably, no one knows the identifiers of each and every weather station. Therefore, Meteostat provides a simple interface for querying weather stations using several filters.

## Selecting Weather Stations
Weather stations are selected through the `Stations` class. Optionally, filters can be specified using constructor arguments.

### Physical Distance
In most cases you will probably want to select a weather station which is located closest to a certain geo location. Doing so is pretty straight-forward:

```python
# Import Stations class from Meteostat package
from meteostat import Stations

# Filter by physical distance
stations = Stations(lat = 50, lon = 8)

# Select one weather station and translate to Python dictionary
station = stations.fetch(limit = 1).to_dict('records')[0]

# Print English name of weather station
print(station['name'])
```

`lat` and `lon` are used for specifying latitude and longitude, respectively. Keep in mind that the `fetch()` method **returns a Pandas DataFrame**. In most cases it makes sense to specify a `limit` when fetching weather stations.

### Country & State
Especially when calculating regional averages it makes sense to filter for administrative regions. Meteostat provides `country` (_ISO 3166-1 alpha-2_ code) and `region` (_ISO-3166-2_ code) filters. Let's pretend you want the total number of weather stations in Ontario, Canada:

```python
# Import Stations class from Meteostat package
from meteostat import Stations

# Filter by country and region
stations = Stations(country = 'CA', region = 'ON')

# Print number of stations in Ontario
print('Stations in Ontario: ' + stations.count())
```

### Bounding Box
Some cases may require the selection of all weather stations in a geographic bounding box using the `bounds` argument:

```python
# Import Stations class from Meteostat package
from meteostat import Stations

# Get number of stations in southern hemisphere
stations = Stations(bounds = [0, -180, -90, 180])

# Print number of stations in southern hemisphere
print('Stations in southern hemisphere: ' + stations.count())
```

The `bounds` filter requires a list of four numbers in the following order:
* The top left latitude
* The top left longitude
* The bottom right latitude
* The bottom right longitude

### Identifier
If you already know the Meteostat, WMO or ICAO ID of a weather station, you can query corresponding meta data directly:

```python
# Import Stations class from Meteostat package
from meteostat import Stations

# Get number of stations in southern hemisphere
stations = Stations(id = '10637')

# Fetch weather station and translate to Python dictionary
station = stations.fetch().to_dict('records')[0]

# Print English name of weather station 10637
print(station['name'])
```

Alternatively, you can also pass a list of identifiers to the `id`, `wmo` and `icao` parameter.

## Filter by Data Inventory
In most cases a `Stations` query is followed by either a call to the `Daily` or `Hourly` class. In this case you will probably want to check first if the weather station(s) you are selecting did report any data in the time you are looking for. You can do so by passing a `daily` or `hourly` attribute to the `Stations` class that specifies a `datetime` which has to be present in the data inventory.

**Important:** The inventory is based on a start and end date for both daily and hourly data. There are most certainly gaps in the time series which won't be considered by the inventory filters.

Let's take the physical distance example and apply a daily inventory filter:

```python
# Import dependencies
from meteostat import Stations
from datetime import datetime

# Filter by physical distance and daily data inventory
stations = Stations(lat = 50, lon = 8, daily = datetime(2018, 1, 1))

# Select one weather station and translate to Python dictionary
station = stations.fetch(limit = 1).to_dict('records')[0]

# Print English name of weather station
print(station['name'])
```

## Fetching Weather Stations
Meteostat provides multiple methods for fetching weather stations. After you have specified a query through the `Stations` class you can now either fetch a list of all stations in the result or get the total.

### Fetch
After you have specified a query through the `Stations` class you can now access the result using the `fetch()` method. It takes an optional `limit` argument. If no `limit` is specified, Meteostat will return all weather stations which meet the criteria. The weather stations are returned as a Pandas DataFrame.

### Sample
Similarly to `fetch()`, the `sample()` method returns a Pandas DataFrame of all weather stations in the query result. However, the default `limit` is set to `1`. The method returns weather stations in random order. It is useful for performing analysis of larger areas on a sample set of weather stations which represent the whole area.

### Count
The `count()` method returns the total number of weather stations in the query result as an integer.

## Data Structure
Each weather station is represented by a Pandas DataFrame row which provides meta information about the station. These are the different columns:

* `id`: The Meteostat ID of the weather station
* `name`: The English name of the weather station
* `country`: The ISO 3166-1 alpha-2 country code of the weather station
* `region`: The ISO 3166-2 state or region code of the weather station
* `wmo`: The WMO ID of the weather station
* `icao`: The ICAO ID of the weather station
* `iata`: The IATA ID of the weather station
* `latitude`: The latitude of the weather station
* `longitude`: The longitude of the weather station
* `elevation`: The elevation of the weather station in meters above sea level
* `timezone`: The time zone of the weather station
* `hourly_start`: The first day on record for hourly data
* `hourly_end`: The last day on record for hourly data
* `daily_start`: The first day on record for daily data
* `daily_end`: The last day on record for daily data
