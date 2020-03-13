import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Utils
import { sortDataByFieldName, filterData } from 'utils/dataUtils';

// Styles
import './ContentDataGrid.scss';

const ContentDataGrid = ({ data, sortState, searchState }) => {
  const renderTableRow = () => {
    if (sortState.isSorting || searchState.isSearching) {
      return (
        <tr>
          <td>
            <p>Loading... (Spinner...)</p>
          </td>
        </tr>
      );
    }

    console.log('%c renderTableRow() sortState: ', 'color: green;', sortState);
    const sortedData = sortDataByFieldName(
      data,
      sortState.sortName,
      sortState.sortDirection
    );

    const filteredData = filterData(
      sortedData,
      searchState.searchField,
      searchState.searchValue,
      searchState.filterToggleState,
      searchState.filterEnums
    );

    return filteredData.map(el => (
      <tr key={el.id}>
        <td>{el.avatar}</td>
        <td>{el.name}</td>
        <td>{el.score}</td>
        <td>{el.registerDate}</td>
        <td>{el.lastVisit}</td>
        <td>{el.type}</td>
        <td>{el.instant}</td>
        <td>{el.money.currencySymbol}</td>
        <td>{el.active ? 'true' : 'false'}</td>
      </tr>
    ));
  };

  return (
    <div className="content-data-grid">
      <table className="content-data-grid--table">
        <tbody>{renderTableRow()}</tbody>
      </table>
    </div>
  );
};

ContentDataGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
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
    filterToggleState: PropTypes.number,
    filterEnums: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

ContentDataGrid.defaultProps = {
  data: [],
};

const mapStoreToProps = state => {
  return {
    sortState: state.sortState,
    searchState: state.searchState,
  };
};

export default connect(mapStoreToProps)(ContentDataGrid);
