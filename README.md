# Destiny 2 API Client

A simple, pure client-side web application that uses the Destiny 2 API.
Since the game itself is so grindy, why not have a little fun with it
somehow ^\_^.

## Quick start

Install Node using [NVM](https://github.com/nvm-sh/nvm)

```shell
nvm install
node --version
```

Install [pnpm](https://pnpm.io/) package manager

```shell
corepack enable
corepack install
```

Generate certificates for HTTPS using
[mkcert](https://github.com/FiloSottile/mkcert) tool

```shell
mkcert -install            # install local CA
mkdir certs && cd certs    # create certs directory
mkcert localhost           # create localhost certificate
```

Alternatively when you have previously generated certs already, just copy them
(`localhost-key.pem` for key and `localhost.pem` for cert) to the `certs`
directory.

Copy `.env_sample` to `.env` and populate it as instructed below in the
[Registering API client](#registering-api-client) section.

Install dependencies and start the development server

```shell
pnpm install
pnpm start
```

Point your browser to
[https://localhost:3000](https://localhost:3000).

## Destiny 2 API

[https://bungie-net.github.io/](https://bungie-net.github.io/)

### Registering API client

Clients are registered at
[https://www.bungie.net/en/Application](https://www.bungie.net/en/Application).

But you need to have logged in to the website first, otherwise you'll be
redirected to somewhere else.

When creating a new application:

-   Application Name: <whatever you want>
-   Website: <e.g. Github repo>
-   OAuth Client Type: `Confidential`
-   Redirect URL: `https://localhost:3000/login`
-   Scope: All except _Administrate groups and clans for which you are a founder
    or administrator._
-   Origin Header: `https://localhost:3000/`

Save the API key and OAuth client ID and secret to the `.env` file (see
`.env_sample` for format).

Once you have the API-key you can test if it works by running:

```shell
curl \
  --header 'X-API-Key: <api_key>' \
  'https://www.bungie.net/Platform/App/FirstParty/'
```

### OAuth 2.0

Bungie.net supports a subset of OAuth 2.0. Read the
[full documentation](https://github.com/Bungie-net/api/wiki/OAuth-Documentation).
