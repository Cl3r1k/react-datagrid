import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Constants
import { ENUM_CONFIG } from 'config/default';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
}));

const animatedComponent = makeAnimated();
const options = ENUM_CONFIG.map(item => ({ value: item, label: item }));

export const FilterEnum = ({ filterEnums, setEnumFilterAction }) => {
  const classes = useStyles();
  const defaultValue = filterEnums.map(item => ({ value: item, label: item }));

  const handleChange = newValue => {
    const enumsSelected = newValue ? newValue.map(item => item.value) : [];
    setEnumFilterAction(enumsSelected);
  };

  return (
    <Grid container item>
      <Grid item xs={12}>
        <Typography variant="overline" gutterBottom>
          Person type
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.root}>
        <Select
          defaultValue={defaultValue}
          closeMenuOnSelect={false}
          components={animatedComponent}
          isMulti
          options={options}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

FilterEnum.propTypes = {
  filterEnums: PropTypes.arrayOf(PropTypes.string),
  setEnumFilterAction: PropTypes.func.isRequired,
};

FilterEnum.defaultProps = {
  filterEnums: [],
};
