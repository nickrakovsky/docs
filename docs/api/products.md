---
id: products
title: Products
---

Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below.

## Listing

You can fetch the list of products using the following API call:

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/products
```

If your API token is `12345`, and your location subdomain is `toronto-acme` this would look like:

```
curl -H "Authorization: Token 12345" https://toronto-acme.datadocks.com/api/v1/products
```

You can pass the following parameters to filter the list of products returned:

### Filtering

#### name

* Type: String
* Description: The name of the product to filter on. This is a fuzzy match if provided.

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/products?name=a
```

#### sku

* Type: String
* Description: The SKU of the product to filter on. This is an exact match if provided.

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/products?sku=1234
```

### Sample Payload

```
[
  {
    "id": 1,
    "name": "First",
    "sku": "1A"
  },
  {
    "id": 2,
    "name": "Second",
    "sku": "2B"
  }
]
```

## Fields

### id

* Type: Integer
* Required: True
* Description: DataDocks internal unique identifier.
* Possible Values: Cannot be set externally.

### name

* Type: String
* Required: True
* Description: The name of the product.

### sku

* Type: String
* Required: True
* Description: The SKU of the product.


## Creating Products

You can create a product using the following API call and providing the product data in JSON format.

```
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "Authorization: Token [api_token]" \
  -X POST \
  -d '{"product": {"name": "Third", "sku": "3C"}}' \
  https://[location_subdomain].datadocks.com/api/v1/products
```

If your API token is `12345`, and your location subdomain is `toronto-acme` this would look like:

```
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "Authorization: Token 12345" \
  -X POST \
  -d '{"product": {"name": "Third", "sku": "3C"}}' \
  https://toronto-acme.datadocks.com/api/v1/products

```

## Updating Products

You can update a product using the following API call and providing the product data in JSON format. Note that the URL requires the product ID at the end (the DataDocks product ID).

```
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "Authorization: Token [api_token]" \
  -X POST \
  -d '{"product": {"name": "Name Changed"}}' \
  https://[location_subdomain].datadocks.com/api/v1/products/[product_id]
```

If your API token is `12345`, your location subdomain is `toronto-acme`, and the product ID you want to update is `1` this would look like:

```
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "Authorization: Token 12345" \
  -X POST \
  -d '{"product": {"name": "Name Changed"}}' \
  https://toronto-acme.datadocks.com/api/v1/products/1

```
