import React from 'react';
import PropTypes from 'prop-types';

// Constants
import { DIRECTION_VALUES } from 'utils/constants';

// Styles
import './SortItems.scss';

const SortItems = ({ fieldName, sortState, sortDataAction }) => {
  const { ASCENDING_DIRECTION, DESCENDING_DIRECTION } = DIRECTION_VALUES;

  const sortBy = ({ shiftKey }) => {
    sortDataAction(fieldName, shiftKey);
  };

  // const handleKeyDown = evt => {
  //   console.log('evt', evt);
  // };

  return (
    <div className="sort-icons-block">
      {/* {sortState && <span>$</span>} */}
      {/* {sortState && (
        <button
          type="button"
          className={`sort-icon ${
            sortState === ASCENDING_DIRECTION ? 'icon-up' : 'icon-down'
          }`}
        />
      )} */}
      <button
        type="button"
        className={`sort-icon ${sortState === ASCENDING_DIRECTION &&
          'icon-up'} ${sortState === DESCENDING_DIRECTION && 'icon-down'}`}
        onClick={sortBy}
      />
      {/* <button
        type="button"
        className={`sort-icon icon-up ${sortState === ASCENDING_DIRECTION &&
          'active'}`}
        onClick={sortBy}
      />
      <button
        type="button"
        className={`sort-icon icon-down ${sortState === DESCENDING_DIRECTION &&
          'active'}`}
        onClick={sortBy}
      /> */}
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
