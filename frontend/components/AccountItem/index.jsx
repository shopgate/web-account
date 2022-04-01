import React from 'react';
import PropTypes from 'prop-types';
import { I18n, InfoIcon, NavDrawer } from '@shopgate/engage/components';
import connect from './connector';
import MoreMenuItem from '../MoreMenueItem';

/**
 * @param {Object} props Props
 * @returns {?JSX.Element}
 */
const AccountItem = (props) => {
  const {
    Item,
    openAccountPage,
    icon,
    label,
  } = props;

  return (
    <Item
      label={label}
      icon={icon}
      onClick={openAccountPage}
    >
      <I18n.Text string={label} />
    </Item>
  );
};

AccountItem.propTypes = {
  Item: PropTypes.oneOf([NavDrawer.Item, MoreMenuItem]).isRequired,
  icon: PropTypes.func,
  label: PropTypes.string,
  openAccountPage: PropTypes.func,
};

AccountItem.defaultProps = {
  openAccountPage: () => {},
  label: '',
  icon: InfoIcon,
};

export default connect(AccountItem);
