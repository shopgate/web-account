import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import Icon from '@shopgate/pwa-ui-shared/icons/InfoIcon';
import connect from './connector';

/**
 * OrderHistory
 * @param {Object} props Props
 * @returns {JSX}
 */
const AccountItem = (props) => {
  const {
    isUserLoggedIn,
    Item,
    show,
    openAccountPage,
    icon,
    label,
  } = props;

  if (!show || !isUserLoggedIn) {
    return null;
  }
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
  isUserLoggedIn: PropTypes.bool.isRequired,
  Item: PropTypes.func.isRequired,
  icon: PropTypes.func,
  label: PropTypes.string,
  openAccountPage: PropTypes.func,
  show: PropTypes.bool,
};

AccountItem.defaultProps = {
  openAccountPage: () => {},
  label: '',
  icon: Icon,
  show: true,
};

export default connect(AccountItem);
