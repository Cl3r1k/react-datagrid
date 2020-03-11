import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { sortData } from 'actions/sortActions';
import { searchData, setSearchPopup } from 'actions/searchActions';

// Components
import HeaderDataCell from 'components/HeaderDataCell/HeaderDataCell';

// Styles
import './HeaderDataGrid.scss';

const HeaderDataGrid = ({
  /* data, */
  sortState,
  searchState,
  sortDataAction,
  setSearchPopupAction,
  searchDataAction,
}) => {
  // console.log('in HeaderDataGrid', data);

  return (
    <div className="header-data-grid">
      <table className="header-data-grid--table">
        <thead>
          <tr className="header-data-grid--row">
            <HeaderDataCell title="Avatar" />
            <HeaderDataCell
              title="Name"
              fieldName="name"
              sortName={sortState.sortName}
              sortDirection={sortState.sortDirection}
              isSortable
              isSearchable
              sortDataAction={sortDataAction}
              searchField={searchState.searchField}
              searchValue={searchState.searchValue}
              searchPopupName={searchState.searchPopupName}
              setSearchPopupAction={setSearchPopupAction}
              searchDataAction={searchDataAction}
            />
            <HeaderDataCell
              title="Score"
              fieldName="score"
              sortName={sortState.sortName}
              sortDirection={sortState.sortDirection}
              isSortable
              isSearchable
              sortDataAction={sortDataAction}
              searchField={searchState.searchField}
              searchValue={searchState.searchValue}
              searchPopupName={searchState.searchPopupName}
              setSearchPopupAction={setSearchPopupAction}
              searchDataAction={searchDataAction}
            />
            <HeaderDataCell
              title="RegisterDate"
              fieldName="registerDate"
              sortName={sortState.sortName}
              sortDirection={sortState.sortDirection}
              isSortable
              isSearchable
              sortDataAction={sortDataAction}
              searchField={searchState.searchField}
              searchValue={searchState.searchValue}
              searchPopupName={searchState.searchPopupName}
              setSearchPopupAction={setSearchPopupAction}
              searchDataAction={searchDataAction}
            />
            <HeaderDataCell
              title="LastVisit"
              fieldName="lastVisit"
              sortName={sortState.sortName}
              sortDirection={sortState.sortDirection}
              isSortable
              sortDataAction={sortDataAction}
            />
            <HeaderDataCell title="Role" />
            <HeaderDataCell title="Instant" />
            <HeaderDataCell title="Money currencySymbol" />
            <HeaderDataCell title="Active" />
          </tr>
        </thead>
      </table>
    </div>
  );
};

HeaderDataGrid.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object),
  sortState: PropTypes.shape({
    sortName: PropTypes.string,
    sortDirection: PropTypes.number,
    error: PropTypes.string,
    isSorting: PropTypes.bool,
  }).isRequired,
  searchState: PropTypes.shape({
    searchField: PropTypes.string,
    searchValue: PropTypes.string,
    searchPopupName: PropTypes.string,
    error: PropTypes.string,
    isSearching: PropTypes.bool,
  }).isRequired,
  sortDataAction: PropTypes.func.isRequired,
  setSearchPopupAction: PropTypes.func.isRequired,
  searchDataAction: PropTypes.func.isRequired,
};

// HeaderDataGrid.defaultProps = {
//   data: [],
// };

const mapStateToProps = state => {
  return {
    sortState: state.sortState,
    searchState: state.searchState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sortDataAction: (fieldName, sortDirection) =>
      dispatch(sortData(fieldName, sortDirection)),
    setSearchPopupAction: searchPopupName =>
      dispatch(setSearchPopup(searchPopupName)),
    searchDataAction: (searchField, searchValue) =>
      dispatch(searchData(searchField, searchValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDataGrid);
