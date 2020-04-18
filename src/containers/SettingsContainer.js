import { connect } from 'react-redux';

// Components
import { Settings } from 'components/Settings/Settings';

// Actions
import { setVirtualization, setVisibility } from 'actions/settingsAction';
import { deleteRows } from 'actions/dataActions';

const mapStateToProps = state => {
  return {
    appState: state.appState,
    dataState: state.dataState,
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

export const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
