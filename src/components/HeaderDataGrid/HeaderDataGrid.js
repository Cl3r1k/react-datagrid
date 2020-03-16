import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { sortData } from 'actions/sortActions';
import { searchData, setSearchPopup } from 'actions/searchActions';

// Components
import HeaderDataCell from 'components/HeaderDataCell/HeaderDataCell';

// Constants
import { MAP } from 'config/default';

// Styles
import './HeaderDataGrid.scss';

const HeaderDataGrid = ({
  /* data, */
  sortState,
  searchState,
  sortDataAction,
  setSearchPopupAction,
  searchDataAction,
  style,
}) => {
  // console.log('in HeaderDataGrid', data);

  return (
    <div className="sticky header-data-grid" style={style}>
      <HeaderDataCell title="Avatar" style={{ width: MAP[1].columnWidth }} />
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
        style={{ width: MAP[2].columnWidth }}
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
        style={{ width: MAP[3].columnWidth }}
      />
      <HeaderDataCell
        title="RegisterDate"
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
        style={{ width: MAP[4].columnWidth }}
      />
      <HeaderDataCell
        title="LastVisit"
        fieldName="lastVisit"
        sortState={
          sortState.sortDirections[sortState.sortFields.indexOf('lastVisit')]
        }
        isSortable
        sortDataAction={sortDataAction}
        style={{ width: MAP[5].columnWidth }}
      />
      <HeaderDataCell title="Type" style={{ width: MAP[6].columnWidth }} />
      <HeaderDataCell title="Instant" style={{ width: MAP[7].columnWidth }} />
      <HeaderDataCell title="Money" style={{ width: MAP[8].columnWidth }} />
      <HeaderDataCell title="Active" style={{ width: MAP[9].columnWidth }} />
      <HeaderDataCell
        title="Description"
        style={{ width: MAP[10].columnWidth }}
      />
    </div>
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
  }).isRequired,
  sortDataAction: PropTypes.func.isRequired,
  setSearchPopupAction: PropTypes.func.isRequired,
  searchDataAction: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

HeaderDataGrid.defaultProps = {
  style: '',
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
