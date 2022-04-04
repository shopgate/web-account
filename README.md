# Apite Web (checkout) Account

Shows external Account pages in in-app browser once clicked. This extension is tailored for Shopware 6,
but can be re-used for any other cart if the URL structure allows it.

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

As an example we can take this URL:
```text
http://localhost/sgconnect/login?token=XXX&affiliateCode=SGConnect_App
```

The `checkoutToReplace` configuration indicates the part of the checkout URL that should be replaced.

By default, it configures to replace the `?login` part of the URL above.
```json
{
  "checkoutToReplace": "/login?"
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
http://localhost/sgconnect/login?redirectTo=frontend.account.home.page&token=XXX&affiliateCode=SGConnect_App
```

As you can see, after the customer becomes "logged in" in the inApp browser, they can be then redirect to the
`Account Home Page`.
