import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { setVirtualization, deleteRows } from 'actions/searchActions';

// Components
import SettingVirtualization from 'components/SettingVirtualization/SettingVirtualization';
import SettingDeleteRows from 'components/SettingDeleteRows/SettingDeleteRows';

// Styles
import './Settings.scss';

const Settings = ({ appState, setVirtualizationAction, deleteRowsAction }) => {
  return (
    <div className="settings-container">
      <SettingVirtualization
        virtualizationState={appState.virtualizationState}
        setVirtualizationAction={setVirtualizationAction}
      />
      <SettingDeleteRows
        selectionState={!!appState.selectedItems.length}
        deleteRowsAction={deleteRowsAction}
      />
    </div>
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
    deleteRowsAction: () => dispatch(deleteRows()),
  };
};

Settings.propTypes = {
  appState: PropTypes.shape({
    virtualizationState: PropTypes.bool,
    selectedItems: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setVirtualizationAction: PropTypes.func,
  deleteRowsAction: PropTypes.func,
};

Settings.defaultProps = {
  setVirtualizationAction: undefined,
  deleteRowsAction: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
