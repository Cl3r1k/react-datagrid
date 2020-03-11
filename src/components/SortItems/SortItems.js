import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Constants
import { DIRECTION_VALUES } from 'utils/constants';

// Styles
import './SortItems.scss';

const SortItems = ({ fieldName, sortName, sortDirection, sortDataAction }) => {
  const {
    DEFAULT_DIRECTION,
    ASCENDING_DIRECTION,
    DESCENDING_DIRECTION,
  } = DIRECTION_VALUES;
  const [sortState, setSortState] = useState(DEFAULT_DIRECTION);

  useEffect(() => {
    if (fieldName === sortName) {
      setSortState(sortDirection);
    } else {
      setSortState(DEFAULT_DIRECTION);
    }
  }, [fieldName, sortName, sortDirection, DEFAULT_DIRECTION]);

  const sortBy = ({ target: { value } }) => {
    // console.log('<SortItems /> sortDataAction', sortDataAction);
    // console.log('value', !!+value);
    const isAscending = !!+value;
    console.log('sortBy fieldName', fieldName, ' isAscending', isAscending);
    sortDataAction(fieldName, +value);
  };

  return (
    <div className="sort-icons-block">
      <button
        type="button"
        className={`sort-icon icon-up ${sortState === ASCENDING_DIRECTION &&
          'active'}`}
        value={ASCENDING_DIRECTION}
        onClick={sortBy}
      />
      <button
        type="button"
        className={`sort-icon icon-down ${sortState === DESCENDING_DIRECTION &&
          'active'}`}
        value={DESCENDING_DIRECTION}
        onClick={sortBy}
      />
    </div>
  );
};

SortItems.propTypes = {
  fieldName: PropTypes.string.isRequired,
  sortName: PropTypes.string.isRequired,
  sortDirection: PropTypes.number.isRequired,
  sortDataAction: PropTypes.func,
};

SortItems.defaultProps = {
  sortDataAction: undefined,
};

export default SortItems;
