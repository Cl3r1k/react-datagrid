import { connect } from 'react-redux';

// Actions
import { setSelection } from 'actions/searchActions';

// Reducers
import { getDataPending, getData, getDataError } from 'reducers/dataReducer';

// Components
import { ContentDataGrid } from 'components/ContentDataGrid/ContentDataGrid';

const mapStoreToProps = state => {
  return {
    data: state.dataState.data,
    sortState: state.sortState,
    searchState: state.searchState,
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
