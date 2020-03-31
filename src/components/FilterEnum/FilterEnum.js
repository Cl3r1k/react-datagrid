import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Constants
import { ENUM_CONFIG } from 'config/default';

// Styles
import './FilterEnum.scss';

const animatedComponent = makeAnimated();
const options = ENUM_CONFIG.map(item => ({ value: item, label: item }));

const FilterEnum = ({ filterEnums, setEnumFilterAction }) => {
  const defaultValue = filterEnums.map(item => ({ value: item, label: item }));

  const handleChange = newValue => {
    // TODO: Improve this part, try to use 'enumsSelected' to simplify (like) -> enumsSelected = newValue ? newValue.map(item => item.value) : []
    if (newValue) {
      const enumsSelected = newValue.map(item => item.value);
      setEnumFilterAction(enumsSelected);
    } else {
      setEnumFilterAction([]);
    }
  };

  return (
    <Grid container item>
      <Grid item xs={12}>
        <Typography variant="overline" gutterBottom>
          Person type
        </Typography>
      </Grid>
      <Grid item xs={12}>
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

export default FilterEnum;
