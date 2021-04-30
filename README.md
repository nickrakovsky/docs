# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Github Actions will detect any changes to master and automatically deploy them.

If you need to deploy manually or to a different branch for some reason, you can deploy manually with:

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

#### Troubleshooting

If during deploy, you get a message about an image file not being found, check to make sure the reference is the proper casing. OSX and Windows ignore case, but Linux (which is what is used to build and deploy) does not.

For example, if you have an image `Example.png`:

Correct:

- `![Example](Example.png)`

Incorrect:

- `![Example](example.png)`
- `![Example](example.PNG)`
