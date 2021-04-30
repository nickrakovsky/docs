---
id: authentication
title: Authentication
---

**Please note, this entire section regarding API is for your IT Department if they want to integrate a system with DataDocks.**

Before you can start making API calls inot DataDocks you will need to ask us for a token you can use to authenticate each of your API calls.

This token will need to be placed in the `Authorization` header of all requests as a `Token`.

## Example

Assuming an API token of `1234567890` and a location subdomain of `toronto-acme`.

A call to our API to retrieve appointments would look like this:

```
curl -H "Authorization: Token 1234567890" https://toronto-acme.datadocks.com/api/v1/appointments
```

Simply substitute your your token and your location subdomain.
