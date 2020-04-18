import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export const SettingVirtualization = ({
  virtualizationState,
  setVirtualizationAction,
}) => {
  const handleChange = ({ currentTarget: { checked } }) => {
    setVirtualizationAction(checked);
  };

  return (
    <Grid item>
      <FormControlLabel
        control={
          <Switch checked={virtualizationState} onChange={handleChange} />
        }
        label="Virtualization"
      />
    </Grid>
  );
};

SettingVirtualization.propTypes = {
  virtualizationState: PropTypes.bool,
  setVirtualizationAction: PropTypes.func,
};

SettingVirtualization.defaultProps = {
  virtualizationState: false,
  setVirtualizationAction: undefined,
};
