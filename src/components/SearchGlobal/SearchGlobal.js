import React from 'react';
import PropTypes from 'prop-types';

const SearchGlobal = ({ setGlobalSearchAction }) => {
  const handleInputChange = ({ currentTarget: { value } }) => {
    // console.log('evt: ', evt);
    console.log('value: ', value);
    setGlobalSearchAction(value);
  };

  return (
    <>
      <p>Search throw all columns</p>
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
