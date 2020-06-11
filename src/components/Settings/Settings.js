import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Containers
import { CSVExportContainer } from 'containers/CSVExportContainer';

// Components
import { SettingVirtualization } from 'components/SettingVirtualization/SettingVirtualization';
import { SettingDeleteRows } from 'components/SettingDeleteRows/SettingDeleteRows';
import { SettingVisibility } from 'components/SettingVisibility/SettingVisibility';
import { SettingQueryString } from 'components/SettingQueryString/SettingQueryString';

const useStyles = makeStyles(theme => ({
  sticky: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 11,
  },
  settingsContainer: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    backgroundColor: '#ffffff',
  },
}));

export const Settings = ({
  appState,
  dataState,
  setVirtualizationAction,
  deleteRowsAction,
  setVisibilityAction,
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      justify="space-between"
      className={clsx(classes.sticky, classes.settingsContainer)}
    >
      <Grid
        container
        item
        alignItems="center"
        xs={12}
        sm={12}
        md={6}
        spacing={2}
      >
        <SettingDeleteRows
          selectionState={!!dataState.selectedItems.length}
          deleteRowsAction={deleteRowsAction}
        />
        <SettingVirtualization
          virtualizationState={appState.virtualizationState}
          setVirtualizationAction={setVirtualizationAction}
        />
      </Grid>
      <Grid
        container
        item
        alignItems="center"
        justify="flex-end"
        xs={12}
        sm={12}
        md={6}
        spacing={1}
      >
        <SettingQueryString />
        <CSVExportContainer />
        <SettingVisibility
          hiddenColumns={appState.hiddenColumns}
          setVisibilityAction={setVisibilityAction}
        />
      </Grid>
    </Grid>
  );
};

Settings.propTypes = {
  appState: PropTypes.shape({
    virtualizationState: PropTypes.bool,
    hiddenColumns: PropTypes.objectOf(PropTypes.bool),
  }).isRequired,
  dataState: PropTypes.shape({
    selectedItems: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setVirtualizationAction: PropTypes.func,
  deleteRowsAction: PropTypes.func,
  setVisibilityAction: PropTypes.func,
};

Settings.defaultProps = {
  setVirtualizationAction: undefined,
  deleteRowsAction: undefined,
  setVisibilityAction: undefined,
};
