---
title: Weather Stations | Python Library
---

# Weather Stations

In contrast to other meteorological data interfaces Meteostat does not use a global data model. Instead, Meteostat provides weather observations and long-term climate statistics for individual weather stations. Understandably, no one knows the identifiers of each and every weather station. Therefore, Meteostat provides the `Stations` class - a simple interface for querying weather stations using several filters.

## API

* [meteostat.Stations](api/stations/)
* [meteostat.Stations.nearby](api/stations/nearby)
* [meteostat.Stations.bounds](api/stations/bounds)
* [meteostat.Stations.region](api/stations/region)
* [meteostat.Stations.id](api/stations/id)
* [meteostat.Stations.inventory](api/stations/inventory)
* [meteostat.Stations.convert](api/stations/convert)
* [meteostat.Stations.fetch](api/stations/fetch)
* [meteostat.Stations.count](api/stations/count)

## Data Structure

Each weather station is represented by a Pandas DataFrame row which provides meta information about the station. These are the different columns:

| **Column**   | **Description**                                                | **Type**   |
|:-------------|:---------------------------------------------------------------|:-----------|
| id           | The Meteostat ID of the weather station                        | String     |
| name         | The English name of the weather station                        | Object     |
| country      | The ISO 3166-1 alpha-2 country code of the weather station     | String     |
| state        | The ISO 3166-2 state or region code of the weather station     | String     |
| wmo          | The WMO ID of the weather station                              | String     |
| icao         | The ICAO ID of the weather station                             | String     |
| latitude     | The latitude of the weather station                            | Float64    |
| longitude    | The longitude of the weather station                           | Float64    |
| elevation    | The elevation of the weather station in meters above sea level | Float64    |
| timezone     | The time zone of the weather station                           | String     |
| hourly_start | The first day on record for hourly data                        | Datetime64 |
| hourly_end   | The last day on record for hourly data                         | Datetime64 |
| daily_start  | The first day on record for daily data                         | Datetime64 |
| daily_end    | The last day on record for daily data                          | Datetime64 |
