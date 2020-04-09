/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext /* forwardRef */ } from 'react';
import PropTypes from 'prop-types';
// import { FixedSizeList as List } from 'react-window';
// import AutoSizer from 'react-virtualized-auto-sizer';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

// Actions
import { setSelection } from 'actions/searchActions';

// Containers
import Settings from 'containers/Settings/Settings';

// Components
import { ContentDataRow } from 'components/ContentDataRow/ContentDataRow';
import HeaderDataGrid from 'components/HeaderDataGrid/HeaderDataGrid';
import { VirtualizedList } from 'components/VirtualizedList/VirtualizedList';

// Utils
import { sortDataByFieldName, filterData, excludeById } from 'utils/dataUtils';

// Themes
import theme from 'config/theme';

// Constants
import { DEFAULT_CONFIG } from 'config/default';

// Styles
// import './ContentDataGrid.scss';

const useStyles = makeStyles(defaultTheme => ({
  contentDataGrid: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    // overflow: 'auto',
    // padding: '5px',
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    // backgroundColor: '#ffffff',
    // backgroundColor: 'teal',
  },
  styledScrollBar: {
    // * Scrollbars with styles
    // The emerging W3C standard that is currently Firefox-only
    scrollbarWidth: 'thin',
    scrollbarColor: `${defaultTheme.palette.primary.light} ${defaultTheme.color.grayed}`,

    /* Works on Chrome/Edge/Safari */
    '&::-webkit-scrollbar': {
      width: '10px',
      height: '10px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: defaultTheme.color.grayed,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: defaultTheme.palette.primary.light,
      border: `3px solid ${defaultTheme.color.grayed}`,
    },
  },
  backDropRoot: {
    zIndex: '100',
  },
}));

const StickyListContext = createContext();
StickyListContext.displayName = 'StickyListContext';

// const ItemWrapper = ({ data, index, style }) => {
//   const {
//     ItemRenderer,
//     stickyIndices,
//     customData,
//     selectedItems,
//     setSelectionAction,
//     hiddenColumns,
//   } = data;

//   if (stickyIndices && stickyIndices.includes(index)) {
//     return null;
//   }

//   return (
//     <ItemRenderer
//       index={index}
//       style={style}
//       data={customData}
//       selectedItems={selectedItems}
//       setSelectionAction={setSelectionAction}
//       hiddenColumns={hiddenColumns}
//     />
//   );
// };

// const innerElementType = forwardRef(
//   ({ children, hiddenColumns, ...rest }, ref) => (
//     <StickyListContext.Consumer>
//       {() => (
//         <div ref={ref} {...rest}>
//           <HeaderDataGrid
//             style={{
//               top: 0,
//               left: 0,
//               height: DEFAULT_CONFIG.FIXED_ROW_HEIGHT,
//             }}
//             hiddenColumns={hiddenColumns}
//           />

//           {children}
//         </div>
//       )}
//     </StickyListContext.Consumer>
//   )
// );

// const StickyList = ({
//   children,
//   stickyIndices,
//   customData,
//   selectedItems,
//   setSelectionAction,
//   hiddenColumns,
//   ...rest
// }) => (
//   <StickyListContext.Provider value={{ ItemRenderer: children, stickyIndices }}>
//     <List
//       itemData={{
//         ItemRenderer: children,
//         stickyIndices,
//         customData,
//         selectedItems,
//         setSelectionAction,
//         hiddenColumns,
//       }}
//       {...rest}
//     >
//       {ItemWrapper}
//     </List>
//   </StickyListContext.Provider>
// );

