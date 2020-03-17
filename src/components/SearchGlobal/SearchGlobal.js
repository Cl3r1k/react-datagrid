import React from 'react';
import PropTypes from 'prop-types';

const SearchGlobal = ({ setGlobalSearchAction }) => {
  const handleInputChange = ({ currentTarget: { value } }) => {
    setGlobalSearchAction(value);
  };

  return (
    <>
      <p>Search through all columns</p>
      <input
        type="text"
        placeholder="Enter value to search"
        onChange={handleInputChange}
      />
    </>
  );
};

SearchGlobal.propTypes = {
  setGlobalSearchAction: PropTypes.func.isRequired,
};

export default SearchGlobal;
