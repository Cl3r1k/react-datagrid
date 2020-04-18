import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Components
import { SortItems } from 'components/SortItems/SortItems';
import { FilterItems } from 'components/FilterItems/FilterItems';

const useStyles = makeStyles({
  headerDataCell: {
    padding: '0 5px',
    flexWrap: 'nowrap',
  },
  titleContainer: {
    flexWrap: 'nowrap',
  },
  cellTitle: {
    userSelect: 'none',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
  },
  sticky: {
    position: 'sticky',
    top: 0,
    left: 0,
    backgroundColor: '#ffffff',
    zIndex: '11',
  },
  bordered: {
    borderRight: '1px solid #bfbfbf',
  },
});

export const HeaderDataCell = props => {
  const {
    title,
    isSortable,
    isSearchable,
    fieldName,
    sortState,
    sortOrder,
    setSortParamsAction,
    filterKey,
    filterValue,
    searchPopupName,
    setFilterDataAction,
    setSearchPopupAction,
    isHidden,
    isSticky,
    style,
  } = props;
  const classes = useStyles();

  if (isHidden) {
    return null;
  }

  return (
    <Grid
      container
      item
      alignItems="center"
      className={clsx(
        classes.headerDataCell,
        isSticky && classes.sticky,
        title === 'Name' && classes.bordered
      )}
      style={style}
    >
      <Grid
        container
        item
        alignItems="center"
        className={classes.titleContainer}
      >
        {title && (
          <Typography variant="body2" className={classes.cellTitle}>
            {title}
          </Typography>
        )}
        {isSortable && (
          <SortItems
            fieldName={fieldName}
            sortState={sortState}
            sortOrder={sortOrder}
            setSortParamsAction={setSortParamsAction}
          />
        )}
      </Grid>
      {isSearchable && (
        <FilterItems
          fieldName={fieldName}
          filterKey={filterKey}
          filterValue={filterValue}
          searchPopupName={searchPopupName}
          setFilterDataAction={setFilterDataAction}
          setSearchPopupAction={setSearchPopupAction}
        />
      )}
    </Grid>
  );
};

HeaderDataCell.propTypes = {
  title: PropTypes.string,
  fieldName: PropTypes.string,
  sortState: PropTypes.string,
  sortOrder: PropTypes.number,
  isSortable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  setSortParamsAction: PropTypes.func,
  filterKey: PropTypes.string,
  filterValue: PropTypes.string,
  searchPopupName: PropTypes.string,
  setFilterDataAction: PropTypes.func,
  setSearchPopupAction: PropTypes.func,
  isHidden: PropTypes.bool,
  isSticky: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

HeaderDataCell.defaultProps = {
  title: 'CellTitle',
  fieldName: '',
  sortState: '',
  sortOrder: -1,
  isSortable: false,
  isSearchable: false,
  setSortParamsAction: undefined,
  filterKey: '',
  filterValue: '',
  searchPopupName: '',
  setFilterDataAction: undefined,
  setSearchPopupAction: undefined,
  isHidden: false,
  isSticky: false,
  style: '',
};
