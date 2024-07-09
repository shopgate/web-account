import { connect } from 'react-redux';
import { openPage } from './actions';

/**
 * Passes down string replacement to pipeline call
 *
 * @param {Function} dispatch Dispatch.
 * @param {string} replacement Part of url to be replaced with replacement
 * @returns {Object}
 */
const mapDispatchToProps = (dispatch, { replacement }) => ({
  openAccountPage: () => dispatch(openPage(replacement)),
});

export default connect(null, mapDispatchToProps);
