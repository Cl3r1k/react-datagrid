import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

export const SettingDeleteRows = ({ selectionState, deleteRowsAction }) => {
  return (
    <Grid item>
      <Button
        variant="outlined"
        color="secondary"
        disabled={!selectionState}
        onClick={deleteRowsAction}
        startIcon={<DeleteIcon />}
      >
        Delete selected rows
      </Button>
    </Grid>
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
