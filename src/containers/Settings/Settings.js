import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { setVirtualization } from 'actions/searchActions';

// Components
import SettingVirtualization from 'components/SettingVirtualization/SettingVirtualization';

// Styles
import './Settings.scss';

const Settings = ({ appState, setVirtualizationAction }) => {
  return (
    <SettingVirtualization
      virtualizationState={appState.virtualizationState}
      setVirtualizationAction={setVirtualizationAction}
    />
  );
};

const mapStateToProps = state => {
  return {
    appState: state.searchState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVirtualizationAction: virtualizationState =>
      dispatch(setVirtualization(virtualizationState)),
  };
};

Settings.propTypes = {
  appState: PropTypes.shape({
    virtualizationState: PropTypes.bool,
  }).isRequired,
  setVirtualizationAction: PropTypes.func,
};

Settings.defaultProps = {
  setVirtualizationAction: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
