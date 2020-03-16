import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { connect } from 'react-redux';

// Components
import ContentDataRow from 'components/ContentDataRow/ContentDataRow';

// Utils
import { sortDataByFieldName, filterData } from 'utils/dataUtils';

// Styles
import './ContentDataGrid.scss';

const FIXED_ROW_HEIGHT = 40;

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

    // console.log('%c renderTableRow() sortState: ', 'color: green;', sortState);
    const filteredData = filterData(
      data,
      searchState.searchField,
      searchState.searchValue,
      searchState.globalSearchValue,
      searchState.filterToggleState,
      searchState.filterEnums
    );

    const sortedData = sortDataByFieldName(
      filteredData,
      sortState.sortFields,
      sortState.sortDirections
    );

    return (
      <AutoSizer>
        {({ width }) => (
          <List
            className="List"
            height={500} // TODO: improve height to auto-height
            width={width}
            itemCount={sortedData.length}
            itemSize={FIXED_ROW_HEIGHT}
            itemData={sortedData}
          >
            {ContentDataRow}
          </List>
        )}
      </AutoSizer>
    );
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
    sortFields: PropTypes.arrayOf(PropTypes.string),
    sortDirections: PropTypes.arrayOf(PropTypes.string),
    isSorting: PropTypes.bool,
  }).isRequired,
  searchState: PropTypes.shape({
    searchField: PropTypes.string,
    searchValue: PropTypes.string,
    searchPopupName: PropTypes.string,
    isSearching: PropTypes.bool,
    globalSearchValue: PropTypes.string,
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
