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

// Styles
// import './HeaderDataGrid.scss';

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
    top: '95px',
    height: theme.spacing(5),
    width: 'auto',
    backgroundColor: '#ffffff',
  },
}));

const HeaderDataGrid = ({
  /* data, */
  sortState,
  searchState,
  sortDataAction,
  setSearchPopupAction,
  searchDataAction,
  // style,
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

      {/* <HeaderDataCell
        title=""
        className="sticky"
        style={{ width: MAP[0].columnWidth, left: MAP[0].leftPosition }}
      />
      <HeaderDataCell
        title="Avatar"
        className="sticky"
        style={{ width: MAP[1].columnWidth, left: MAP[1].leftPosition }}
      />
      <HeaderDataCell
        title="Name"
        fieldName="name"
        sortState={
          sortState.sortDirections[sortState.sortFields.indexOf('name')]
        }
        isSortable
        isSearchable
        sortDataAction={sortDataAction}
        searchField={searchState.searchField}
        searchValue={searchState.searchValue}
        searchPopupName={searchState.searchPopupName}
        setSearchPopupAction={setSearchPopupAction}
        searchDataAction={searchDataAction}
        isHidden={searchState.hiddenColumns.name}
        className="sticky"
        style={{ width: MAP[2].columnWidth, left: MAP[2].leftPosition }}
      />
      <HeaderDataCell
        title="Score"
        fieldName="score"
        sortState={
          sortState.sortDirections[sortState.sortFields.indexOf('score')]
        }
        isSortable
        isSearchable
        sortDataAction={sortDataAction}
        searchField={searchState.searchField}
        searchValue={searchState.searchValue}
        searchPopupName={searchState.searchPopupName}
        setSearchPopupAction={setSearchPopupAction}
        searchDataAction={searchDataAction}
        isHidden={searchState.hiddenColumns.score}
        style={{ width: MAP[3].columnWidth }}
      />
      <HeaderDataCell
        title="Reg Date"
        fieldName="registerDate"
        sortState={
          sortState.sortDirections[sortState.sortFields.indexOf('registerDate')]
        }
        isSortable
        isSearchable
        sortDataAction={sortDataAction}
        searchField={searchState.searchField}
        searchValue={searchState.searchValue}
        searchPopupName={searchState.searchPopupName}
        setSearchPopupAction={setSearchPopupAction}
        searchDataAction={searchDataAction}
        isHidden={searchState.hiddenColumns.registerDate}
        style={{ width: MAP[4].columnWidth }}
      />
      <HeaderDataCell
        title="LastVisit"
        fieldName="lastVisit"
        sortState={
          sortState.sortDirections[sortState.sortFields.indexOf('lastVisit')]
        }
        isSortable
        isHidden={searchState.hiddenColumns.lastVisit}
        sortDataAction={sortDataAction}
        style={{ width: MAP[5].columnWidth }}
      />
      <HeaderDataCell
        title="Person Type"
        style={{ width: MAP[6].columnWidth }}
      />
      <HeaderDataCell title="Instant" style={{ width: MAP[7].columnWidth }} />
      <HeaderDataCell title="Money" style={{ width: MAP[8].columnWidth }} />
      <HeaderDataCell title="Active" style={{ width: MAP[9].columnWidth }} />
      <HeaderDataCell
        title="Description"
        style={{ width: MAP[10].columnWidth }}
      /> */}
    </Grid>

    // <div className="sticky header-data-grid" style={style}>
    //   <HeaderDataCell
    //     title=""
    //     className="sticky"
    //     style={{ width: MAP[0].columnWidth, left: MAP[0].leftPosition }}
    //   />
    //   <HeaderDataCell
    //     title="Avatar"
    //     className="sticky"
    //     style={{ width: MAP[1].columnWidth, left: MAP[1].leftPosition }}
    //   />
    //   <HeaderDataCell
    //     title="Name"
    //     fieldName="name"
    //     sortState={
    //       sortState.sortDirections[sortState.sortFields.indexOf('name')]
    //     }
    //     isSortable
    //     isSearchable
    //     sortDataAction={sortDataAction}
    //     searchField={searchState.searchField}
    //     searchValue={searchState.searchValue}
    //     searchPopupName={searchState.searchPopupName}
    //     setSearchPopupAction={setSearchPopupAction}
    //     searchDataAction={searchDataAction}
    //     isHidden={searchState.hiddenColumns.name}
    //     className="sticky"
    //     style={{ width: MAP[2].columnWidth, left: MAP[2].leftPosition }}
    //   />
    //   <HeaderDataCell
    //     title="Score"
    //     fieldName="score"
    //     sortState={
    //       sortState.sortDirections[sortState.sortFields.indexOf('score')]
    //     }
    //     isSortable
    //     isSearchable
    //     sortDataAction={sortDataAction}
    //     searchField={searchState.searchField}
    //     searchValue={searchState.searchValue}
    //     searchPopupName={searchState.searchPopupName}
    //     setSearchPopupAction={setSearchPopupAction}
    //     searchDataAction={searchDataAction}
    //     isHidden={searchState.hiddenColumns.score}
    //     style={{ width: MAP[3].columnWidth }}
    //   />
    //   <HeaderDataCell
    //     title="Reg Date"
    //     fieldName="registerDate"
    //     sortState={
    //       sortState.sortDirections[sortState.sortFields.indexOf('registerDate')]
    //     }
    //     isSortable
    //     isSearchable
    //     sortDataAction={sortDataAction}
    //     searchField={searchState.searchField}
    //     searchValue={searchState.searchValue}
    //     searchPopupName={searchState.searchPopupName}
    //     setSearchPopupAction={setSearchPopupAction}
    //     searchDataAction={searchDataAction}
    //     isHidden={searchState.hiddenColumns.registerDate}
    //     style={{ width: MAP[4].columnWidth }}
    //   />
    //   <HeaderDataCell
    //     title="LastVisit"
    //     fieldName="lastVisit"
    //     sortState={
    //       sortState.sortDirections[sortState.sortFields.indexOf('lastVisit')]
    //     }
    //     isSortable
    //     isHidden={searchState.hiddenColumns.lastVisit}
    //     sortDataAction={sortDataAction}
    //     style={{ width: MAP[5].columnWidth }}
    //   />
    //   <HeaderDataCell
    //     title="Person Type"
    //     style={{ width: MAP[6].columnWidth }}
    //   />
    //   <HeaderDataCell title="Instant" style={{ width: MAP[7].columnWidth }} />
    //   <HeaderDataCell title="Money" style={{ width: MAP[8].columnWidth }} />
    //   <HeaderDataCell title="Active" style={{ width: MAP[9].columnWidth }} />
    //   <HeaderDataCell
    //     title="Description"
    //     style={{ width: MAP[10].columnWidth }}
    //   />
    // </div>
  );
};

HeaderDataGrid.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object),
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
  // style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

// HeaderDataGrid.defaultProps = {
//   style: '',
// };

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
