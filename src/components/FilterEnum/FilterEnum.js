import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// Constants
import { ENUM_CONFIG } from 'config/default';

// Styles
import './FilterEnum.scss';

const animatedComponent = makeAnimated();
const options = ENUM_CONFIG.map(item => ({ value: item, label: item }));

const FilterEnum = ({ setEnumFilterAction }) => {
  const handleChange = newValue => {
    if (newValue) {
      const enumsSelected = newValue.map(item => item.value);
      setEnumFilterAction(enumsSelected);
    } else {
      setEnumFilterAction([]);
    }
  };

  return (
    <>
      <p className="enum-component-title">Enum Filter</p>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponent}
        isMulti
        options={options}
        onChange={handleChange}
      />
    </>
  );
};

FilterEnum.propTypes = {
  setEnumFilterAction: PropTypes.func.isRequired,
};

export default FilterEnum;
