---
id: appointments
title: Appointments
slug: /api/appointments
---

Substitute your token for the square brackets following `tk=`

## Retreiving a List of Appointments

```
curl -H "X_AUTH_TOKEN: [your_api_token]" http://api.datadocs.com/api/v1/appointments
```

If your API token is `12345` this would look like:

```
curl -H "X_AUTH_TOKEN: 12345" http://api.datadocs.com/api/v1/appointments
```

## Retreiving a specific Appointment

```
curl -H "X_AUTH_TOKEN: [your_api_token]" http://api.datadocs.com/api/v1/appointments/[id]
```

If your API token is `12345` and the appointment ID you want to retrieve is `20`, then this would look like:

```
curl -H "X_AUTH_TOKEN: 12345" http://api.datadocs.com/api/v1/appointments/20
```
