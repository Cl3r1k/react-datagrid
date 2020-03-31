import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import ExpandLess from '@material-ui/icons/ExpandLess';

// Styles
// import styles from './SettingDeleteRowsStyles';
// import './SettingDeleteRows.scss';

const SettingDeleteRows = ({ selectionState, deleteRowsAction }) => {
  // const classes = styles();
  return (
    <div className="setting-delete-block">
      <Button
        variant="outlined"
        color="primary"
        disabled={!selectionState}
        onClick={deleteRowsAction}
      >
        Delete selected rows
      </Button>
    </div>
  );
};

SettingDeleteRows.propTypes = {
  selectionState: PropTypes.bool,
  deleteRowsAction: PropTypes.func,
};

SettingDeleteRows.defaultProps = {
  selectionState: false,
  deleteRowsAction: undefined,
};

export default SettingDeleteRows;
