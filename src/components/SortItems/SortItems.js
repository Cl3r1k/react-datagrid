import React from 'react';
import PropTypes from 'prop-types';

// Constants
import { DIRECTION_VALUES } from 'constants/constants';

// Styles
import './SortItems.scss';

const SortItems = ({ fieldName, sortState, sortDataAction }) => {
  const { ASCENDING_DIRECTION, DESCENDING_DIRECTION } = DIRECTION_VALUES;

  const sortBy = ({ shiftKey }) => {
    sortDataAction(fieldName, shiftKey);
  };

  return (
    <div className="sort-icons-block">
      <button
        type="button"
        className={`sort-icon ${sortState === ASCENDING_DIRECTION &&
          'icon-up'} ${sortState === DESCENDING_DIRECTION && 'icon-down'}`}
        onClick={sortBy}
      />
    </div>
  );
};

SortItems.propTypes = {
  fieldName: PropTypes.string.isRequired,
  sortState: PropTypes.string,
  sortDataAction: PropTypes.func,
};

SortItems.defaultProps = {
  sortState: '',
  sortDataAction: undefined,
};

export default SortItems;
