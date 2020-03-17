import React from 'react';
import PropTypes from 'prop-types';

const SearchGlobal = ({ globalSearchValue, setGlobalSearchAction }) => {
  const handleInputChange = ({ currentTarget: { value } }) => {
    setGlobalSearchAction(value);
  };

  return (
    <>
      <p>Search through all columns</p>
      <input
        type="text"
        value={globalSearchValue}
        placeholder="Enter value to search"
        onChange={handleInputChange}
      />
    </>
  );
};

SearchGlobal.propTypes = {
  globalSearchValue: PropTypes.string,
  setGlobalSearchAction: PropTypes.func.isRequired,
};

SearchGlobal.defaultProps = {
  globalSearchValue: '',
};

export default SearchGlobal;
