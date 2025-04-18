# Apite Web (checkout) Account

Shows external Account pages in in-app browser once clicked.

For the Android (GMD) theme we recommend turning on the menu subheadings: `showGmdMenuSubHeaders: true`

## How to use it

You can enable & disable any of the following links in the configuration section:

```json
{
  "showOverview": true,
  "showProfile": true,
  "showAddresses": true,
  "showOrders": true
}
```

#### Basic

First you will need the URL of the checkout. Just go to the cart extension of the platform you are working with (e.g.
Shopware 6) and check the implementation of the `shopgate.checkout.getUrl` pipeline. This will direct you to the code
that creates the URL slug. There you will see there what URL it is calling, e.g `domain + '/login'`

As an example, in Shopware 6 it will look like so:

```text
https://url.com/sgwebcheckout/login?token=XXX&affiliateCode=SGConnect_App
```

The `urlSlugToReplace` configuration indicates the part of the checkout URL that should be replaced.

By default, it configures to replace the `/login?` part of the URL above. Note escaping special characters as
`urlSlugToReplace` uses a Regex expression.

```json
{
  "urlSlugToReplace": "/login\\?"
}
```

Let's take `overviewReplacement` configuration as example URL to be replaced:

```json
{
  "overviewReplacement": "/login?redirectTo=frontend.account.home.page&"
}
```

The configuration above will replace the URL for the overview link to become:

```text
https://url.com/sgwebcheckout/login?redirectTo=frontend.account.home.page&token=XXX&affiliateCode=SGConnect_App
```

As you can see, after the customer becomes "logged in" in the inApp browser, they can be then redirect to the
`Account Home Page`. However, `?redirectTo=` is Shopware 6 specific, so it will only work there. Maybe another platform
has another way to handle this case.

#### Custom Customer Links

We added the ability to add custom links via the `customerLinks` configuration. The structure is as follows:

```json
{
  "linkOne": {
    "show": false,
    "label": "Link One",
    "replacement": "frontend.account.order.page"
  },
  "linkTwo": {
    "show": false,
    "label": "Link Two",
    "replacement": "https://website.com/account/profile"
  }
}
```
* Show - not visible by default
* Label - is language specific to the store you are implementing
* Replacement - the logic is the same as specified earlier for the replacement string

#### Advanced

Sometimes the URL to replace may have multiple values like Shopware 5, it can be either `/checkout` or `/payPalExpress`.
So you could use a regular expression for replacement:

```text
https://url.com/Shopgate/payPalExpress?sessionId=XXX
```

```json
{
  "urlSlugToReplace": "/checkout\\?|/payPalExpress\\?"
}
```

Let's take `overviewReplacement` configuration as example URL to be replaced:

```json
{
  "overviewReplacement": "/account?test=v&"
}
```

Which will combine into:

```text
https://url.com/Shopgate/account?test=v&sessionId=x
```
