import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

// Containers
import { SettingsContainer } from 'containers/SettingsContainer';

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
import { useStyles } from './ContentDataGridStyles';

export const ContentDataGrid = ({
  data,
  sortState,
  searchState,
  isPending,
  error,
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

  if (error) {
    return (
      <Grid container>
        <Typography variant="body1">
          Error: {error.message} (Please, update page)
        </Typography>
      </Grid>
    );
  }

  if (isPending) {
    return (
      <Backdrop open={isPending} className={classes.backDropRoot}>
        <CircularProgress />
      </Backdrop>
    );
  }

  return (
    <Grid container item className={classes.contentDataGrid}>
      <SettingsContainer />

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
  isPending: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  setSelectionAction: PropTypes.func,
};

ContentDataGrid.defaultProps = {
  data: [],
  isPending: false,
  error: undefined,
  setSelectionAction: undefined,
};
