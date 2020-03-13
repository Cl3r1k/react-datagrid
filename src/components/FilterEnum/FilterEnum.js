/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

// Constants
import { ENUM_CONFIG } from 'config/default';
import { SET_ENUM, UNSET_ENUM } from 'actions/searchActions';

// Styles
import './FilterEnum.scss';

const FilterEnum = ({ filterEnums, setEnumFilterAction }) => {
  console.log('%c FilterEnum filterEnums: ', 'color: green;', filterEnums);

  const changeOptionHandler = ({ currentTarget: { value } }) => {
    // console.log('evt', evt);
    // console.log('evt.currentTarget.value: ', evt.currentTarget.value);
    console.log('changeOptionHandler --- value: ', value);
    setEnumFilterAction(value, SET_ENUM);
  };

  const removeEnumHandler = value => {
    console.log('removeEnumHandler --- value: ', value);
    setEnumFilterAction(value, UNSET_ENUM);
  };

  return (
    <>
      <p>Enum Filter</p>
      <select onChange={changeOptionHandler}>
        {ENUM_CONFIG.map((item, i) => (
          <option key={`${i}-${item}`} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p>
        {filterEnums.map((item, i) => (
          <button
            type="button"
            key={`${i}-${item}`}
            value={item}
            onClick={() => removeEnumHandler(item)}
          >
            {item}
          </button>
        ))}
      </p>
    </>
  );
};

FilterEnum.propTypes = {
  filterEnums: PropTypes.arrayOf(PropTypes.string).isRequired,
  setEnumFilterAction: PropTypes.func.isRequired,
};

export default FilterEnum;
