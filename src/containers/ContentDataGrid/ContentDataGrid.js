/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { connect } from 'react-redux';

// Modules
import { CSVLink } from 'react-csv';

// Actions
import { setSelection } from 'actions/searchActions';

// Components
import ContentDataRow from 'components/ContentDataRow/ContentDataRow';
import HeaderDataGrid from 'components/HeaderDataGrid/HeaderDataGrid';

// Utils
import { sortDataByFieldName, filterData, excludeById } from 'utils/dataUtils';

// Constants
import { DEFAULT_CONFIG, MAP } from 'config/default';

// Styles
import './ContentDataGrid.scss';

const StickyListContext = createContext();
StickyListContext.displayName = 'StickyListContext';

const ItemWrapper = ({ data, index, style }) => {
  const {
    ItemRenderer,
    stickyIndices,
    customData,
    selectedItems,
    setSelectionAction,
    hiddenColumns,
  } = data;

  if (stickyIndices && stickyIndices.includes(index)) {
    return null;
  }
  return (
    <ItemRenderer
      index={index}
      style={style}
      data={customData}
      selectedItems={selectedItems}
      setSelectionAction={setSelectionAction}
      hiddenColumns={hiddenColumns}
    />
  );
};

const innerElementType = forwardRef(
  ({ children, hiddenColumns, ...rest }, ref) => (
    <StickyListContext.Consumer>
      {() => (
        <div ref={ref} {...rest}>
          <HeaderDataGrid
            style={{
              top: 0,
              left: 0,
              height: DEFAULT_CONFIG.FIXED_ROW_HEIGHT,
            }}
            hiddenColumns={hiddenColumns}
          />

          {children}
        </div>
      )}
    </StickyListContext.Consumer>
  )
);

const StickyList = ({
  children,
  stickyIndices,
  customData,
  selectedItems,
  setSelectionAction,
  hiddenColumns,
  ...rest
}) => (
  <StickyListContext.Provider value={{ ItemRenderer: children, stickyIndices }}>
    <List
      itemData={{
        ItemRenderer: children,
        stickyIndices,
        customData,
        selectedItems,
        setSelectionAction,
        hiddenColumns,
      }}
      {...rest}
    >
      {ItemWrapper}
    </List>
  </StickyListContext.Provider>
);

const ContentDataGrid = ({
  data,
  sortState,
  searchState,
  setSelectionAction,
}) => {
  const renderTable = () => {
    if (sortState.isSorting || searchState.isSearching) {
      return (
        <div>
          <p>Loading... (Spinner...)</p>
        </div>
      );
    }

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

    const excludedData = excludeById(sortedData, searchState.deletedItems);

    const csvData = excludedData.map(item => {
      const filteredItem = {};
      Object.keys(item).forEach((key, index) => {
        if (!MAP[index].isHidden && !searchState.hiddenColumns[key]) {
          if (typeof item[key] === 'object') {
            filteredItem[key] = Object.values(item[key]).join(' ');
          } else {
            filteredItem[key] = item[key];
          }
        }
      });

      return filteredItem;
    });

    if (!searchState.virtualizationState) {
      return (
        <AutoSizer>
          {({ height }) => (
            <div className="table-wrapper">
              <CSVLink
                className="csv-link"
                data={csvData}
                filename="data-grid.csv"
                target="_blank"
              >
                Download CSV
              </CSVLink>
              <div className="table-container" style={{ height }}>
                <HeaderDataGrid
                  style={{
                    top: 0,
                    left: 0,
                    height: DEFAULT_CONFIG.FIXED_ROW_HEIGHT,
                  }}
                  hiddenColumns={searchState.hiddenColumns}
                />
                {excludedData.map((item, i) => (
                  <ContentDataRow
                    key={item.id}
                    index={i}
                    data={excludedData}
                    isVirtualization={searchState.virtualizationState}
                    selectedItems={searchState.selectedItems}
                    hiddenColumns={searchState.hiddenColumns}
                    setSelectionAction={setSelectionAction}
                  />
                ))}
              </div>
            </div>
          )}
        </AutoSizer>
      );
    }

    return (
      <AutoSizer>
        {({ width, height }) => (
          <div className="table-wrapper">
            <CSVLink
              className="csv-link"
              data={csvData}
              filename="data-grid.csv"
              target="_blank"
            >
              Download CSV
            </CSVLink>
            <StickyList
              className="table-container"
              height={height}
              innerElementType={innerElementType}
              itemCount={excludedData.length}
              itemSize={DEFAULT_CONFIG.FIXED_ROW_HEIGHT}
              stickyIndices={[]}
              width={width}
              customData={excludedData}
              selectedItems={searchState.selectedItems}
              setSelectionAction={setSelectionAction}
              hiddenColumns={searchState.hiddenColumns}
            >
              {ContentDataRow}
            </StickyList>
          </div>
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
    virtualizationState: PropTypes.bool,
    selectedItems: PropTypes.arrayOf(PropTypes.string),
    deletedItems: PropTypes.arrayOf(PropTypes.string),
    hiddenColumns: PropTypes.objectOf(PropTypes.bool),
  }).isRequired,
  setSelectionAction: PropTypes.func,
};

ContentDataGrid.defaultProps = {
  data: [],
  setSelectionAction: undefined,
};

const mapStoreToProps = state => {
  return {
    sortState: state.sortState,
    searchState: state.searchState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectionAction: selectedItem => dispatch(setSelection(selectedItem)),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(ContentDataGrid);
