import React from 'react';
import PropTypes from 'prop-types';

// Components
import SortItems from 'components/SortItems/SortItems';
import SearchItems from 'components/SearchItems/SearchItems';

// Constants
import { DIRECTION_VALUES } from 'utils/constants';

// Styles
import './HeaderDataCell.scss';

const HeaderDataCell = props => {
  const {
    title,
    isSortable,
    isSearchable,
    fieldName,
    sortName,
    sortDirection,
    sortDataAction,
    searchField,
    searchValue,
    searchPopupName,
    searchDataAction,
    setSearchPopupAction,
  } = props;
  // console.log('HeaderDataCell title: ', title);
  // console.log('HeaderDataCell fieldName: ', fieldName);
  // console.log('HeaderDataCell sortName: ', sortName);
  // console.log('HeaderDataCell sortDataAction: ', sortDataAction);

  return (
    <th className="header-data-cell">
      <div className="title-container">
        <span className="cell-title">{title}</span>
        {isSortable && (
          <SortItems
            fieldName={fieldName}
            sortName={sortName}
            sortDirection={sortDirection}
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
    </th>
  );
};

HeaderDataCell.propTypes = {
  title: PropTypes.string,
  fieldName: PropTypes.string,
  sortName: PropTypes.string,
  sortDirection: PropTypes.number,
  isSortable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  sortDataAction: PropTypes.func,
  searchField: PropTypes.string,
  searchValue: PropTypes.string,
  searchPopupName: PropTypes.string,
  searchDataAction: PropTypes.func,
  setSearchPopupAction: PropTypes.func,
};

HeaderDataCell.defaultProps = {
  title: 'CellTitle',
  fieldName: '',
  sortName: '',
  sortDirection: DIRECTION_VALUES.DEFAULT_DIRECTION,
  isSortable: false,
  isSearchable: false,
  sortDataAction: undefined,
  searchField: '',
  searchValue: '',
  searchPopupName: '',
  searchDataAction: undefined,
  setSearchPopupAction: undefined,
};

export default HeaderDataCell;
