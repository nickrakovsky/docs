---
id: purchase_orders
title: Purchase Orders
---

Substitute your token for the square brackets following `tk=`

## Retreiving a List of Purchase Orders

```
curl -H "X_AUTH_TOKEN: [api_token]" http://[location_subdomain].datadocs.com/api/v1/purchase_orders
```

If your API token is `12345`, and your location subdomain is `toronto.acme` this would look like:

```
curl -H "X_AUTH_TOKEN: 12345" http://toronto.acme.datadocs.com/api/v1/purchase_orders
```


## Retreiving a specific Purchase Order

```
curl -H "X_AUTH_TOKEN: [api_token]" http://[location_subdomain].datadocs.com/api/v1/purchase_orders/[id]
```

If your API token is `12345`, your location subdomain is `toronto.acme`, and the purchase order ID you want to retrieve is `20`, then this would look like:

```
curl -H "X_AUTH_TOKEN: 12345" http://toronto.acme.datadocs.com/api/v1/purchase_orders/20
```
