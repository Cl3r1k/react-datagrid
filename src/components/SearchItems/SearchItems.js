import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  searchContainer: {
    position: 'relative',
  },
  searchPopup: {
    position: 'absolute',
    bottom: '-110px',
    right: '0',
    width: '200px',
    padding: '7px',
    borderRadius: '2px',
    backgroundColor: theme.color.grayed,
    boxShadow: '0 0 5px 2px #a0a0b3',
    zIndex: '20',
  },
  activeSearch: {
    color: theme.palette.secondary.light,
  },
  inputRoot: {
    '& .MuiOutlinedInput-root': {
      '& input': {
        backgroundColor: theme.palette.grey[50],
        padding: '10px',
      },
    },
  },
  buttonsBlock: {
    padding: '10px',
  },
}));

const SearchItems = ({
  fieldName,
  searchField,
  searchValue,
  searchPopupName,
  searchDataAction,
  setSearchPopupAction,
}) => {
  const [visibleState, setVisibleState] = useState(false);
  const [searchValueState, setSearchValueState] = useState({
    value: '',
    isActive: false,
  });
  const classes = useStyles();

  useEffect(() => {
    if (fieldName === searchPopupName) {
      setVisibleState(true);

      if (fieldName === searchField) {
        setSearchValueState({ value: searchValue, isActive: !!searchValue });
      }
    } else {
      setVisibleState(false);
    }
  }, [fieldName, searchField, searchValue, searchPopupName]);

  const searchHandler = () => {
    searchDataAction(fieldName, searchValueState.value);
    setSearchPopupAction('');
  };

  const resetHandler = () => {
    searchDataAction(fieldName, '');
    setSearchPopupAction('');
  };

  const popupHandler = () => {
    setSearchPopupAction(fieldName === searchPopupName ? '' : fieldName);
  };

  const inputChangeHandler = evt => {
    setSearchValueState({
      ...searchValueState,
      value: evt.currentTarget.value,
    });
  };

  return (
    <Grid container item justify="flex-end" className={classes.searchContainer}>
      {visibleState && (
        <Grid container className={classes.searchPopup}>
          <TextField
            variant="outlined"
            placeholder="Search value"
            value={searchValueState.value}
            onChange={inputChangeHandler}
            className={classes.inputRoot}
          />
          <Grid
            container
            item
            justify="space-between"
            spacing={1}
            className={classes.buttonsBlock}
          >
            <Button variant="contained" onClick={searchHandler}>
              Search
            </Button>
            <Button variant="contained" onClick={resetHandler}>
              Reset
            </Button>
          </Grid>
        </Grid>
      )}
      <IconButton aria-label="search icon" size="small" onClick={popupHandler}>
        <SearchIcon
          size="inherit"
          className={clsx(
            fieldName === searchField && searchValue && classes.activeSearch
          )}
        />
      </IconButton>
    </Grid>
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
