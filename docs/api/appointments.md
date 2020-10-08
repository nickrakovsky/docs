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

## Retreiving a specific Appointment

```
curl -H "X_AUTH_TOKEN: [api_token]" http://[location_subdomain].datadocks.com/api/v1/appointments/[id]
```

If your API token is `12345`, your location subdomain is `toronto.acme`, and the appointment ID you want to retrieve is `20`, then this would look like:

```
curl -H "X_AUTH_TOKEN: 12345" http://toronto.acme.datadocks.com/api/v1/appointments/20
```
