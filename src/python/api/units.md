---
title: meteostat.units | API | Python Library
---

# meteostat.units

Meteostat provides several functions which convert the default metric data to a different unit.

## Functions

You can use these functions in a dictionary which is being passed to any of the `convert` methods.

| **Function** | **Description**                                                |
|:-------------|:---------------------------------------------------------------|
| fahrenheit   | Convert temperature data from Celsius to Fahrenheit            |
| kelvin       | Convert temperature data from Celsius to Kelvin                |
| inches       | Convert millimeters to inches                                  |
| feet         | Convert meters to feet                                         |
| ms           | Convert kilometers per hour to meters per second               |
| mph          | Convert kilometers per hour to miles per hour                  |
| direction    | Convert wind direction data from degrees to cardinal direction |
| condition    | Convert condition code to descriptive string                   |

## Dictionaries

If you want to convert all metric data in a DataFrame to imperial or scientific units, please refer to one of these dictionaries.

| **Function** | **Description**                   |
|:-------------|:----------------------------------|
| imperial     | Convert to imperial unit system   |
| scientific   | Convert to scientific unit system |

## Example

Please refer to the respective method documentation:

* [meteostat.Stations.convert](/python/api/stations/convert)
* [meteostat.Hourly.convert](/python/api/hourly/convert)
* [meteostat.Daily.convert](/python/api/daily/convert)
