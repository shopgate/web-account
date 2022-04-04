import React from 'react';
import PropTypes from 'prop-types';
import { AccountBoxIcon, BoxIcon } from '@shopgate/engage/components';
import AccountItem from '../../components/AccountItem';
import { BookIcon, ChartIcon } from '../../icons';
import {
  LABEL_ACCOUNT_TITLE,
  LABEL_ACCOUNT_ADDRESS,
  LABEL_ACCOUNT_ORDERS,
  LABEL_ACCOUNT_OVERVIEW,
  LABEL_ACCOUNT_PROFILE,
} from '../../constants';
import getConfig from '../../helpers/getConfig';
import connect from './connector';
import TitledFragment from '../../components/TitledFragment';

const {
  showOverview, showProfile, showAddresses, showOrders,
  overviewReplacement, profileReplacement, addressReplacement, ordersReplacement,
} = getConfig();

/**
 * Android has both portals for printing, we need to make sure to use only one
 * @param {string} name - name of the portal
 * @return {boolean}
 */
const isDuplicate = name => !process.env.THEME.includes('ios') && name === 'nav-menu.logout.before';

/**
 * Account holds all the User Account links
 *
 * @param {Object} props -components
 * @param {JSX.Element} props.Section - nav section
 * @param {JSX.Element} props.Item - nav item
 * @param {boolean} props.isUserLoggedIn - logged in status
 * @return {?JSX.Element}
 * @constructor
 */
const Account = (props) => {
  const { name, Section, isUserLoggedIn } = props;
  const showAny = showOverview || showProfile || showAddresses || showOrders;

  if (!isUserLoggedIn || !showAny || isDuplicate(name)) {
    return null;
  }

  return (
    <Section title={LABEL_ACCOUNT_TITLE}>
      {showOverview && (<AccountItem
        {...props}
        replacement={overviewReplacement}
        label={LABEL_ACCOUNT_OVERVIEW}
        icon={ChartIcon}
      />)}
      {showProfile && <AccountItem
        {...props}
        replacement={profileReplacement}
        label={LABEL_ACCOUNT_PROFILE}
        icon={AccountBoxIcon}
      />}
      {showAddresses && <AccountItem
        {...props}
        replacement={addressReplacement}
        label={LABEL_ACCOUNT_ADDRESS}
        icon={BookIcon}
      />}
      {showOrders && <AccountItem
        {...props}
        replacement={ordersReplacement}
        label={LABEL_ACCOUNT_ORDERS}
        icon={BoxIcon}
      />}
    </Section>
  );
};

Account.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  Section: PropTypes.oneOfType([PropTypes.func, PropTypes.symbol]),
};
Account.defaultProps = {
  Section: TitledFragment,
};

export default connect(Account);
