# Shopgate Connect - Shopware Myaccount / Order History Extension

Shows external 'My Account' & 'Order History' page in in-app browser

## How to use it
This extension allows the visibility of the account and order button to be configured. It also allows the part of the checkout url to be replaced to be configured as well as the replacements.
The showMyAccount configuration controls the visibility of the account button. True shows the button when the user is logged in. False hides the button
```json
{
  "showMyAccount": true
}
```

The showOrderHistory configuration controls the visibility of the orders button. True shows the button when the user is logged in. False hides the button
```json
{
  "showOrderHistory": true
}
```

The orders and account URLs that the respective button links the user to are derivatives of the checkout url.
The checkoutUrlPathPartToReplace configuration indicates the part of the checkout url that should be replaced.
```json
{
  "checkoutUrlPathPartToReplace": "Shopgate/checkout"
}
```

The accountPathPartReplacement configuration provides the replacement part for the checkout URL to make it the URL to account information.
```json
{
  "accountPathPartReplacement": "Shopgate/accountOrders"
}

```
The accountOrdersPathPartReplacement configuration provides the replacement part for the checkout URL to make it the URL to order information.
```json
{
  "accountOrdersPathPartReplacement": "Shopgate/accountOrders"
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.


