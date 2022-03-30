import React from 'react';
import Icon from '@shopgate/pwa-ui-shared/icons/AccountBoxIcon';
import isiOSTheme from '../../helpers/isiOSTheme';
import AccountItem from '../../components/AccountItem';
import { MY_ACCOUNT_LABEL, MY_ACCOUNT_REPLACEMENT } from '../../constants';
import getConfig from '../../helpers/getConfig';
import MoreMenuItem from '../../components/MoreMenueItem';

const { showMyAccount } = getConfig();

export default props => (
  <AccountItem
    {...props}
    show={isiOSTheme && showMyAccount}
    replacement={MY_ACCOUNT_REPLACEMENT}
    label={MY_ACCOUNT_LABEL}
    icon={Icon}
    Item={MoreMenuItem}
  />);