const ContentDataGrid = ({
  data,
  sortState,
  searchState,
  setSelectionAction,
}) => {
  const classes = useStyles();
  const renderTable = () => {
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

    if (!searchState.virtualizationState) {
      // return (
      //   <AutoSizer>
      //     {({ height }) => (
      //       <div className="table-wrapper">
      //         <div className="table-container" style={{ height }}>
      //           <HeaderDataGrid
      //             style={{
      //               top: 0,
      //               left: 0,
      //               height: DEFAULT_CONFIG.FIXED_ROW_HEIGHT,
      //             }}
      //             hiddenColumns={searchState.hiddenColumns}
      //           />
      //           {excludedData.map((item, i) => (
      //             <ContentDataRow
      //               key={item.id}
      //               index={i}
      //               data={excludedData}
      //               isVirtualization={searchState.virtualizationState}
      //               selectedItems={searchState.selectedItems}
      //               hiddenColumns={searchState.hiddenColumns}
      //               setSelectionAction={setSelectionAction}
      //             />
      //           ))}
      //         </div>
      //       </div>
      //     )}
      //   </AutoSizer>
      // );
      return (
        <div
          style={{
            width: '100%',
            // height: '600px',
            overflow: 'auto',
            height: '100%',
          }}
          className={classes.styledScrollBar}
        >
          <HeaderDataGrid hiddenColumns={searchState.hiddenColumns} />
          {excludedData.map((item, index) => (
            <ContentDataRow
              key={item.id}
              index={index}
              item={item}
              // data={excludedData}
              // isVirtualization={searchState.virtualizationState}
              // selectedItems={searchState.selectedItems}
              isSelected={searchState.selectedItems.includes(item.id)}
              hiddenColumns={searchState.hiddenColumns}
              setSelectionAction={setSelectionAction}
            />
            // <Grid
            //   container
            //   item
            //   style={{
            //     height: '40px',
            //     width: '950px',
            //     backgroundColor: index % 2 ? '#b36666' : '#7ac194',
            //     flexShrink: '0',
            //   }}
            // >
            //   item {item.id} - {index}
            // </Grid>
          ))}
        </div>
      );
    }

    // const listToRender = [...Array(100).keys()];
    // console.log('listToRender', listToRender);

    const rowHeight = theme.spacing(6);
    // console.log('rowHeight', rowHeight);

    return (
      <VirtualizedList
        dataLength={excludedData.length}
        rowHeight={rowHeight}
        // stickyHeader={
        //   <div style={{ height: '40px', backgroundColor: '#8494a5' }}>
        //     some header
        //   </div>
        // }
        headerHeight={DEFAULT_CONFIG.FIXED_ROW_HEIGHT}
        stickyHeader={
          <>
            {/* <Settings /> */}
            <HeaderDataGrid hiddenColumns={searchState.hiddenColumns} />
          </>
        }
        className={classes.styledScrollBar}
        // renderItem={(index, style) => (
        //   <p
        //     style={{
        //       ...style,
        //       margin: '0',
        //       height: '40px',
        //       width: '950px',
        //       backgroundColor: 'teal',
        //     }}
        //   >
        //     some item index {index}
        //   </p>
        // )}
        renderItem={(index, style) => (
          <ContentDataRow
            key={excludedData[index].id}
            index={index}
            item={excludedData[index]}
            style={style}
            // data={excludedData}
            // isVirtualization={searchState.virtualizationState}
            // selectedItems={searchState.selectedItems}
            isSelected={searchState.selectedItems.includes(
              excludedData[index].id
            )}
            hiddenColumns={searchState.hiddenColumns}
            setSelectionAction={setSelectionAction}
          />
        )}
      >
        {/* <p style={{ backgroundColor: 'teal' }}>some item</p>
        <p style={{ backgroundColor: 'teal' }}>some item</p>
        <p style={{ backgroundColor: 'teal' }}>some item</p>
        <p style={{ backgroundColor: 'teal' }}>some item</p>
        <p
          style={{ backgroundColor: 'pink', position: 'absolute', top: '80px' }}
        >
          some item
        </p> */}
      </VirtualizedList>
    );

    // return (
    //   <AutoSizer>
    //     {({ width, height }) => (
    //       <div className="table-wrapper">
    //         <StickyList
    //           className="table-container"
    //           height={height}
    //           innerElementType={innerElementType}
    //           itemCount={excludedData.length}
    //           itemSize={DEFAULT_CONFIG.FIXED_ROW_HEIGHT}
    //           stickyIndices={[]}
    //           width={width}
    //           customData={excludedData}
    //           selectedItems={searchState.selectedItems}
    //           setSelectionAction={setSelectionAction}
    //           hiddenColumns={searchState.hiddenColumns}
    //         >
    //           {ContentDataRow}
    //         </StickyList>
    //       </div>
    //     )}
    //   </AutoSizer>
    // );
  };

  return (
    <Grid container item className={classes.contentDataGrid}>
      {/* <Grid container item className={clsx(classes.sticky, classes.preHeader)}>
        PREHEADER info
      </Grid> */}
      <Settings />

      {/* <Grid
        container
        item
        className={`${classes.sticky} ${classes.headerTable}`}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map(val => (
          <Box component="div" style={{ width: val * 30 + 30 }}>
            n:{val} len:{val * 30 + 30}
          </Box>
        ))}
      </Grid> */}

      {/* <HeaderDataGrid hiddenColumns={searchState.hiddenColumns} /> */}

      {renderTable()}
      <Backdrop
        open={sortState.isSorting || searchState.isSearching}
        className={classes.backDropRoot}
      >
        <CircularProgress />
      </Backdrop>
      {/* {Array(30)
        .fill(0)
        .map((el, index) => (
          <Grid
            container
            item
            style={{
              height: '40px',
              width: '950px',
              backgroundColor: index % 2 ? '#b36666' : '#7ac194',
              flexShrink: '0',
            }}
          >
            item {el} - {index}
          </Grid>
        ))} */}
    </Grid>
    // <div>
    //   {Array(30)
    //     .fill(0)
    //     .map((el, index) => (
    //       <div
    //         style={{
    //           height: '40px',
    //           width: '850px',
    //           backgroundColor: index % 2 ? '#b36666' : '#7ac194',
    //         }}
    //       >
    //         item {el} - {index}
    //       </div>
    //     ))}
    // </>
  );

  // return <div className="content-data-grid">{renderTable()}</div>;
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
