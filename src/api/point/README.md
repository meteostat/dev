---
title: Point Data | JSON API
---

# Point Data

While weather stations provide data that was measured at a specific location, point data is available for any geographic location. This interface reduces complexity for API users as it does not require knowledge about the available weather stations. Instead, data can be retrieved directly.

## Remarks

Point data is currently considered an **experimental feature**. The way data is being interpolated is still subject to changes. Moreover, point data **only returns data if there is at least one nearby weather station** that reported observations in the desired period. The model output is by no means a substitute for actual observations.

We encourage API users to give the new feature a try. Please get in touch with Meteostat for feedback and suggestions.

## Data Model

Point data provides more complete time series, as observations of multiple stations are joined together. The data output is being interpolated based on the geographical distance between the different weather stations and the reference point of the query. Additionally, Meteostat adjusts measurements based on environmental circumstances and differences in altitude.

Meteostat projects the existing observations which are provided by weather stations around the world to the location specified in the request. Long-term climate averages are based on the incredible [WorldClim](https://worldclim.org/) project. For more precise model output, please provide the elevation of your location using the `alt` parameter.

## Endpoints

Meteostat provides three different endpoints for point data:

* [Hourly Data](hourly.md)
* [Daily Data](daily.md)
* [Climate Normals](climate.md)

## Vision

The use cases for historical weather data are diverse. While actual observations of professional weather stations are crucial for science and research, model data provides a better coverage across the globe. Point data is an addition to the thousands of weather stations which are available through Meteostat.

With a growing community of developers and contributors who are using and building Meteostat, we will be able to provide even better model output in the future. We are visioning a machine learning based approach for point data which allows our model to improve over time.
