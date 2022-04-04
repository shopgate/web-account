import { historyPush, logger } from '@shopgate/engage/core';
import { FETCH_CHECKOUT_URL_TIMEOUT, fetchCheckoutUrl } from '@shopgate/engage/checkout';
import getConfig from '../../helpers/getConfig';

/**
 * Fetches Shopware checkout URL changes it to the URL of account page and redirects to that page.
 * @param {string} replacement URL part to be used as a replacement
 * @return {null}
 */
export const openShopwareAccountPage = replacement => (dispatch) => {
  const started = Date.now();
  dispatch(fetchCheckoutUrl())
    .then((url) => {
      // Forget it if it took more than PWA allows. User is already back.
      if (Date.now() - started > FETCH_CHECKOUT_URL_TIMEOUT) {
        return;
      }
      const { checkoutToReplace } = getConfig();
      const linkUrl = replacement ? url.replace(checkoutToReplace, replacement) : url;
      // Open the link
      dispatch(historyPush({ pathname: linkUrl }));
    })
    .catch(error => logger.error('Error fetching Shopware Account Page URL', error));
};
