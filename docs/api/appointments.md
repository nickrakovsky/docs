---
id: appointments
title: Appointments
slug: /api/appointments
---

Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below.

## Retreiving a List of Appointments

```
curl -H "X_AUTH_TOKEN: [api_token]" http://[location_subdomain].datadocks.com/api/v1/appointments
```

If your API token is `12345`, and your location subdomain is `toronto.acme` this would look like:

```
curl -H "X_AUTH_TOKEN: 12345" http://toronto.acme.datadocks.com/api/v1/appointments
```

### Sample Payload

```
[
  {
    "id": 1,
    "created_by_id": 1,
    "appointment_number": 1,
    "state": "left",
    "dock_id": 2,
    "yard_id": null,
    "duration": 120,
    "shipping_number": "57886",
    "trailer_number": "2222222",
    "bol_number": "922",
    "carrier_id": 7,
    "carrier_name": "FastCo",
    "carrier_email": null,
    "driver_name": "Jason Smith",
    "outbound": false,
    "drop_trailer": false,
    "queued": false,
    "free_until": null,
    "scheduled_at": "2020-09-30T06:00:00-04:00",
    "approved_at": "2020-09-22T13:35:00-04:00",
    "arrived_at": null,
    "started_at": "2020-09-24T13:35:00-04:00",
    "completed_at": "2020-09-24T13:35:00-04:00",
    "left_at": "2020-09-25T13:35:00-04:00",
    "cancelled_at": null,
    "packing_lists": [
      {
        "id": 4,
        "po_number": "A-2000",
        "product_id": 3,
        "unit_id": 1,
        "customer_name": "FishCo",
        "booked_quantity": 10,
        "booked_weight": 152,
        "actual_quantity": 12,
        "actual_weight": 160,
        "custom_values": {
          "barcode": "11223344",
          "dimensions": "S",
          "temperature_celcius": "-5"
        }
      }
    ],
    "notes": [
      {
        "id": 3,
        "user_id": 1,
        "body": "First note."
      },
      {
        "id": 4,
        "user_id": 1,
        "body": "Second note."
      },
      {
        "id": 5,
        "user_id": 1,
        "body": "Third note."
      }
    ],
    "documents": [],
    "custom_values": {
      "expected_at": "2020-10-01",
      "travel_type": "Truck",
      "forklift_operator": "Sue",
      "inspection_passed": "1"
    }
  },
  {
    "id": 2,
    "created_by_id": 1,
    "appointment_number": 2,
    "state": "left",
    "dock_id": null,
    "yard_id": 1,
    "duration": 180,
    "shipping_number": "18234",
    "trailer_number": "432233222",
    "bol_number": "37014",
    "carrier_id": 7,
    "carrier_name": "FastCo",
    "carrier_email": null,
    "driver_name": "Brad Jones",
    "outbound": true,
    "drop_trailer": false,
    "queued": false,
    "free_until": null,
    "scheduled_at": "2020-09-22T13:00:00-04:00",
    "approved_at": "2020-09-22T13:35:00-04:00",
    "arrived_at": null,
    "started_at": "2020-09-24T13:35:00-04:00",
    "completed_at": "2020-09-24T13:35:00-04:00",
    "left_at": "2020-09-25T13:35:00-04:00",
    "cancelled_at": null,
    "packing_lists": [
      {
        "id": 5,
        "po_number": "A-4000",
        "product_id": 3,
        "unit_id": 1,
        "customer_name": "FishCo",
        "booked_quantity": 13,
        "booked_weight": 298,
        "actual_quantity": 12,
        "actual_weight": 290,
        "custom_values": {
          "barcode": "33222311",
          "dimensions": "M",
          "temperature_celcius": "-4"
        }
      },
      {
        "id": 6,
        "po_number": "B-4000",
        "product_id": 3,
        "unit_id": 1,
        "customer_name": "FishCo",
        "booked_quantity": 16,
        "booked_weight": 111,
        "actual_quantity": 17,
        "actual_weight": 120,
        "custom_values": {
          "barcode": "23302911",
          "dimensions": "L",
          "temperature_celcius": "-2"
        }
      }
    ],
    "notes": [
      {
        "id": 1,
        "user_id": 1,
        "body": "This is a note."
      },
      {
        "id": 2,
        "user_id": 1,
        "body": "This is another note."
      }
    ],
    "documents": [],
    "custom_values": {
      "expected_at": "2020-09-22",
      "travel_type": "Ship",
      "forklift_operator": "Mary"
    }
  }
]
```
