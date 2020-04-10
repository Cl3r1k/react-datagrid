import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Actions
import { sortData } from 'actions/sortActions';
import { searchData, setSearchPopup } from 'actions/searchActions';

// Components
import HeaderDataCell from 'components/HeaderDataCell/HeaderDataCell';

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

const HeaderDataGrid = ({
  sortState,
  searchState,
  sortDataAction,
  setSearchPopupAction,
  searchDataAction,
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
            sortState.sortDirections[
              sortState.sortFields.indexOf(MAP[key].name)
            ]
          }
          sortOrder={sortState.sortFields.indexOf(MAP[key].name)}
          isSortable={MAP[key].isSortable}
          isSearchable={MAP[key].isSearchable}
          sortDataAction={sortDataAction}
          searchField={searchState.searchField}
          searchValue={searchState.searchValue}
          searchPopupName={searchState.searchPopupName}
          setSearchPopupAction={setSearchPopupAction}
          searchDataAction={searchDataAction}
          isHidden={searchState.hiddenColumns[MAP[key].name]}
          isSticky={MAP[key].sticky}
          style={{ width: MAP[key].columnWidth, left: MAP[key].leftPosition }}
        />
      ))}
    </Grid>
  );
};

HeaderDataGrid.propTypes = {
  sortState: PropTypes.shape({
    sortFields: PropTypes.arrayOf(PropTypes.string),
    sortDirections: PropTypes.arrayOf(PropTypes.string),
    isSorting: PropTypes.bool,
  }).isRequired,
  searchState: PropTypes.shape({
    searchField: PropTypes.string,
    searchValue: PropTypes.string,
    searchPopupName: PropTypes.string,
    isSearching: PropTypes.bool,
    hiddenColumns: PropTypes.objectOf(PropTypes.bool),
  }).isRequired,
  sortDataAction: PropTypes.func.isRequired,
  setSearchPopupAction: PropTypes.func.isRequired,
  searchDataAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    sortState: state.sortState,
    searchState: state.searchState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sortDataAction: (sortField, shiftKey) =>
      dispatch(sortData(sortField, shiftKey)),
    setSearchPopupAction: searchPopupName =>
      dispatch(setSearchPopup(searchPopupName)),
    searchDataAction: (searchField, searchValue) =>
      dispatch(searchData(searchField, searchValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDataGrid);
