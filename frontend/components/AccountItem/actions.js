import { isUserLoggedIn } from '@shopgate/pwa-common/selectors/user';
import { historyPush } from '@shopgate/pwa-common/actions/router';
import fetchCheckoutUrl from '@shopgate/pwa-common-commerce/checkout/actions/fetchCheckoutUrl';
import { FETCH_CHECKOUT_URL_TIMEOUT } from '@shopgate/pwa-common-commerce/checkout/constants';
import { logger } from '@shopgate/pwa-core/helpers';
import { CHECKOUT_PATH_PART_TO_REPLACE } from '../../constants';

/**
 * Fetches Shopware checkout URL changes it to the URL of account page and redirects to that page.
 * @param {string} replacement URL part to be used as a replacement
 * @return {null}
 */
export const openShopwareAccountPage = replacement => (dispatch, getState) => {
  // Check if user is logged in.
  if (!isUserLoggedIn(getState())) {
    logger.warn('Will not fetch Shopware Account Page URL because user is not logged in');
    return;
  }
  const started = Date.now();
  dispatch(fetchCheckoutUrl())
    .then((url) => {
      // Forget it if it took more than PWA allows. User is already back.
      if (Date.now() - started > FETCH_CHECKOUT_URL_TIMEOUT) {
        return;
      }
      const linkUrl = replacement ? url.replace(CHECKOUT_PATH_PART_TO_REPLACE, replacement) : url;
      // Open the checkout.
      dispatch(historyPush({ pathname: linkUrl }));
    })
    .catch(error => logger.error('Error fetching Shopware Account Page URL', error));
};
