import React from 'react';
import PropTypes from 'prop-types';

// Components
import SortItems from 'components/SortItems/SortItems';
import SearchItems from 'components/SearchItems/SearchItems';

// Styles
import './HeaderDataCell.scss';

const HeaderDataCell = ({ title, isSortable, isSearchable }) => {
  console.log('HeaderDataCell', title);

  return (
    <th className="header-data-cell">
      <div className="title-container">
        <span className="cell-title">{title}</span>
        {isSortable && <SortItems title={title} />}
      </div>
      {isSearchable && <SearchItems title={title} />}
    </th>
  );
};

HeaderDataCell.propTypes = {
  title: PropTypes.string,
  isSortable: PropTypes.bool,
  isSearchable: PropTypes.bool,
};

HeaderDataCell.defaultProps = {
  title: 'CellTitle',
  isSortable: false,
  isSearchable: false,
};

export default HeaderDataCell;
