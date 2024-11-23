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

Install dependencies and start the development server

```shell
pnpm install
pnpm start
```

Point your browser to
[http://localhost:3000](http://localhost:3000).

## Destiny 2 API

[https://bungie-net.github.io/](https://bungie-net.github.io/)

### API Key

Header `X-API-Key` is used to authenticate the client doing the request.

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

Once you have the API-key you can test if it works by running:

```shell
curl \
  --header 'X-API-Key: <api_key>' \
  'https://www.bungie.net/Platform/App/FirstParty/'
```
