import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
  root: {},
  switchBase: {
    '&$checked': {
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  track: {},
  checked: {},
  thumb: {},
  focusVisible: {},
}));

const ToggleFilter = ({ filterToggleState, setToggleAction }) => {
  const classes = useStyles();

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
                classes={{
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
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
                classes={{
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
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
