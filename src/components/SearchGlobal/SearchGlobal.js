import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

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
    <Grid container item>
      {/* <input
        type="text"
        value={inputValue}
        placeholder="Search through all columns"
        onChange={handleInputChange}
      /> */}
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-input-search">
          Search through all columns
        </InputLabel>
        <OutlinedInput
          id="outlined-input-search"
          value={inputValue}
          onChange={handleInputChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="global search" edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={200}
        />
      </FormControl>
    </Grid>
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
