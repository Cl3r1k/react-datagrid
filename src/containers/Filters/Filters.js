import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { setToggle, setEnumFilter } from 'actions/searchActions';

// Components
import FilterEnum from 'components/FilterEnum/FilterEnum';
import ToggleFilter from 'components/ToggleFilter/ToggleFilter';

// Styles
import './Filters.scss';

const Filters = ({ appState, setToggleAction, setEnumFilterAction }) => {
  return (
    <div className="filters-container">
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
