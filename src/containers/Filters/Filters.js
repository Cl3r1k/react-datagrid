import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import {
  setToggle,
  setEnumFilter,
  setGlobalSearch,
} from 'actions/searchActions';

// Components
import SearchGlobal from 'components/SearchGlobal/SearchGlobal';
import FilterEnum from 'components/FilterEnum/FilterEnum';
import ToggleFilter from 'components/ToggleFilter/ToggleFilter';

// Styles
import './Filters.scss';

const Filters = ({
  appState,
  setToggleAction,
  setEnumFilterAction,
  setGlobalSearchAction,
}) => {
  return (
    <div className="filters-container">
      <SearchGlobal setGlobalSearchAction={setGlobalSearchAction} />
      <FilterEnum setEnumFilterAction={setEnumFilterAction} />
      <ToggleFilter
        filterToggleState={appState.filterToggleState}
        setToggleAction={setToggleAction}
      />
    </div>
  );
};

Filters.propTypes = {
  appState: PropTypes.shape({
    filterEnums: PropTypes.arrayOf(PropTypes.string),
    filterToggleState: PropTypes.number,
  }).isRequired,
  setToggleAction: PropTypes.func.isRequired,
  setEnumFilterAction: PropTypes.func.isRequired,
  setGlobalSearchAction: PropTypes.func.isRequired,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
