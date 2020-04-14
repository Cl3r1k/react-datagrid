import { connect } from 'react-redux';

// Actions
import {
  setToggle,
  setEnumFilter,
  setGlobalSearch,
} from 'actions/searchActions';

// Components
import { Filters } from 'components/Filters/Filters';

const mapStateToProps = state => {
  return {
    appState: state.searchState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToggleAction: (toggleValue, checkedStatus) =>
      dispatch(setToggle(toggleValue, checkedStatus)),
    setEnumFilterAction: enumsSelected =>
      dispatch(setEnumFilter(enumsSelected)),
    setGlobalSearchAction: globalSearchValue =>
      dispatch(setGlobalSearch(globalSearchValue)),
  };
};

export const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
