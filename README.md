<p align="center">
  <img width="200" height="200" src="https://github.com/ben-haas/birb-wallet/blob/main/static/logo/birb_logo_md.png?raw=true">
</p>

<h1 align="center" style="border-bottom:0">birb wallet</h1>
<h3 align="center">A Tezos wallet for Trezor.</h3>

</br>
</br>

## Features

- Create Tezos addresses with your Trezor hardware wallet
- Send and Receive Tezos
- Manage Delegations

## Setup

### .env

Create a `.env ` file using the included template.

```yaml
# Required for the Trezor api
VITE_TREZOR_MANIFEST_EMAIL=""
VITE_TREZOR_MANIFEST_APP_URL=""

# There are 1,000,000 mutez per tezos
VITE_MUTEZ_PER_TEZ=1000000

# Default derivation path for creating/connect accounts
VITE_ACCOUNT_DEFAULT="m/44'/1729'/0'/0'"
```

### Sveltekit Server

This project uses [Sveltekit](https://kit.svelte.dev/) and [Skeleton UI](https://www.skeleton.dev/)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```
