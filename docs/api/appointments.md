---
id: appointments
title: Appointments
slug: /api/appointments
---

Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below.

## Listing

You can fetch the list of appointments using the following API call:

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments
```

If your API token is `12345`, and your location subdomain is `toronto.acme` this would look like:

```
curl -H "Authorization: Token 12345" https://toronto.acme.datadocks.com/api/v1/appointments
```

You can pass the following parameters to filter the list of appointments returned:

### Filtering

#### po_number

* Type: String
* Description: The purchase order number to filter on. This is an exact match if provided.

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments?po_number=12345
```

#### from

* Type: String representation of a date / time.
* Description: Filter results scheduled on or after the passed date / time. The date / time passed will be localized to the location's timezone.

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments?from=2020-01-01%2012:00%20PM
```

#### to

* Type: String representation of a date / time.
* Description: Filter results scheduled before the passed date / time. The date / time passed will be localized to the location's timezone.

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments?to=2020-01-02%2012:00%20PM
```

#### Combining Filters

You can combine parameters by separating them with an ampersand like so:

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments?po_number=12345&from=2020-01-01%2012:00%20PM&to=2020-01-02%2012:00%20PM
```


### Sample Payload

```
[
  {
    "id": 1,
    "appointment_number": 1,
    "state": "left",
    "duration": 120,
    "shipping_number": "57886",
    "trailer_number": "2222222",
    "bol_number": "922",
    "carrier_name": "FastCo",
    "driver_name": "Jason Smith",
    "created_by": "Sysadmin",
    "outbound": false,
    "drop_trailer": false,
    "queued": false,
    "dock": "Dock 2",
    "yard": null,
    "free_until": null,
    "scheduled_at": "2020-09-30T06:00:00-04:00",
    "approved_at": "2020-09-22T13:35:00-04:00",
    "arrived_at": null,
    "started_at": "2020-09-24T13:35:00-04:00",
    "completed_at": "2020-09-24T13:35:00-04:00",
    "left_at": "2020-09-25T13:35:00-04:00",
    "cancelled_at": null,
    "custom_values": {
      "expected_at": "2020-10-01",
      "travel_type": "Truck",
      "forklift_operator": "Sue",
      "inspection_passed": "1"
    },
    "packing_lists": [
      {
        "id": 4,
        "po_number": "A-2000",
        "customer_name": "FishCo",
        "product": "Trout",
        "unit": "Skid",
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
        "body": "First note."
      },
      {
        "id": 4,
        "body": "Second note."
      },
      {
        "id": 5,
        "body": "Third note."
      }
    ],
    "documents": []
  },
  {
    "id": 2,
    "appointment_number": 2,
    "state": "left",
    "duration": 180,
    "shipping_number": "18234",
    "trailer_number": "432233222",
    "bol_number": "37014",
    "carrier_name": "FastCo",
    "driver_name": "Brad Jones",
    "created_by": "Sysadmin",
    "outbound": true,
    "drop_trailer": false,
    "queued": false,
    "dock": null,
    "yard": "Yard A",
    "free_until": null,
    "scheduled_at": "2020-09-22T13:00:00-04:00",
    "approved_at": "2020-09-22T13:35:00-04:00",
    "arrived_at": null,
    "started_at": "2020-09-24T13:35:00-04:00",
    "completed_at": "2020-09-24T13:35:00-04:00",
    "left_at": "2020-09-25T13:35:00-04:00",
    "cancelled_at": null,
    "custom_values": {
      "expected_at": "2020-09-22",
      "travel_type": "Ship",
      "forklift_operator": "Mary"
    },
    "packing_lists": [
      {
        "id": 5,
        "po_number": "A-4000",
        "customer_name": "FishCo",
        "product": "Trout",
        "unit": "Skid",
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
        "customer_name": "FishCo",
        "product": "Trout",
        "unit": "Skid",
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
        "body": "This is a note."
      },
      {
        "id": 2,
        "body": "This is another note."
      }
    ],
    "documents": []
  }
]
```

## Fields

### id

* Type: Integer
* Required: True
* Description: DataDocks internal unique identifier.
* Possible Values: Cannot be set externally.

### appointment_number

* Type: Integer
* Required: True
* Description: The automatically sequenced number for the appointment.
* Possible Values: Cannot be set externally.

### state

* Type: String
* Required: True
* Description: The state / status of the appointments.
* Possible Values:
    * `needs_booking`
    * `pending`
    * `booked`
    * `arrived`
    * `started`
    * `completed`
    * `left`
    * `cancelled`

### duration

* Type: Integer
* Required: True
* Description: The duration of the appointment in minutes.
* Possible Values: Must be greater than 0.

### shipping_number

* Type: String
* Required: False
* Description: The shipping number.

### trailer_number

* Type: String
* Required: False
* Description: The trailer number.

### bol_number

* Type: String
* Required: False
* Description: The BOL number.

### carrier_name

* Type: String
* Required: False
* Description: The name of the carrier the appointment is assigned to.

### carrier_email

* Type: String
* Required: False
* Description: The email of the carrier the appointment is assigned to if not carrier was found / specified.

### driver_name

* Type: String
* Required: False
* Description: The driver.

### created_by

* Type: String
* Required: False
* Description: The name of the user who created the appointment.

### outbound

* Type: Boolean
* Required: True
* Description: True if it is an outbound appointment, False if it is an inbound appointment. Defaults to False.

### drop_trailer

* Type: Boolean
* Required: True
* Description: Whether or not it's a drop trailer. Defaults to False.

### queued

* Type: Boolean
* Required: True
* Description: Whether or not it's been queued for a specific date, but not yet scheduled. Defaults to False.

### dock

* Type: String
* Required: False
* Description: The name of the dock the appointment is assigned to.
* Possible Values: A valid dock at the appointment's location.

### yard

* Type: String
* Required: False
* Description: The name of the yard the appointment is assigned to.
* Possible Values: A valid yard at the appointment's location.

### free_until

* Type: DateTime
* Required: False
* Description: ?

### scheduled_at

* Type: DateTime
* Required: False
* Description: When the appointment is scheduled for.

### approved_at

* Type: DateTime
* Required: False
* Description: When the appointment was approved.

### arrived_at

* Type: DateTime
* Required: False
* Description: When the appointment arrived.

### started_at

* Type: DateTime
* Required: False
* Description: When the appointment started processing.

### completed_at

* Type: DateTime
* Required: False
* Description: When the appointment completed processing.

### left_at

* Type: DateTime
* Required: False
* Description: When the appointment left the property.

### cancelled_at

* Type: DateTime
* Required: False
* Description: When the appointment was cancelled.

### custom_values

* Type: Hash
* Required: False
* Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the appointment.

### packing_lists

* Type: Array
* Required: False
* Description: The packing lists belonging to the appointment.

#### packing_lists > id

* Type: Integer
* Required: True
* Description: DataDocks internal unique identifier.
* Possible Values: Cannot be set externally.

#### packing_lists > po_number

* Type: String
* Required: False
* Description: Purchase order number the packing list is associated with.

#### packing_lists > customer_name

* Type: String
* Required: False
* Description: The name of the customer the packing list is associated with. 

#### packing_lists > product

* Type: Int
* Required: False
* Description: The name of the product the packing list is associated with.

#### packing_lists > unit

* Type: Int
* Required: False
* Description: The name of the unit the packing list is associated with.

#### packing_lists > booked_quantity

* Type: Decimal
* Required: False
* Description: The booked quantity.

#### packing_lists > booked_weight

* Type: Decimal
* Required: False
* Description: The booked weight.

#### packing_lists > actual_quantity

* Type: Decimal
* Required: False
* Description: The actual quantity.

#### packing_lists > actual_weight

* Type: Decimal
* Required: False
* Description: The actual weight.

#### packing_lists > custom_values

* Type: Hash
* Required: False
* Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the packing list.

### notes

* Type: Array
* Required: False
* Description: The notes attached to the appointment.

#### notes > id

* Type: Integer
* Required: True
* Description: DataDocks internal unique identifier.
* Possible Values: Cannot be set externally.

#### notes > body

* Type: String
* Required: True
* Description: The contents / body of the note.

### documents

* Type: Array
* Required: False
* Description: The documents attached to the appointment.
