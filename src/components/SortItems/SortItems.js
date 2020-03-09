import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import './SortItems.scss';

const SortItems = ({ title }) => {
  const [sortState, setSortState] = useState(-1);

  const sortBy = ({ target: { value } }) => {
    // console.log('value', !!+value);
    const isAscending = !!+value;
    console.log('sortBy title', title);
    console.log('sortBy isAscending', isAscending);
    setSortState(+value);
  };

  return (
    <div className="sort-icons-block">
      <button
        type="button"
        className={`sort-icon icon-up ${sortState === 1 && 'active'}`}
        value="1"
        onClick={sortBy}
      />
      <button
        type="button"
        className={`sort-icon icon-down ${sortState === 0 && 'active'}`}
        value="0"
        onClick={sortBy}
      />
    </div>
  );
};

SortItems.propTypes = {
  title: PropTypes.string,
};

SortItems.defaultProps = {
  title: '',
};

export default SortItems;
