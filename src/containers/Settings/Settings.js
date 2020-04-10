import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Actions
import {
  setVirtualization,
  deleteRows,
  setVisibility,
} from 'actions/searchActions';

// Components
import SettingVirtualization from 'components/SettingVirtualization/SettingVirtualization';
import SettingDeleteRows from 'components/SettingDeleteRows/SettingDeleteRows';
import SettingVisibility from 'components/SettingVisibility/SettingVisibility';
import SettingQueryString from 'components/SettingQueryString/SettingQueryString';
import CSVExport from 'components/CSVExport/CSVExport';

const useStyles = makeStyles(theme => ({
  sticky: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 11,
  },
  settingsContainer: {
    height: '95px',
    paddingLeft: theme.spacing(2),
    backgroundColor: '#ffffff',
  },
}));

const Settings = ({
  appState,
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
          selectionState={!!appState.selectedItems.length}
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
        <CSVExport />
        <SettingVisibility
          hiddenColumns={appState.hiddenColumns}
          setVisibilityAction={setVisibilityAction}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    appState: state.searchState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVirtualizationAction: virtualizationState =>
      dispatch(setVirtualization(virtualizationState)),
    deleteRowsAction: () => dispatch(deleteRows()),
    setVisibilityAction: (fieldName, hiddenState) =>
      dispatch(setVisibility(fieldName, hiddenState)),
  };
};

Settings.propTypes = {
  appState: PropTypes.shape({
    virtualizationState: PropTypes.bool,
    selectedItems: PropTypes.arrayOf(PropTypes.string),
    hiddenColumns: PropTypes.objectOf(PropTypes.bool),
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
