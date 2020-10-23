# Bulk Data

The Meteostat bulk data interface provides access to full data dumps of individual weather stations. The data is provided in CSV (weather data) and JSON (weather stations) format. Users are **not required to sign up** for this service.

If you are working with longer periods of time or if your use case exceeds the limitations of our JSON API, bulk data dumps have you covered. You should also consider using our [Python library](/docs/python/) which is essentially a wrapper for the bulk data interface.

## Endpoint

```
https://bulk.meteostat.net
```

In contrast to our JSON API the Bulk Data interface does not require an API key. However, when using this service you must comply with our terms of service. Please make sure to cache data if possible and forbear from sending malicious calls to this service.

## Update Cycle

To keep the load on our infrastructure as low as possible, Meteostat updates bulk data dumps individually for each weather station. Generally, all dumps should be updated at least once a week. The [list of weather stations](/docs/bulk/stations/) is updated daily.
