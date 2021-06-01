---
id: companies
title: Companies
---

Substitute your token for the square brackets placeholder in the header portion, and your location subdomain in the url portion as indicated below.

## Listing

You can fetch the list of companies using the following API call:

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/companies
```

If your API token is `12345`, and your location subdomain is `toronto-acme` this would look like:

```
curl -H "Authorization: Token 12345" https://toronto-acme.datadocks.com/api/v1/companies
```

You can pass the following parameters to filter the list of companies returned:

### Filtering

#### company_type

* Type: String
* Description: The type of companies to filter on. This is an exact match if provided.
* Possible Values: Can be "carrier", "customer" or "both". This is required.

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/companies?company_type=customer
```

#### name

* Type: String
* Description: The name of the company to filter on. This is a fuzzy match if provided.

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/companies?name=s
```

#### company_number

* Type: String
* Description: The company_number to filter on. This is an exact match if provided.

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/companies?company_number=B83582616848
```

#### Combining Filters

You can combine parameters by separating them with an ampersand like so:

```
curl -H "Authorization: Token [api_token]" https://[location_subdomain].datadocks.com/api/v1/companies?company_type=customer&name=s
```

### Sample Payload

```
[
  {
    "id": 1,
    "parent_id": null,
    "company_type": "carrier",
    "name": "Joe's Shipping",
    "company_number": "A17727959343",
    "email": "ingo@joesshipping.com",
    "phone": "+14161231234",
    "street": "1 Yonge St.",
    "unit": null,
    "city": "Toronto",
    "province": "ON",
    "country": "CA",
    "postal": "M8H 1G1",
    "category": null,
    "auto_approve_appointments": true,
    "can_create_carriers": false,
    "notifications": true,
    "custom_values": {
      "ap_contact": "Sue Brown",
      "sales_contact": "Tim Jones",
      "facility_contact": "John Green"
    }
  },
  {
    "id": 2,
    "parent_id": null,
    "company_type": "customer",
    "name": "Spatula City",
    "company_number": "B83582616848",
    "email": "info@spatulacity.com",
    "phone": "+14161231234",
    "street": "1 Yonge St.",
    "unit": "4",
    "city": "Toronto",
    "province": "ON",
    "country": "CA",
    "postal": "M8H 1G1",
    "category": null,
    "auto_approve_appointments": false,
    "can_create_carriers": true,
    "notifications": false,
    "custom_values": {
      "ap_contact": "",
      "sales_contact": "Al Yankovic",
      "facility_contact": ""
    }
  }
]
```

## Fields

### id

* Type: Integer
* Required: True
* Description: DataDocks internal unique identifier.
* Possible Values: Cannot be set externally.

### parent_id

* Type: Integer
* Required: False
* Description: DataDocks internal unique identifier that points to the company that created it.
* Possible Values: Must match another company identifier.

### company_type

* Type: String
* Required: True
* Description: The type of the company.
* Possible Values: carrier or customer

### name

* Type: String
* Required: True
* Description: Name of the company.

### company_number

* Type: String
* Required: True
* Description: Unique external identifier assigned to the company.

### email

* Type: String
* Required: False
* Description: Primary email address.

### phone

* Type: String
* Required: False
* Description: Primary phone number.

### street

* Type: String
* Required: False
* Description: Street address.

### unit

* Type: String
* Required: False
* Description: Building unit or suite.

### city

* Type: String
* Required: False
* Description: City

### province

* Type: String
* Required: False
* Description: Province or State.

### country

* Type: String
* Required: False
* Description: Country - please use two letter country code. I.e. US for United States

### postal

* Type: String
* Required: False
* Description: Postal or Zip Code.

### category

* Type: String
* Required: False
* Description: ?

### auto_approve_appointments

* Type: Boolean
* Required: False
* Description: Are appointments created by this company's users are automatically approved (booked)?

### can_create_carriers

* Type: Boolean
* Required: False
* Description: Can this company's users create other carriers themselves?

### notifications

* Type: Boolean
* Required: False
* Description: Should this company's users be subscribed to appointment notifications.

### custom_values

* Type: Hash
* Required: False
* Description: A hash (object) of key / value pairs of the custom fields that have been filled out for the company.


## Creating Companies

You can create a company using the following API call and providing the company data in JSON format.

```
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "Authorization: Token [api_token]" \
  -X POST \
  -d '{"company": {"name": "My Shipping Co.", "company_type": "carrier", "company_number": "MSC1234"}}' \
  https://[location_subdomain].datadocks.com/api/v1/companies
```

If your API token is `12345`, and your location subdomain is `toronto-acme` this would look like:

```
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "Authorization: Token 12345" \
  -X POST \
  -d '{"company": {"name": "My Shipping Co.", "company_type": "carrier", "company_number": "MSC1234"}}' \
  https://toronto-acme.datadocks.com/api/v1/companies
```

## Updating Companies

You can update a company using the following API call and providing the company data in JSON format. Note that the URL requires the company ID at the end (the DataDocks company ID).

```
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "Authorization: Token [api_token]" \
  -X PUT \
  -d '{"company": {"name": "Name Changed"}}' \
  https://[location_subdomain].datadocks.com/api/v1/companies/[company_id]
```

If your API token is `12345`, your location subdomain is `toronto-acme`, and the company ID you want to update is `1` this would look like:

```
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "Authorization: Token 12345" \
  -X PUT \
  -d '{"company": {"name": "Name Changed"}}' \
  https://toronto-acme.datadocks.com/api/v1/companies/1
```
