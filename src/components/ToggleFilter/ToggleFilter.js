import React from 'react';
import PropTypes from 'prop-types';

const ToggleFilter = ({ filterState, setToggleAction }) => {
  console.log('%c ToggleFilter filterState: ', 'color: green;', filterState);
  // console.log('ToggleFilter filterState: ', setToggleAction);

  const toggleChangeHandler = ({ currentTarget: { value, checked } }) => {
    // console.log('value: ', value);
    // console.log('checked: ', checked);
    // console.log('value: ', value);
    setToggleAction(+value, !checked);
  };

  return (
    <>
      <p>Toggle Filter</p>
      <input
        type="checkbox"
        value={1}
        checked={filterState.filterToggleState === 1}
        onChange={toggleChangeHandler}
      />
      Active
      <input
        type="checkbox"
        value={2}
        checked={filterState.filterToggleState === 2}
        onChange={toggleChangeHandler}
      />
      Inactive
    </>
  );
};

ToggleFilter.propTypes = {
  filterState: PropTypes.shape({
    filterToggleState: PropTypes.number,
  }).isRequired,
  setToggleAction: PropTypes.func.isRequired,
};

export default ToggleFilter;
