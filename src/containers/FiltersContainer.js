import { connect } from 'react-redux';

// Actions
import {
  setToggle,
  setEnumFilter,
  setFilterGlobal,
} from 'actions/filterActions';

// Components
import { Filters } from 'components/Filters/Filters';

const mapStateToProps = state => {
  return {
    filterState: state.filterState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToggleAction: (toggleValue, checkedStatus) =>
      dispatch(setToggle(toggleValue, checkedStatus)),
    setEnumFilterAction: enumsSelected =>
      dispatch(setEnumFilter(enumsSelected)),
    setFilterGlobalAction: filterGlobalValue =>
      dispatch(setFilterGlobal(filterGlobalValue)),
  };
};

export const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
