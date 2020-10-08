---
id: purchase_orders
title: Purchase Orders
---

Substitute your token for the square brackets following `tk=`

## Retreiving a List of Purchase Orders

```
curl http://api.datadocs.com/api/v1/purchase_orders?tk=[your_api_token]
```

If your API token is `12345` this would look like:

```
curl http://api.datadocs.com/api/v1/purchase_orders?tk=12345
```


## Retreiving a specific Purchase Order

```
curl http://api.datadocs.com/api/v1/purchase_orders/[id]?tk=[your_api_token]
```

If your API token is `12345` and the purchase order ID you want to retrieve is `20`, then this would look like:

```
curl http://api.datadocs.com/api/v1/purchase_orders/20?tk=12345
```
