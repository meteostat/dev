---
title: Contributing | Python Library
---

# Contributing

Meteostat is an open initiative that relies on volunteers who are willing to improve and extend our interfaces and services. New contributions to the library are highly appreciated. Before opening a PR for major additions or changes, please discuss the expected implementation by [creating an issue](https://github.com/meteostat/meteostat-python/issues/new).

## Installation

After cloning the `dev` branch you can install the local version of the package using the following command:

```sh
sudo -H python3 -m pip install . -U
```

## Testing

When making changes to existing classes and methods, please check first if any tests are failing. Also, when adding new methods, please add unit tests for your additions.

### Running Tests

From the `/tests` directory, run the following command:

```sh
pytest
```

## Linting

Meteostat uses [Pylint](https://pypi.org/project/pylint/) for linting. You can lint a file using a simple command:

```sh
pylint meteostat/stations.py
```

If you want to format an existing file correctly, you can use [autopep8](https://pypi.org/project/autopep8/) first:

```sh
python3 -m autopep8 --in-place --aggressive meteostat/interface/stations.py
```
