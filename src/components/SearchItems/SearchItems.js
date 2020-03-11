import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Styles
import './SearchItems.scss';

const SearchItems = ({
  fieldName,
  searchField,
  searchValue,
  searchPopupName,
  searchDataAction,
  setSearchPopupAction,
}) => {
  // console.log('SearchItems title: ', fieldName);
  const [visibleState, setVisibleState] = useState(false);
  const [searchValueState, setSearchValueState] = useState({
    value: '',
    isActive: false,
  });

  useEffect(() => {
    if (fieldName === searchPopupName) {
      setVisibleState(true);

      if (fieldName === searchField) {
        // Here we can set searched value for popup
        console.log('%c searchValue: ', 'color: pink', searchValue);
        setSearchValueState({ value: searchValue, isActive: true });
      }
    } else {
      setVisibleState(false);
    }
  }, [fieldName, searchField, searchValue, searchPopupName]);

  const searchHandler = () => {
    // TODO: Here we should 'search' data and close popup
    // console.log('searchValueState', searchValueState);
    searchDataAction(fieldName, searchValueState.value);
    // setSearchValueState({ isActive: true });
    setSearchPopupAction('');
  };

  const resetHandler = () => {
    // TODO: Here we should reset 'searched' data and close popup
    searchDataAction(fieldName, '');
    setSearchValueState({ isActive: false });
    setSearchPopupAction('');
  };

  const popupHandler = () => {
    setSearchPopupAction(fieldName === searchPopupName ? '' : fieldName);
  };

  const inputChangeHandler = evt => {
    // console.log('evt.currentTarget.value: ', evt.currentTarget.value);
    setSearchValueState({
      ...searchValueState,
      value: evt.currentTarget.value,
    });
  };

  return (
    <div className="search-container">
      {visibleState && (
        <div className="search-popup">
          <input
            className="search-input"
            type="text"
            placeholder="Enter search value"
            value={searchValueState.value}
            onChange={inputChangeHandler}
          />
          <div className="buttons-block">
            <button
              type="button"
              className="button-styled"
              onClick={searchHandler}
            >
              Search
            </button>
            <button
              type="button"
              className="button-styled"
              onClick={resetHandler}
            >
              Reset
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        className={`search-icon ${
          searchValueState.isActive ? 'active-search' : ''
        }`}
        onClick={popupHandler}
      />
    </div>
  );
};

SearchItems.propTypes = {
  fieldName: PropTypes.string,
  searchField: PropTypes.string,
  searchValue: PropTypes.string,
  searchPopupName: PropTypes.string,
  searchDataAction: PropTypes.func.isRequired,
  setSearchPopupAction: PropTypes.func.isRequired,
};

SearchItems.defaultProps = {
  fieldName: 'fieldName',
  searchField: '',
  searchValue: '',
  searchPopupName: '',
};

export default SearchItems;
