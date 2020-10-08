---
id: appointments
title: Appointments
slug: /api/appointments
---

Substitute your token for the square brackets following `tk=`

## Retreiving a List of Appointments

```
curl http://api.datadocs.com/api/v1/appointments?tk=[your_api_token]
```

If your API token is `12345` this would look like:

```
curl http://api.datadocs.com/api/v1/appointments?tk=12345
```

## Retreiving a specific Appointment

```
curl http://api.datadocs.com/api/v1/appointments/[id]?tk=[your_api_token]
```

If your API token is `12345` and the appointment ID you want to retrieve is `20`, then this would look like:

```
curl http://api.datadocs.com/api/v1/appointments/20?tk=12345
```
