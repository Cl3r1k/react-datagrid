/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { connect } from 'react-redux';

// Actions
import { setSelection } from 'actions/searchActions';

// Components
import ContentDataRow from 'components/ContentDataRow/ContentDataRow';
import HeaderDataGrid from 'components/HeaderDataGrid/HeaderDataGrid';

// Utils
import { sortDataByFieldName, filterData, excludeById } from 'utils/dataUtils';

// Constants
import { DEFAULT_CONFIG } from 'config/default';

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
    />
  );
};

const innerElementType = forwardRef(({ children, ...rest }, ref) => (
  <StickyListContext.Consumer>
    {() => (
      <div ref={ref} {...rest}>
        <HeaderDataGrid
          style={{
            top: 0,
            left: 0,
            height: DEFAULT_CONFIG.FIXED_ROW_HEIGHT,
          }}
        />

        {children}
      </div>
    )}
  </StickyListContext.Consumer>
));

const StickyList = ({
  children,
  stickyIndices,
  customData,
  selectedItems,
  setSelectionAction,
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

    const excludedData = excludeById(sortedData, searchState.deletedItems);

    // console.log('excludedData', excludedData);
    if (!searchState.virtualizationState) {
      return (
        <AutoSizer>
          {({ height }) => (
            <div className="table-container" style={{ height }}>
              <HeaderDataGrid
                style={{
                  top: 0,
                  left: 0,
                  height: DEFAULT_CONFIG.FIXED_ROW_HEIGHT,
                }}
              />
              {excludedData.map((item, i) => (
                <ContentDataRow
                  key={item.id}
                  index={i}
                  data={excludedData}
                  isVirtualization={searchState.virtualizationState}
                  selectedItems={searchState.selectedItems}
                  setSelectionAction={setSelectionAction}
                />
              ))}
            </div>
          )}
        </AutoSizer>
      );
    }

    return (
      <AutoSizer>
        {({ width, height }) => (
          <StickyList
            className="List"
            height={height}
            innerElementType={innerElementType}
            itemCount={excludedData.length}
            itemSize={DEFAULT_CONFIG.FIXED_ROW_HEIGHT}
            stickyIndices={[0]}
            width={width}
            customData={excludedData}
            selectedItems={searchState.selectedItems}
            setSelectionAction={setSelectionAction}
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
    virtualizationState: PropTypes.bool,
    selectedItems: PropTypes.arrayOf(PropTypes.string),
    deletedItems: PropTypes.arrayOf(PropTypes.string),
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
