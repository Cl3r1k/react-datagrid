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

const FilterEnum = ({ filterEnums, setEnumFilterAction }) => {
  const defaultValue = filterEnums.map(item => ({ value: item, label: item }));

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
        defaultValue={defaultValue}
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
  filterEnums: PropTypes.arrayOf(PropTypes.string),
  setEnumFilterAction: PropTypes.func.isRequired,
};

FilterEnum.defaultProps = {
  filterEnums: [],
};

export default FilterEnum;
