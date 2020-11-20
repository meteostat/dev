---
title: JavaScript | Wrapper | JSON API
---

# JavaScript Wrapper

Meteostat provides a convenient JavaScript wrapper for its JSON API.

**Table of Contents**

[[toc]]

## Installation

To install the package, run:

```
npm install meteostat
```

or

```
yarn add meteostat
```

## Usage

All you need to get started is an API key, which can be generated [here](https://auth.meteostat.net/). Once you have your personal API key, you can create a client:

```javascript
import Meteostat from 'meteostat'

const meteostat = new Meteostat('YOUR_API_KEY_HERE')

;(async () => {
  try {
    const { data } = await meteostat.stations.search({ query: 'Sao Paulo' })
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})()
```

## Weather Stations

The methods described in this chapter provide access to meta and weather data of actual weather stations. Alternatively, you can query data by geographical coordinates using [point data](#point-data).

### Finding Weather Stations

This method provides access to the data made available through the [_stations/search_](/api/stations/search.html) endpoint. The method takes the same parameters and uses the same response format as the corresponding endpoint.

```javascript
meteostat.stations.search({ query: 'Sao Paulo' })
```

### Nearby Weather Stations

This method provides access to the data made available through the [_stations/nearby_](/api/stations/nearby.html) endpoint. The method takes the same parameters and uses the same response format as the corresponding endpoint.

```javascript
meteostat.stations.nearby({
  lat: -23.5505199,
  lon: -46.6333094,
})
```

### Meta Data

This method provides access to the data made available through the [_stations/meta_](/api/stations/meta.html) endpoint. The method takes the same parameters and uses the same response format as the corresponding endpoint.

```javascript
meteostat.stations.meta({
  id: '83779',
})
```

### Hourly Data

This method provides access to the data made available through the [_stations/hourly_](/api/stations/hourly.html) endpoint. The method takes the same parameters and uses the same response format as the corresponding endpoint.

```javascript
meteostat.stations.hourly({
  station: 83779,
  start: '2020-11-12',
  end: '2020-11-12',
})
```

### Daily Data

This method provides access to the data made available through the [_stations/daily_](/api/stations/daily.html) endpoint. The method takes the same parameters and uses the same response format as the corresponding endpoint.

```javascript
meteostat.stations.daily({
  station: 83779,
  start: '2020-11-12',
  end: '2020-11-12',
})
```

## Point Data

The methods described in this chapter provide access to meteorological data through geographical coordinates.

### Hourly Data

This method provides access to the data made available through the [_point/hourly_](/api/point/hourly.html) endpoint. The method takes the same parameters and uses the same response format as the corresponding endpoint.

```javascript
meteostat.point.hourly({
  lat: -23.5505199,
  lon: -46.6333094,
  start: '2020-11-12',
  end: '2020-11-12',
})
```

### Daily Data

This method provides access to the data made available through the [_point/daily_](/api/point/daily.html) endpoint. The method takes the same parameters and uses the same response format as the corresponding endpoint.

```javascript
meteostat.point.daily({
  lat: -23.5505199,
  lon: -46.6333094,
  start: '2020-11-12',
  end: '2020-11-12',
})
```

### Climate Normals

This method provides access to the data made available through the [_point/climate_](/api/point/climate.html) endpoint. The method takes the same parameters and uses the same response format as the corresponding endpoint.

```javascript
meteostat.point.climate({
  lat: -23.5505199,
  lon: -46.6333094,
})
```
