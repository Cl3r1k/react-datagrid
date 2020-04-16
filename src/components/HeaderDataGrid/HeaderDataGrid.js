import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import { HeaderDataCell } from 'components/HeaderDataCell/HeaderDataCell';

// Constants
import { MAP } from 'config/default';

const useStyles = makeStyles(theme => ({
  sticky: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: '11',
  },
  headerTable: {
    flexShrink: '0',
    flexWrap: 'nowrap',
    // top: '95px',
    height: theme.spacing(5),
    width: 'fit-content',
    backgroundColor: '#ffffff',
  },
}));

export const HeaderDataGrid = ({
  appState,
  sortState,
  filterState,
  setSortParamsAction,
  setSearchPopupAction,
  setFilterDataAction,
}) => {
  const classes = useStyles();

  return (
    <Grid container item className={clsx(classes.headerTable, classes.sticky)}>
      {Object.keys(MAP).map(key => (
        <HeaderDataCell
          key={key}
          title={MAP[key].title}
          fieldName={MAP[key].name}
          sortState={
            sortState.directions[sortState.sortKeys.indexOf(MAP[key].name)]
          }
          sortOrder={sortState.sortKeys.indexOf(MAP[key].name)}
          isSortable={MAP[key].isSortable}
          isSearchable={MAP[key].isSearchable}
          setSortParamsAction={setSortParamsAction}
          filterKey={filterState.filterKey}
          filterValue={filterState.filterValue}
          searchPopupName={filterState.searchPopupName}
          setSearchPopupAction={setSearchPopupAction}
          setFilterDataAction={setFilterDataAction}
          isHidden={appState.hiddenColumns[MAP[key].name]}
          isSticky={MAP[key].sticky}
          style={{ width: MAP[key].columnWidth, left: MAP[key].leftPosition }}
        />
      ))}
    </Grid>
  );
};

HeaderDataGrid.propTypes = {
  appState: PropTypes.shape({
    hiddenColumns: PropTypes.objectOf(PropTypes.bool),
  }).isRequired,
  sortState: PropTypes.shape({
    sortKeys: PropTypes.arrayOf(PropTypes.string),
    directions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  filterState: PropTypes.shape({
    filterKey: PropTypes.string,
    filterValue: PropTypes.string,
    searchPopupName: PropTypes.string,
  }).isRequired,
  setSortParamsAction: PropTypes.func.isRequired,
  setSearchPopupAction: PropTypes.func.isRequired,
  setFilterDataAction: PropTypes.func.isRequired,
};
