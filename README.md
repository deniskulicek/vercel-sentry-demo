This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Bug demo

Make sure to add Sentry DSN to your env:
```
export NEXT_PUBLIC_SENTRY_DSN=xyz
```

1. Running dev server locally should trigger sentry errors for both server and client:
```bash
yarn dev
```

Once dev server starts click "Demo page link" on the homepage. It will trigger server side error in 50% of cases. Additionally try clicking the button which will trigger client side error.

2. Building production version and running it locally should also trigger same errors:

```bash
yarn build && yarn start
```

Repeat same steps for triggering errors.

3. Deploy this repo to vercel, you'll need to add following ENV variables:
```
NEXT_PUBLIC_SENTRY_DSN=xyz
SENTRY_AUTH_TOKEN=
SENTRY_ORG=
SENTRY_PROJECT=
```
