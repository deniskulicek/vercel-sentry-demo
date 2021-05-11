This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Bug demo

You'll need to set up demo sentry project.

Make sure to add Sentry DSN to your env:
```
export NEXT_PUBLIC_SENTRY_DSN=xyz
export SENTRY_AUTH_TOKEN=
export SENTRY_ORG=
export SENTRY_PROJECT=
```

1. Running dev server locally should trigger sentry errors for both server and client:
```bash
yarn dev
```

_Once dev server starts click "Demo page link" on the homepage._

* For server side error - refresh the demo page until you the error - it will trigger server side error in 50% of cases. 
* For client side error - click the button on the demo page which will trigger it.

Observe sentry errors in Sentry dashboard. **Both** server side and client side errors should appear.

2. Building production version and running it locally should also trigger same errors:

```bash
yarn build && yarn start
```

Repeat same steps for triggering errors.

Observe sentry errors in Sentry dashboard. **Both** server side and client side errors should appear.

3. Deploy this repo to vercel, you'll need to add following ENV variables:
```
NEXT_PUBLIC_SENTRY_DSN=xyz
SENTRY_AUTH_TOKEN=
SENTRY_ORG=
SENTRY_PROJECT=
```

Trigger same set of errors, observe that **only client side** errors are reported in this case.
