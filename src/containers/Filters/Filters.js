import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { setToggle } from 'actions/searchActions';

// Components
import ToggleFilter from 'components/ToggleFilter/ToggleFilter';

// Styles
import './Filters.scss';

const Filters = ({ filterState, setToggleAction }) => {
  return (
    <div className="filters-container">
      <ToggleFilter
        filterState={filterState}
        setToggleAction={setToggleAction}
      />
    </div>
  );
};

Filters.propTypes = {
  filterState: PropTypes.shape({
    filterToggleState: PropTypes.number,
  }).isRequired,
  setToggleAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    filterState: state.searchState.filterState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToggleAction: (toggleValue, checkedStatus) =>
      dispatch(setToggle(toggleValue, checkedStatus)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
