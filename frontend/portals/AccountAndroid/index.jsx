import React from 'react';
import PropTypes from 'prop-types';
import { AccountBoxIcon, BoxIcon, NavDrawer } from '@shopgate/engage/components';
import isiOSTheme from '../../helpers/isiOSTheme';
import AccountItem from '../../components/AccountItem';
import { BookIcon, ChartIcon } from '../../icons';
import {
  LABEL_ACCOUNT_ADDRESS,
  LABEL_ACCOUNT_ORDERS,
  LABEL_ACCOUNT_OVERVIEW,
  LABEL_ACCOUNT_PROFILE,
} from '../../constants';
import getConfig from '../../helpers/getConfig';
import connect from './connector';

const {
  showOverview, showProfile, showAddresses, showOrders,
  overviewReplacement, profileReplacement, addressReplacement, ordersReplacement,
} = getConfig();

/**
 * Account holds all the User Account links
 *
 * @param {Object} props -components
 * @param {JSX.Element} props.Section - nav section
 * @param {JSX.Element} props.Item - nav item
 * @param {boolean} props.isUserLoggedIn - logged in status
 * @return {JSX.Element}
 * @constructor
 */
const Account = (props) => {
  const { Section, isUserLoggedIn } = props;
  const showAny = showOverview || showProfile || showAddresses || showOrders;

  if (isiOSTheme || !isUserLoggedIn || !showAny) {
    return null;
  }

  return (
    <Section>
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
  Divider: PropTypes.func.isRequired,
  Headline: PropTypes.func.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
  Item: PropTypes.oneOf([NavDrawer.Item]).isRequired,
  Section: PropTypes.func.isRequired,
};

export default connect(Account);
