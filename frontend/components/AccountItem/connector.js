import { connect } from 'react-redux';
import { isUserLoggedIn } from '@shopgate/pwa-common/selectors/user';
import { openShopwareAccountPage } from './actions';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  isUserLoggedIn: isUserLoggedIn(state),
});

/**
 * Maps dispatch to props.
 * @param {function} dispatch Dispatch.
 * @param {string} replacement Part of url to be replaced with replacement
 * @returns {Object}
 */
const mapDispatchToProps = (dispatch, { replacement }) => ({
  openAccountPage: () => dispatch(openShopwareAccountPage(replacement)),
});

export default connect(mapStateToProps, mapDispatchToProps);
