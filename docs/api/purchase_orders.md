---
id: purchase_orders
title: Purchase Orders
---

Substitute your token for the square brackets following `tk=`

## Retreiving a List of Purchase Orders

```
curl -H "X_AUTH_TOKEN: [api_token]" https://[location_subdomain].datadocks.com/api/v1/purchase_orders
```

If your API token is `12345`, and your location subdomain is `toronto.acme` this would look like:

```
curl -H "X_AUTH_TOKEN: 12345" https://toronto.acme.datadocks.com/api/v1/purchase_orders
```

### Pagination

Pagination is specified using the `page` query parameter. For example, to retrieve the second page of results you would pass `page=2` like this:

```
curl -H "X_AUTH_TOKEN: [api_token]" https://[location_subdomain].datadocks.com/api/v1/purchase_orders?page=2
```


The following pagination headers are present in the response:

* "Current-Page". For example: `Current-Page: 1`
* "Page-Items". For example: `Page-Items: 20`
* "Total-Pages". For example: `Total-Pages: 2`
* "Total-Count". For example: `Total-Count: 40`
* "Link". For example: `Link: <https://toronto.acme.datadocks.com/api/v1/purchase_orders?page=1>; rel="first", <https://toronto.acme.datadocks.com/api/v1/purchase_orders?page=2>; rel="next", <https://toronto.acme.datadocks.com/api/v1/purchase_orders?page=4>; rel="last"`


### Sample Payload

```
[
  {
    "id": 1,
    "location_id": 1,
    "po_number": "A-1000",
    "name": "A-1000-FastCo-Cereal",
    "carrier_name": "FastCo",
    "outbound": false,
    "expected_starts_at": "2020-10-09T13:35:00-04:00",
    "expected_ends_at": "2020-10-15T13:35:00-04:00",
    "purchase_order_items": [
      {
        "id": 2,
        "product_id": 3,
        "unit_id": 1,
        "customer_name": "FishCo",
        "quantity": 16,
        "weight": 102,
        "custom_values": {}
      },
      {
        "id": 1,
        "product_id": 2,
        "unit_id": 1,
        "customer_name": "FishCo",
        "quantity": 33,
        "weight": 581,
        "custom_values": {}
      }
    ],
    "custom_values": {
      "expected_at": "2020-10-09",
      "travel_type": "Plane",
      "forklift_operator": "Joe "
    }
  },
  {
    "id": 2,
    "location_id": 2,
    "po_number": "A-2000",
    "name": "A-2000-FastCo-Laptops",
    "carrier_name": "FastCo",
    "outbound": false,
    "expected_starts_at": "2020-09-30T13:35:00-04:00",
    "expected_ends_at": "2020-10-14T13:35:00-04:00",
    "purchase_order_items": [
      {
        "id": 3,
        "product_id": 1,
        "unit_id": 2,
        "customer_name": "FishCo",
        "quantity": 40,
        "weight": 795,
        "custom_values": {
          "travel_type": "Truck",
          "forklift_operator": "Sam"
        }
      },
      {
        "id": 4,
        "product_id": 3,
        "unit_id": 1,
        "customer_name": "FishCo",
        "quantity": 10,
        "weight": 152,
        "custom_values": {
          "travel_type": "Bike",
          "forklift_operator": "Jenny"
        }
      }
    ],
    "custom_values": {
      "travel_type": "Bike",
      "forklift_operator": "Frank"
    }
  }
]
```
