import React, { Fragment } from 'react';
import AccountItem from '../../components/AccountItem';
import {
  LABEL_ACCOUNT_ADDRESS,
  LABEL_ACCOUNT_ORDERS,
  LABEL_ACCOUNT_OVERVIEW,
  LABEL_ACCOUNT_PROFILE,
} from '../../constants';
import getConfig from '../../helpers/getConfig';

const {
  showOverview, showProfile, showAddresses, showOrders,
  overviewReplacement, profileReplacement, addressReplacement, ordersReplacement,
} = getConfig();

/**
 * Account holds all the User Account links
 *
 * @param {Object} props -components
 * @return {?JSX.Element}
 * @constructor
 */
const Account = (props) => {
  const showAny = showOverview || showProfile || showAddresses || showOrders;

  if (!showAny) {
    return null;
  }

  return (
    <Fragment>
      {showOverview && (<AccountItem
        {...props}
        replacement={overviewReplacement}
        label={LABEL_ACCOUNT_OVERVIEW}
      />)}
      {showProfile && <AccountItem
        {...props}
        replacement={profileReplacement}
        label={LABEL_ACCOUNT_PROFILE}
      />}
      {showAddresses && <AccountItem
        {...props}
        replacement={addressReplacement}
        label={LABEL_ACCOUNT_ADDRESS}
      />}
      {showOrders && <AccountItem
        {...props}
        replacement={ordersReplacement}
        label={LABEL_ACCOUNT_ORDERS}
      />}
    </Fragment>
  );
};

export default Account;
