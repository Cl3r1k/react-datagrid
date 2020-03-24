import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import {
  setVirtualization,
  deleteRows,
  setVisibility,
} from 'actions/searchActions';

// Components
import SettingVirtualization from 'components/SettingVirtualization/SettingVirtualization';
import SettingDeleteRows from 'components/SettingDeleteRows/SettingDeleteRows';
import SettingVisibility from 'components/SettingVisibility/SettingVisibility';
import SettingQueryString from 'components/SettingQueryString/SettingQueryString';

// Styles
import './Settings.scss';

const Settings = ({
  appState,
  setVirtualizationAction,
  deleteRowsAction,
  setVisibilityAction,
}) => {
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
      <SettingVisibility
        hiddenColumns={appState.hiddenColumns}
        setVisibilityAction={setVisibilityAction}
      />
      <SettingQueryString />
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
    setVisibilityAction: (fieldName, hiddenState) =>
      dispatch(setVisibility(fieldName, hiddenState)),
  };
};

Settings.propTypes = {
  appState: PropTypes.shape({
    virtualizationState: PropTypes.bool,
    selectedItems: PropTypes.arrayOf(PropTypes.string),
    hiddenColumns: PropTypes.objectOf(PropTypes.bool),
  }).isRequired,
  setVirtualizationAction: PropTypes.func,
  deleteRowsAction: PropTypes.func,
  setVisibilityAction: PropTypes.func,
};

Settings.defaultProps = {
  setVirtualizationAction: undefined,
  deleteRowsAction: undefined,
  setVisibilityAction: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
