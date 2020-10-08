---
id: pagination
title: Pagination
---

Pagination is specified using the `page` query parameter. For example, to retrieve the second page of appointments results you would pass `page=2` like this:

```
curl -H "X_AUTH_TOKEN: [api_token]" https://[location_subdomain].datadocks.com/api/v1/appointments?page=2
```

### Responder Headers

The following pagination headers are present in the response:

* Current-Page: What page you're on.
* Page-Items: How many records return for the current page.
* Total-Pages: How many pages there are in total.
* Total-Count: How many records there are in total.
* Link: Provides the URLs to the current, previous, next, first, and last pages.

#### For example:

Assuming a location subdomain of toronto.acme and querying appointments, you will see reponse headers like this.

```
Current-Page: 1
Page-Items: 20
Total-Pages: 2
Total-Count: 40
Link: <https://toronto.acme.datadocks.com/api/v1/appointments?page=1>; rel="first", <https://toronto.acme.datadocks.com/api/v1/appointments?page=2>; rel="next", <https://toronto.acme.datadocks.com/api/v1/appointments?page=4>; rel="last"
```
