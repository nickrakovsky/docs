---
id: purchase_orders
title: Purchase Orders
---

Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below.

## Retreiving a List of Purchase Orders

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/purchase_orders
```

If your API token is `12345`, and your location subdomain is `toronto.acme` this would look like:

```
curl -H "Authorization: Token 12345" https://toronto.acme.datadocks.com/api/v1/purchase_orders
```


### Sample Payload

```
[
  {
    "id": 1,
    "po_number": "A-1000",
    "name": "A-1000-FastCo-Cereal",
    "carrier_name": "FastCo",
    "location": "Toronto",
    "outbound": false,
    "expected_starts_at": "2020-10-09T13:35:00-04:00",
    "expected_ends_at": "2020-10-15T13:35:00-04:00",
    "custom_values": {
      "expected_at": "2020-10-09",
      "travel_type": "Plane",
      "forklift_operator": "Joe "
    },
    "purchase_order_items": [
      {
        "id": 2,
        "customer_name": "FishCo",
        "product": "Trout",
        "unit": "Skid",
        "quantity": 16,
        "weight": 102,
        "custom_values": {}
      },
      {
        "id": 1,
        "customer_name": "FishCo",
        "product": "Cereal",
        "unit": "Skid",
        "quantity": 33,
        "weight": 581,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 2,
    "po_number": "A-2000",
    "name": "A-2000-FastCo-Laptops",
    "carrier_name": "FastCo",
    "location": "Vancouver",
    "outbound": false,
    "expected_starts_at": "2020-09-30T13:35:00-04:00",
    "expected_ends_at": "2020-10-14T13:35:00-04:00",
    "custom_values": {
      "travel_type": "Bike",
      "forklift_operator": "Frank"
    },
    "purchase_order_items": [
      {
        "id": 3,
        "customer_name": "FishCo",
        "product": "Laptops",
        "unit": "Box",
        "quantity": 40,
        "weight": 795,
        "custom_values": {
          "travel_type": "Truck",
          "forklift_operator": "Sam"
        }
      },
      {
        "id": 4,
        "customer_name": "FishCo",
        "product": "Trout",
        "unit": "Skid",
        "quantity": 10,
        "weight": 152,
        "custom_values": {
          "travel_type": "Bike",
          "forklift_operator": "Jenny"
        }
      }
    ]
  },
  {
    "id": 3,
    "po_number": "A-3000",
    "name": "A-3000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-08T13:35:48-04:00",
    "expected_ends_at": "2020-10-14T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 5,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 29,
        "weight": 727,
        "custom_values": {}
      },
      {
        "id": 6,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 17,
        "weight": 231,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 4,
    "po_number": "A-4000",
    "name": "A-4000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-03T13:35:48-04:00",
    "expected_ends_at": "2020-10-15T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 7,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 33,
        "weight": 505,
        "custom_values": {}
      },
      {
        "id": 8,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 13,
        "weight": 298,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 5,
    "po_number": "B-1000",
    "name": "B-1000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-05T13:35:48-04:00",
    "expected_ends_at": "2020-10-13T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 9,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 37,
        "weight": 598,
        "custom_values": {}
      },
      {
        "id": 10,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 12,
        "weight": 180,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 6,
    "po_number": "B-2000",
    "name": "B-2000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-09T13:35:48-04:00",
    "expected_ends_at": "2020-10-10T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 11,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 39,
        "weight": 724,
        "custom_values": {}
      },
      {
        "id": 12,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 11,
        "weight": 250,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 7,
    "po_number": "B-3000",
    "name": "B-3000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-02T13:35:48-04:00",
    "expected_ends_at": "2020-10-13T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 13,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 22,
        "weight": 659,
        "custom_values": {}
      },
      {
        "id": 14,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 17,
        "weight": 394,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 8,
    "po_number": "B-4000",
    "name": "B-4000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-03T13:35:48-04:00",
    "expected_ends_at": "2020-10-16T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 15,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 28,
        "weight": 723,
        "custom_values": {}
      },
      {
        "id": 16,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 16,
        "weight": 111,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 9,
    "po_number": "C-1000",
    "name": "C-1000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-02T13:35:48-04:00",
    "expected_ends_at": "2020-10-11T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 17,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 38,
        "weight": 882,
        "custom_values": {}
      },
      {
        "id": 18,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 11,
        "weight": 251,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 10,
    "po_number": "C-2000",
    "name": "C-2000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-05T13:35:48-04:00",
    "expected_ends_at": "2020-10-17T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 19,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 21,
        "weight": 970,
        "custom_values": {}
      },
      {
        "id": 20,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 20,
        "weight": 163,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 11,
    "po_number": "C-3000",
    "name": "C-3000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-07T13:35:48-04:00",
    "expected_ends_at": "2020-10-11T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 21,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 27,
        "weight": 680,
        "custom_values": {}
      },
      {
        "id": 22,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 16,
        "weight": 297,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 12,
    "po_number": "C-4000",
    "name": "C-4000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-08T13:35:48-04:00",
    "expected_ends_at": "2020-10-18T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 23,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 38,
        "weight": 559,
        "custom_values": {}
      },
      {
        "id": 24,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 17,
        "weight": 250,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 13,
    "po_number": "D-1000",
    "name": "D-1000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-05T13:35:48-04:00",
    "expected_ends_at": "2020-10-19T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 25,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 24,
        "weight": 888,
        "custom_values": {}
      },
      {
        "id": 26,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 17,
        "weight": 220,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 14,
    "po_number": "D-2000",
    "name": "D-2000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-04T13:35:48-04:00",
    "expected_ends_at": "2020-10-11T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 27,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 32,
        "weight": 503,
        "custom_values": {}
      },
      {
        "id": 28,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 13,
        "weight": 392,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 15,
    "po_number": "D-3000",
    "name": "D-3000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-09T13:35:48-04:00",
    "expected_ends_at": "2020-10-11T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 29,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 21,
        "weight": 758,
        "custom_values": {}
      },
      {
        "id": 30,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 19,
        "weight": 298,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 16,
    "po_number": "D-4000",
    "name": "D-4000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-03T13:35:48-04:00",
    "expected_ends_at": "2020-10-12T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 31,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 28,
        "weight": 958,
        "custom_values": {}
      },
      {
        "id": 32,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 12,
        "weight": 327,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 17,
    "po_number": "E-1000",
    "name": "E-1000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-09T13:35:48-04:00",
    "expected_ends_at": "2020-10-10T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 33,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 40,
        "weight": 970,
        "custom_values": {}
      },
      {
        "id": 34,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 19,
        "weight": 152,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 18,
    "po_number": "E-2000",
    "name": "E-2000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-01T13:35:48-04:00",
    "expected_ends_at": "2020-10-10T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 35,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 39,
        "weight": 751,
        "custom_values": {}
      },
      {
        "id": 36,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 16,
        "weight": 295,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 19,
    "po_number": "E-3000",
    "name": "E-3000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-09-30T13:35:48-04:00",
    "expected_ends_at": "2020-10-17T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 37,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 27,
        "weight": 546,
        "custom_values": {}
      },
      {
        "id": 38,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 12,
        "weight": 140,
        "custom_values": {}
      }
    ]
  },
  {
    "id": 20,
    "po_number": "E-4000",
    "name": "E-4000-Laptops",
    "carrier_name": null,
    "location": null,
    "outbound": false,
    "expected_starts_at": "2020-10-03T13:35:48-04:00",
    "expected_ends_at": "2020-10-14T13:35:48-04:00",
    "custom_values": {},
    "purchase_order_items": [
      {
        "id": 39,
        "customer_name": null,
        "product": "Laptops",
        "unit": "Skid",
        "quantity": 21,
        "weight": 897,
        "custom_values": {}
      },
      {
        "id": 40,
        "customer_name": null,
        "product": "Trout",
        "unit": "Skid",
        "quantity": 15,
        "weight": 212,
        "custom_values": {}
      }
    ]
  }
]
```

## Purchase Order Fields

### id

* Type: Integer
* Required: True
* Description: DataDocks internal unique identifier.
* Possible Values: Cannot be set externally.

### location_id

* Type: Integer
* Required: False
* Description: DataDocks internal unique location identifier.
* Possible Values: Optioanal. Purchase order's don't have to be location specific.


### po_number

* Type: String
* Required: True
* Description: Purchase order number.

### name

* Type: String
* Required: True
* Description: Name that DataDocks assembled internally based on the values in fields and purchase order items.
* Possible Values: Cannot be set externally.

### carrier_name

* Type: String
* Required: False
* Description: The name of the carrier the purchase order is assigned to.

### outbound

* Type: Boolean
* Required: True
* Description: True if it is an outbound purchase order, False if it is an inbound purchase order. Defaults to False.

### expected_starts_at

* Type: DateTime
* Required: False
* Description: When the purchase order is expected to start.

### expected_ends_at

* Type: DateTime
* Required: False
* Description: When the purchase order is expected to end.

### custom_values

* Type: Hash
* Required: False
* Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the pourchase order.

### purchase_order_items

* Type: Array
* Required: False
* Description: The items (packing lists) belonging to the purchase order.

#### purchase_order_items > id

* Type: Integer
* Required: True
* Description: DataDocks internal unique identifier.
* Possible Values: Cannot be set externally.

#### purchase_order_items > product_id

* Type: Int
* Required: False
* Description: DataDocks internal unique identifier for the product the item is associated with.

#### purchase_order_items > unit_id

* Type: Int
* Required: False
* Description: DataDocks internal unique identifier for the unit the item is associated with.

#### purchase_order_items > customer_name

* Type: String
* Required: False
* Description: The name of the customer the item is associated with. 

#### purchase_order_items > booked_quantity

* Type: Decimal
* Required: False
* Description: The quantity.

#### purchase_order_items > booked_weight

* Type: Decimal
* Required: False
* Description: The weight.

#### purchase_order_items > custom_values

* Type: Hash
* Required: False
* Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the item.

