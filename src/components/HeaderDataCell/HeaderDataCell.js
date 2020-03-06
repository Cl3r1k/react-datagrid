import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './HeaderDataCell.scss';

const HeaderDataCell = ({ title, isSortable, isSearchable }) => {
  console.log('HeaderDataCell', title);

  return (
    <th className="header-data-cell">
      <div
        className={
          isSortable ? 'title-container sortable-row' : 'title-container'
        }
      >
        <span className="cell-title">{title}</span>
        {isSortable && (
          <div className="sort-icons-block">
            <button type="button" className="sort-icon icon-up" />
            <button type="button" className="sort-icon icon-down" />
          </div>
        )}
      </div>
      {isSearchable && <button type="button" className="search-icon" />}
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
