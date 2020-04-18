import { connect } from 'react-redux';

// Actions
import { setSelection } from 'actions/dataActions';

// Selectors
import { processDataSelector } from 'selectors/processDataSelector';

// Reducers
import { getDataPending, getData, getDataError } from 'reducers/dataReducer';

// Components
import { ContentDataGrid } from 'components/ContentDataGrid/ContentDataGrid';

const mapStoreToProps = state => {
  return {
    data: processDataSelector(state),
    appState: state.appState,
    dataState: state.dataState,
    sortState: state.sortState,
    filterState: state.filterState,
    isPending: getDataPending(state.dataState),
    fetchedData: getData(state.dataState),
    error: getDataError(state.dataState),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectionAction: selectedItem => dispatch(setSelection(selectedItem)),
  };
};

export const ContentDataGridContainer = connect(
  mapStoreToProps,
  mapDispatchToProps
)(ContentDataGrid);
