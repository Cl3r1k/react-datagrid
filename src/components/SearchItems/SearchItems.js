import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './SearchItems.scss';

const SearchItems = ({ title }) => {
  console.log('SearchItems title: ', title);

  return <button type="button" className="search-icon" />;
};

SearchItems.propTypes = {
  title: PropTypes.string,
};

SearchItems.defaultProps = {
  title: '',
};

export default SearchItems;
