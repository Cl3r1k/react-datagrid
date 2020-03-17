import React from 'react';
import PropTypes from 'prop-types';

const ToggleFilter = ({ filterToggleState, setToggleAction }) => {
  const toggleChangeHandler = ({ currentTarget: { value, checked } }) => {
    setToggleAction(+value, !checked);
  };

  return (
    <>
      <p>Toggle Filter</p>
      <input
        type="checkbox"
        value={1}
        checked={filterToggleState === 1}
        onChange={toggleChangeHandler}
      />
      Active
      <input
        type="checkbox"
        value={2}
        checked={filterToggleState === 2}
        onChange={toggleChangeHandler}
      />
      Inactive
    </>
  );
};

ToggleFilter.propTypes = {
  filterToggleState: PropTypes.number.isRequired,
  setToggleAction: PropTypes.func.isRequired,
};

export default ToggleFilter;
