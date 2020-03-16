/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { connect } from 'react-redux';

// Components
import ContentDataRow from 'components/ContentDataRow/ContentDataRow';
import HeaderDataGrid from 'components/HeaderDataGrid/HeaderDataGrid';

// Utils
import { sortDataByFieldName, filterData } from 'utils/dataUtils';

// Constants
import { DEFAULT_CONFIG } from 'config/default';

// Styles
import './ContentDataGrid.scss';

const StickyListContext = createContext();
StickyListContext.displayName = 'StickyListContext';

const ItemWrapper = ({ data, index, style }) => {
  const { ItemRenderer, stickyIndices, customData } = data;
  // console.log('ItemWrapper data: ', data);
  // console.log('ItemWrapper customData: ', customData);
  if (stickyIndices && stickyIndices.includes(index)) {
    return null;
  }
  return <ItemRenderer index={index} style={style} data={customData} />;
};

const innerElementType = forwardRef(({ children, ...rest }, ref) => (
  <StickyListContext.Consumer>
    {() => (
      <div ref={ref} {...rest}>
        <HeaderDataGrid
          style={{
            top: 0,
            left: 0,
            // width: '100%',
            height: DEFAULT_CONFIG.FIXED_ROW_HEIGHT,
          }}
        />

        {children}
      </div>
    )}
  </StickyListContext.Consumer>
));

const StickyList = ({ children, stickyIndices, customData, ...rest }) => (
  <StickyListContext.Provider value={{ ItemRenderer: children, stickyIndices }}>
    <List
      itemData={{ ItemRenderer: children, stickyIndices, customData }}
      {...rest}
    >
      {ItemWrapper}
    </List>
  </StickyListContext.Provider>
);

const ContentDataGrid = ({ data, sortState, searchState }) => {
  const renderTable = () => {
    if (sortState.isSorting || searchState.isSearching) {
      return (
        <div>
          <p>Loading... (Spinner...)</p>
        </div>
      );
    }

    // console.log('%c renderTable() sortState: ', 'color: green;', sortState);
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

    // console.log('sortedData', sortedData);

    return (
      <AutoSizer>
        {({ width, height }) => (
          <StickyList
            className="List"
            height={height}
            innerElementType={innerElementType}
            itemCount={sortedData.length}
            itemSize={DEFAULT_CONFIG.FIXED_ROW_HEIGHT}
            stickyIndices={[0]}
            width={width}
            customData={sortedData}
          >
            {ContentDataRow}
          </StickyList>
        )}
      </AutoSizer>
    );
  };

  return <div className="content-data-grid">{renderTable()}</div>;
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
