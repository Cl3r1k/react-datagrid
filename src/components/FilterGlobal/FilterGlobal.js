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
import { FILTER_DELAY } from 'constants/constants';

export const FilterGlobal = ({ filterGlobalValue, setFilterGlobalAction }) => {
  const [inputValue, setInputValue] = useState(filterGlobalValue);

  useEffect(() => {
    setInputValue(filterGlobalValue);
  }, [filterGlobalValue]);

  const delayedSearchAction = useCallback(
    debounce(value => {
      setFilterGlobalAction(value);
    }, FILTER_DELAY),
    []
  );

  const handleInputChange = ({ currentTarget: { value } }) => {
    setInputValue(value);
    delayedSearchAction(value);
  };

  return (
    <Grid container item>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-input-search">Search...</InputLabel>
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
          labelWidth={70}
        />
      </FormControl>
    </Grid>
  );
};

FilterGlobal.propTypes = {
  filterGlobalValue: PropTypes.string,
  setFilterGlobalAction: PropTypes.func.isRequired,
};

FilterGlobal.defaultProps = {
  filterGlobalValue: '',
};
