import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { sortData } from 'actions/sortActions';

// Styles
import './SortItems.scss';

const SortItems = props => {
  const { title } = props;
  console.log('SortItems props', props);
  // TODO: here we probably use 'useEffect' hook and set 'sortState' according to state in redux-store
  const [sortState, setSortState] = useState(-1);

  const sortBy = ({ target: { value } }) => {
    const { sortDataAction } = props;
    // console.log('value', !!+value);
    const isAscending = !!+value;
    console.log('sortBy title', title);
    console.log('sortBy isAscending', isAscending);
    // TODO: We even shouldn't probably change state directly (it will be changed by 'useEffect' and incoming state, [from parent???])
    sortDataAction(title);
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
  sortDataAction: PropTypes.func.isRequired,
};

SortItems.defaultProps = {
  title: '',
};

// TODO: Consider to 'map' and 'connect' 'store'

const mapDispatchToProps = dispatch => {
  return {
    sortDataAction: sortName => dispatch(sortData(sortName)),
  };
};

export default connect(null, mapDispatchToProps)(SortItems);
