---
title: Weather Stations | Bulk Data
---

# Weather Stations

Meteostat provides an open list of weather stations including inventory data.

## Endpoints

You can access dumps of Meteostat's weather station directory through HTTPS.

### Full Dump

A JSON file containing all weather stations available at Meteostat, including inventory information and meta data, can be downloaded from this URL:

```
https://bulk.meteostat.net/stations/full.json.gz
```

### Lite Dump

A lite version of this dump file, containing only weather stations which did report data to Meteostat at any point in the past, is available here:

```
https://bulk.meteostat.net/stations/lite.json.gz
```

## Properties

Both the lite and the regular dump are equally structured. Each object represents a weather station and has the following properties:

* `id`: Meteostat ID (_String_)
* `name`: Name in different languages (_Object_)
* `country`: ISO 3166-1 alpha-2 country code, e.g. CA for Canada (_String_)
* `region`: ISO 3166-2 state or region code, e.g. TX for Texas (_String_)
* `identifiers`: Identifiers (_Object_)
    * `national`: National ID (_String_)
    * `wmo`: WMO ID (_String_)
    * `ghcn`: GHCN ID (_String_)
    * `wban`: WBAN ID (_String_)
    * `usaf`: USAF ID (_String_)
    * `icao`: ICAO ID (_String_)
    * `iata`: IATA ID (_String_)
* `location`: Geographic location (_Object_)
    * `latitude`: Latitude (_Float_)
    * `longitude`: Longitude (_Float_)
    * `elevation`: Elevation in meters (_Integer_)
* `timezone`: Time zone (_String_)
* `history`: Previous locations, identifiers or names (_Array_)

## Contributing

The directory of weather stations is maintained by Meteostat and voluntary contributors on [GitHub](https://github.com/meteostat/weather-stations). If you want to add a new weather station, update some information or correct an error, please either correct/update the affected file(s) & create a pull request or fill an issue & describe your concern.
