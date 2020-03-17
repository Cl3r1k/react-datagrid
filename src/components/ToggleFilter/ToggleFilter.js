import React from 'react';
import PropTypes from 'prop-types';

const ToggleFilter = ({ filterToggleState, setToggleAction }) => {
  const toggleChangeHandler = ({ currentTarget: { value, checked } }) => {
    setToggleAction(+value, !checked);
  };

  return (
    <>
      <p>Toggle Filter</p>
      <label htmlFor="toggle-1">
        <input
          type="checkbox"
          id="toggle-1"
          value={1}
          checked={filterToggleState === 1}
          onChange={toggleChangeHandler}
        />
        Active
      </label>
      <label htmlFor="toggle-2">
        <input
          type="checkbox"
          id="toggle-2"
          value={2}
          checked={filterToggleState === 2}
          onChange={toggleChangeHandler}
        />
        Inactive
      </label>
    </>
  );
};

ToggleFilter.propTypes = {
  filterToggleState: PropTypes.number.isRequired,
  setToggleAction: PropTypes.func.isRequired,
};

export default ToggleFilter;
