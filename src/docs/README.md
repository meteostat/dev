# Introduction

Meteostat is an open platform that provides **free access** to weather and climate statistics for **non-commercial purposes**.

## Quick Start

The download of full data dumps is dead simple and doesn’t even require an API key:

```
curl "https://bulk.meteostat.net/hourly/10637.csv.gz" --output "10637.csv.gz"
```

With our Python library we're providing a simple, yet powerful, wrapper for bulk data dumps. If you're into more complex analysis you should definitely have a look at it. Alternatively, querying weather data through Meteostat’s JSON API is also pretty straight forward:

```
curl --header "x-api-key: {key}" "https://api.meteostat.net/v2/stations/meta?id=10637"
```

## Our Service

If you’re looking for climate data, there are plenty of governmental interfaces that provide open access to the weather data made available by national meteorological offices. The data provided by organizations like NOAA, DWD and Environment Canada is a valuable resource to science, education, businesses and every individual looking for weather and climate data.

However, all these interfaces use different data formats and procedures for accessing the information. It requires tremendous effort and maintenance to keep your own database of weather and climate statistics up-to-date. And that is what the Meteostat API is made for. Instead of running your own database, import routines and quality assurance measures you are ready to start developing climate data driven applications in just a few minutes.

Get the information you need with just one HTTP request or download full data dumps by weather station with our powerful API endpoints. Meteostat powers everything from a small website to the most prestigious universities and businesses in the world.

In contrast to most other weather-related applications and APIs, Meteostat focuses on historical weather and climate data that was actually measured on-site by weather stations around the globe. You can either retrieve raw observations of individual weather stations which are free of interpolation or use our comfortable point data to query data by geographic location.
