---
title: Contributing | Python Library
---

# Contributing

Meteostat is an open initiative that relies on volunteers who are willing to improve and extend our interfaces and services. New contributions to the library are highly appreciated. Before opening a PR for major additions or changes, please discuss the expected implementation by [creating an issue](https://github.com/meteostat/meteostat-python/issues/new).

## Installation
After cloning the `master` branch you can install the local version of the package using the following command:

```
sudo -H python3 -m pip install . -U
```

## Testing
When making changes to existing classes and methods, please check first if any tests are failing. Also, when adding new methods, please add unit tests for your additions.

### Running Tests
From the `/tests` directory, run the following command:

```
python3 -m unittest discover
```

### Test Coverage
Our goal is a test coverage of at least 95%. You will need to install [Coverage.py](https://coverage.readthedocs.io/) to measure test coverage. To check on the coverage, run the following command from the `/tests` directory:

```
python3 -m coverage run --source=. -m unittest discover && python3 -m coverage report
```

## Changing a Weather Station's Meta Data
If you want to update some information or correct an error in the list of weather stations, please refer to [this documentation](/contributing/stations.html).
