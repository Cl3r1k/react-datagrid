import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';
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
  tableWrapper: {
    width: '100%',
    // height: '600px',
    overflow: 'auto',
    height: '100%',
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
      return (
        <div className={clsx(classes.tableWrapper, classes.styledScrollBar)}>
          <HeaderDataGrid hiddenColumns={searchState.hiddenColumns} />
          {excludedData.map((item, index) => (
            <ContentDataRow
              key={item.id}
              index={index}
              item={item}
              isSelected={searchState.selectedItems.includes(item.id)}
              hiddenColumns={searchState.hiddenColumns}
              setSelectionAction={setSelectionAction}
            />
          ))}
        </div>
      );
    }

    return (
      <VirtualizedList
        dataLength={excludedData.length}
        rowHeight={theme.spacing(6)}
        headerHeight={DEFAULT_CONFIG.FIXED_ROW_HEIGHT}
        stickyHeader={
          <HeaderDataGrid hiddenColumns={searchState.hiddenColumns} />
        }
        className={classes.styledScrollBar}
        renderItem={(index, style) => (
          <ContentDataRow
            key={excludedData[index].id}
            index={index}
            item={excludedData[index]}
            style={style}
            isSelected={searchState.selectedItems.includes(
              excludedData[index].id
            )}
            hiddenColumns={searchState.hiddenColumns}
            setSelectionAction={setSelectionAction}
          />
        )}
      />
    );
  };

  return (
    <Grid container item className={classes.contentDataGrid}>
      <Settings />

      {renderTable()}

      <Backdrop
        open={sortState.isSorting || searchState.isSearching}
        className={classes.backDropRoot}
      >
        <CircularProgress />
      </Backdrop>
    </Grid>
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
