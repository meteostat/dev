---
title: Normals Data | Python Library
---

# Normals Data

Climate normals provide an overview of the typical weather at a given location. Normals are usually calculated over a period of 30 years. You can also use a custom range of years, though.

## Example

You can use the `Normals` class to retrieve mean data and prepare the records for further processing. For more complex analysis and visulization tasks you can utilize Pandas.

```python
# Import Meteostat library and dependencies
from datetime import datetime
import matplotlib.pyplot as plt
from meteostat import Normals

# Get Normals data
data = Normals('10637', 1961, 1990)
data = data.fetch()

# Plot line chart including average, minimum and maximum temperature
data.plot(y=['tavg', 'tmin', 'tmax'])
plt.show()
```

## API

* [meteostat.Normals](api/normals/)
* [meteostat.Normals.convert](api/normals/convert)
* [meteostat.Normals.coverage](api/normals/coverage)
* [meteostat.Normals.fetch](api/normals/fetch)
* [meteostat.Normals.count](api/normals/count)

## Data Structure

Each month is represented by a Pandas `DataFrame` row which provides the average weather data recorded during that month. These are the different columns:

| **Column** | **Description**                                                                     | **Type** |
|:-----------|:------------------------------------------------------------------------------------|:---------|
| station    | The Meteostat ID of the weather station (only if query refers to multiple stations) | String   |
| month      | The month, represented as an integer                                                | Integer  |
| tavg       | The mean air temperature in _°C_                                                    | Float64  |
| tmin       | The mean minimum air temperature in _°C_                                            | Float64  |
| tmax       | The mean maximum air temperature in _°C_                                            | Float64  |
| prcp       | The mean monthly precipitation total in _mm_                                        | Float64  |
| snow       | The mean maximum snow depth in _mm_                                                 | Float64  |
| wdir       | The mean wind direction in degrees (_°_)                                            | Float64  |
| wspd       | The mean wind speed in _km/h_                                                       | Float64  |
| wpgt       | The mean peak wind gust in _km/h_                                                   | Float64  |
| pres       | The mean sea-level air pressure in _hPa_                                            | Float64  |
| tsun       | The mean sunshine total in minutes (_m_)                                            | Float64  |
