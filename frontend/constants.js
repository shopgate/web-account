import getConfig from './helpers/getConfig';

const {
  accountPathPartReplacement,
  accountOrdersPathPartReplacement,
  checkoutUrlPathPartToReplace,
} = getConfig();

export const MY_ACCOUNT_LABEL = 'legacy-myaccount.my-data';
export const MY_ACCOUNT_REPLACEMENT = accountPathPartReplacement || 'Shopgate/account';
export const ORDER_HISTORY_LABEL = 'navigation.my_orders';
export const ORDER_HISTORY_REPLACEMENT = accountOrdersPathPartReplacement || 'Shopgate/accountOrders';
export const CHECKOUT_PATH_PART_TO_REPLACE = checkoutUrlPathPartToReplace || 'Shopgate/checkout';
