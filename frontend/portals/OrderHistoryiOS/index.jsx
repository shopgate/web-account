import React from 'react';
import Icon from '@shopgate/pwa-ui-shared/icons/BoxIcon';
import isiOSTheme from '../../helpers/isiOSTheme';
import AccountItem from '../../components/AccountItem';
import { ORDER_HISTORY_LABEL, ORDER_HISTORY_REPLACEMENT } from '../../constants';
import getConfig from '../../helpers/getConfig';
import MoreMenuItem from '../../components/MoreMenueItem';

const { showOrderHistory } = getConfig();

export default props => (
  <AccountItem
    {...props}
    replacement={ORDER_HISTORY_REPLACEMENT}
    label={ORDER_HISTORY_LABEL}
    icon={Icon}
    show={isiOSTheme && showOrderHistory}
    Item={MoreMenuItem}
  />);
