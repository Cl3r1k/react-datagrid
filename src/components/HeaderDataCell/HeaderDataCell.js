import React from 'react';
import PropTypes from 'prop-types';

// Components
import SortItems from 'components/SortItems/SortItems';
import SearchItems from 'components/SearchItems/SearchItems';

// Styles
import './HeaderDataCell.scss';

const HeaderDataCell = props => {
  const {
    title,
    isSortable,
    isSearchable,
    fieldName,
    sortState,
    sortDataAction,
    searchField,
    searchValue,
    searchPopupName,
    searchDataAction,
    setSearchPopupAction,
    isHidden,
    className,
    style,
  } = props;

  if (isHidden) {
    return null;
  }

  return (
    <div className={`header-data-cell ${className}`} style={style}>
      <div className="title-container">
        <span className="cell-title">{title}</span>
        {isSortable && (
          <SortItems
            fieldName={fieldName}
            sortState={sortState}
            sortDataAction={sortDataAction}
          />
        )}
      </div>
      {isSearchable && (
        <SearchItems
          fieldName={fieldName}
          searchField={searchField}
          searchValue={searchValue}
          searchPopupName={searchPopupName}
          searchDataAction={searchDataAction}
          setSearchPopupAction={setSearchPopupAction}
        />
      )}
    </div>
  );
};

HeaderDataCell.propTypes = {
  title: PropTypes.string,
  fieldName: PropTypes.string,
  sortState: PropTypes.string,
  isSortable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  sortDataAction: PropTypes.func,
  searchField: PropTypes.string,
  searchValue: PropTypes.string,
  searchPopupName: PropTypes.string,
  searchDataAction: PropTypes.func,
  setSearchPopupAction: PropTypes.func,
  isHidden: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

HeaderDataCell.defaultProps = {
  title: 'CellTitle',
  fieldName: '',
  sortState: '',
  isSortable: false,
  isSearchable: false,
  sortDataAction: undefined,
  searchField: '',
  searchValue: '',
  searchPopupName: '',
  searchDataAction: undefined,
  setSearchPopupAction: undefined,
  isHidden: false,
  className: '',
  style: '',
};

export default HeaderDataCell;
