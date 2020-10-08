---
id: authentication
title: Authentication
---

Before you can start making API calls inot DataDocks you will need to ask us for a token you can use to authenticate each of your API calls.

## Example

Assuming an API token of `1234567890`.

In order to call our API you will need to attach this token as a parameter to each of your calls like so:
`http://api.datadocs.com/api/v1/appointments?tk=1234567890`

## Testing

You can test your token to make sure it works by running the following bash command from a unix / linux / osx terminal. Replacing the value following `tk=` with the unique token we provided for you.

```
curl -I http://api.datadocs.com/api/v1/appointments?tk=1234567890
```
