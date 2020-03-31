import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const ToggleFilter = ({ filterToggleState, setToggleAction }) => {
  const toggleChangeHandler = ({ currentTarget: { value, checked } }) => {
    setToggleAction(+value, !checked);
  };

  return (
    <Grid container item>
      <Grid item sm={12}>
        <Typography variant="overline" gutterBottom>
          Activity
        </Typography>
      </Grid>
      <Grid container item sm={12}>
        <Grid item sm={6}>
          <FormControlLabel
            control={
              <Switch
                value={1}
                checked={filterToggleState === 1}
                onChange={toggleChangeHandler}
              />
            }
            label="Active"
          />
        </Grid>
        <Grid item sm={6}>
          <FormControlLabel
            control={
              <Switch
                value={2}
                checked={filterToggleState === 2}
                onChange={toggleChangeHandler}
              />
            }
            label="Inactive"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

ToggleFilter.propTypes = {
  filterToggleState: PropTypes.number.isRequired,
  setToggleAction: PropTypes.func.isRequired,
};

export default ToggleFilter;
