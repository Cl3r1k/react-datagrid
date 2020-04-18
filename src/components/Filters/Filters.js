import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Components
import { FilterGlobal } from 'components/FilterGlobal/FilterGlobal';
import { FilterEnum } from 'components/FilterEnum/FilterEnum';
import { ToggleFilter } from 'components/ToggleFilter/ToggleFilter';

const useStyles = makeStyles({
  filterContainer: {
    // backgroundColor: 'red',
  },
});

export const Filters = ({
  filterState,
  setToggleAction,
  setEnumFilterAction,
  setFilterGlobalAction,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.filterContainer}>
      <Grid item>
        <Typography
          variant="h6"
          gutterBottom
          style={{ textTransform: 'uppercase' }}
        >
          Filter Data
        </Typography>
      </Grid>
      <FilterGlobal
        filterGlobalValue={filterState.filterGlobalValue}
        setFilterGlobalAction={setFilterGlobalAction}
      />
      <FilterEnum
        filterEnums={filterState.filterEnums}
        setEnumFilterAction={setEnumFilterAction}
      />
      <ToggleFilter
        filterToggleState={filterState.filterToggleState}
        setToggleAction={setToggleAction}
      />
    </Grid>
  );
};

Filters.propTypes = {
  filterState: PropTypes.shape({
    filterGlobalValue: PropTypes.string,
    filterEnums: PropTypes.arrayOf(PropTypes.string),
    filterToggleState: PropTypes.number,
  }).isRequired,
  setToggleAction: PropTypes.func.isRequired,
  setEnumFilterAction: PropTypes.func.isRequired,
  setFilterGlobalAction: PropTypes.func.isRequired,
};
