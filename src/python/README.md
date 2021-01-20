# Python Library

The Meteostat Python library provides a simple programming interface for accessing open weather and climate data. The historical observations and statistics are obtained from Meteostat's [bulk data interface](/bulk/) and consist of data provided by different public interfaces, most of which are governmental. Among the [data sources](/docs/sources.html) are national weather services like the National Oceanic and Atmospheric Administration (NOAA) and Germany's national meteorological service (DWD).

::: tip Donation
Help Meteostat provide free weather and climate data by becoming a [Patron](https://www.patreon.com/meteostat) or donating via [PayPal](https://paypal.me/meteostat).
:::

## Installation

The Meteostat Python package is available through [PyPI](https://pypi.org/project/meteostat/):

```
pip install meteostat
```

Meteostat **requires Python 3.5** or higher. Also, we recommend using a 64 bit version of Python due to the PyArrow dependency. If you're running into issues, please install Meteostat using the `--no-deps` flag and install the [requirements](https://github.com/meteostat/meteostat-python/blob/master/requirements.txt) (except PyArrow) manually. If you want to run Meteostat without PyArrow, please set the `max_age` attribute of the `Stations`, `Daily` and `Hourly` class to `0`. This will bypass the PyArrow-based cache.

## Example

Let's pretend you want to plot temperature data for Vancouver, BC from 2018:

```python
# Import Meteostat library and dependencies
from datetime import datetime
import matplotlib.pyplot as plt
from meteostat import Stations, Daily

# Set coordinates of Vancouver
lat = 49.2497
lon = -123.1193

# Set time period
start = datetime(2018, 1, 1)
end = datetime(2018, 12, 31)

# Get closest weather station to Vancouver, BC
stations = Stations()
stations = stations.nearby(lat, lon)
stations = stations.inventory('daily', (start, end))
station = stations.fetch(1)

# Get daily data for 2018 at the selected weather station
data = Daily(station, start, end)
data = data.fetch()

# Plot line chart including average, minimum and maximum temperature
data.plot(y=['tavg', 'tmin', 'tmax'])
plt.show()
```

### Output

![2018 temperature data for Vancouver, BC](./py-example-chart.png)
