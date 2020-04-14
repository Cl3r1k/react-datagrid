import { connect } from 'react-redux';

// Components
import { Settings } from 'components/Settings/Settings';

// Actions
import {
  setVirtualization,
  deleteRows,
  setVisibility,
} from 'actions/searchActions';

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

export const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
