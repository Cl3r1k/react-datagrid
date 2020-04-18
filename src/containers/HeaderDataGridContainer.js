import { connect } from 'react-redux';

// Actions
import { setSortParams } from 'actions/sortActions';
import { setFilterData, setSearchPopup } from 'actions/filterActions';

// Components
import { HeaderDataGrid } from 'components/HeaderDataGrid/HeaderDataGrid';

const mapStateToProps = state => {
  return {
    appState: state.appState,
    sortState: state.sortState,
    filterState: state.filterState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSortParamsAction: (sortKey, shiftFlag) =>
      dispatch(setSortParams(sortKey, shiftFlag)),
    setSearchPopupAction: searchPopupName =>
      dispatch(setSearchPopup(searchPopupName)),
    setFilterDataAction: (filterKey, filterValue) =>
      dispatch(setFilterData(filterKey, filterValue)),
  };
};

export const HeaderDataGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderDataGrid);
