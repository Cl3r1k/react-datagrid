import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

// Containers
import { SettingsContainer } from 'containers/SettingsContainer';
import { HeaderDataGridContainer } from 'containers/HeaderDataGridContainer';

// Components
import { ContentDataRow } from 'components/ContentDataRow/ContentDataRow';
import { VirtualizedList } from 'components/VirtualizedList/VirtualizedList';

// Themes
import { theme } from 'config/theme';

// Constants
import { DEFAULT_CONFIG } from 'config/default';

// Styles
import { useStyles } from './ContentDataGridStyles';

export const ContentDataGrid = ({
  data,
  appState,
  dataState,
  sortState,
  filterState,
  isPending,
  error,
  setSelectionAction,
}) => {
  const classes = useStyles();

  const renderTable = () => {
    if (!appState.virtualizationState) {
      return (
        <div className={clsx(classes.tableWrapper, classes.styledScrollBar)}>
          <HeaderDataGridContainer />
          {data.map((item, index) => (
            <ContentDataRow
              key={item.id}
              index={index}
              item={item}
              isSelected={dataState.selectedItems.includes(item.id)}
              hiddenColumns={appState.hiddenColumns}
              setSelectionAction={setSelectionAction}
            />
          ))}
        </div>
      );
    }

    return (
      <VirtualizedList
        dataLength={data.length}
        rowHeight={theme.spacing(6)}
        headerHeight={DEFAULT_CONFIG.FIXED_ROW_HEIGHT}
        stickyHeader={<HeaderDataGridContainer />}
        className={classes.styledScrollBar}
        renderItem={(index, style) => (
          <ContentDataRow
            key={data[index].id}
            index={index}
            item={data[index]}
            style={style}
            isSelected={dataState.selectedItems.includes(data[index].id)}
            hiddenColumns={appState.hiddenColumns}
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
        open={sortState.isSorting || filterState.isFiltering}
        className={classes.backDropRoot}
      >
        <CircularProgress />
      </Backdrop>
    </Grid>
  );
};

ContentDataGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  appState: PropTypes.shape({
    virtualizationState: PropTypes.bool,
    hiddenColumns: PropTypes.objectOf(PropTypes.bool),
  }).isRequired,
  dataState: PropTypes.shape({
    selectedItems: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  sortState: PropTypes.shape({
    sortFields: PropTypes.arrayOf(PropTypes.string),
    sortDirections: PropTypes.arrayOf(PropTypes.string),
    isSorting: PropTypes.bool,
  }).isRequired,
  filterState: PropTypes.shape({
    filterKey: PropTypes.string,
    filterValue: PropTypes.string,
    filterGlobalValue: PropTypes.string,
    filterToggleState: PropTypes.number,
    filterEnums: PropTypes.arrayOf(PropTypes.string).isRequired,
    isFiltering: PropTypes.bool,

    searchPopupName: PropTypes.string,
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
