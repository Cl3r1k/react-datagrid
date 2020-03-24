import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

// Modules
import debounce from 'lodash/debounce';

// Constants
import { SEARCH_DELAY } from 'constants/constants';

const SearchGlobal = ({ globalSearchValue, setGlobalSearchAction }) => {
  const [inputValue, setInputValue] = useState(globalSearchValue);

  useEffect(() => {
    setInputValue(globalSearchValue);
  }, [globalSearchValue]);

  const delayedSearchAction = useCallback(
    debounce(value => {
      setGlobalSearchAction(value);
    }, SEARCH_DELAY),
    []
  );

  const handleInputChange = ({ currentTarget: { value } }) => {
    setInputValue(value);
    delayedSearchAction(value);
  };

  return (
    <>
      <p>Search through all columns</p>
      <input
        type="text"
        value={inputValue}
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
