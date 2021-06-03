# DolARG API

API para obtener las cotizaciones históricas del Dólar en Pesos Argentinos.

## Docs
API URL: https://dolarg-api.herokuapp.com/

| METHOD | URL | PARAMS | DESCRIPTION | RESPONSE |
| ------ | ------ | ------ | ------ | ------ |
| GET | /usd | `from`: inicio del query.<br />`to`: final del query.<br />`usd-type`: tipo de cambio (`turista` `informal` `cl` `oficial` `mep` `mayorista`)| Retorna la cotización del Dólar en Pesos Argentinos | `[["Fecha","Referencia"],["02-06-2021","167,05"]]` |
