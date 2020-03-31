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

// Modules
import { CSVLink } from 'react-csv';

// Styles
import './Settings.scss';

const useStyles = makeStyles({
  sticky: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 11,
  },
  preHeader: {
    height: '95px',
    backgroundColor: '#aad5fb',
  },
});

const Settings = ({
  appState,
  setVirtualizationAction,
  deleteRowsAction,
  setVisibilityAction,
}) => {
  const classes = useStyles();
  // const csvData = excludedData.map(item => {
  //   const filteredItem = {};
  //   Object.keys(item).forEach((key, index) => {
  //     if (!MAP[index].isHidden && !searchState.hiddenColumns[key]) {
  //       if (typeof item[key] === 'object') {
  //         filteredItem[key] = Object.values(item[key]).join(' ');
  //       } else {
  //         filteredItem[key] = item[key];
  //       }
  //     }
  //   });

  //   return filteredItem;
  // });

  // TODO: Refactor CSV to separate componets

  return (
    // <div className="settings-container">
    //   <SettingVirtualization
    //     virtualizationState={appState.virtualizationState}
    //     setVirtualizationAction={setVirtualizationAction}
    //   />
    //   <SettingDeleteRows
    //     selectionState={!!appState.selectedItems.length}
    //     deleteRowsAction={deleteRowsAction}
    //   />
    //   <SettingVisibility
    //     hiddenColumns={appState.hiddenColumns}
    //     setVisibilityAction={setVisibilityAction}
    //   />
    //   <SettingQueryString />
    //   <CSVLink
    //     className="csv-link"
    //     data="to fix me"
    //     // data={csvData}
    //     filename="data-grid.csv"
    //     target="_blank"
    //   >
    //     Download CSV
    //   </CSVLink>
    // </div>
    <Grid container item className={clsx(classes.sticky, classes.preHeader)}>
      <SettingVirtualization
        virtualizationState={appState.virtualizationState}
        setVirtualizationAction={setVirtualizationAction}
      />
      <SettingDeleteRows
        selectionState={!!appState.selectedItems.length}
        deleteRowsAction={deleteRowsAction}
      />
      <SettingVisibility
        hiddenColumns={appState.hiddenColumns}
        setVisibilityAction={setVisibilityAction}
      />
      <SettingQueryString />
      <CSVLink
        className="csv-link"
        data="to fix me"
        // data={csvData}
        filename="data-grid.csv"
        target="_blank"
      >
        Download CSV
      </CSVLink>
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
