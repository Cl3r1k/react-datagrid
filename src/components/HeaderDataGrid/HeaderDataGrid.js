import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { sortData } from 'actions/sortActions';

// Components
import HeaderDataCell from 'components/HeaderDataCell/HeaderDataCell';

// Styles
import './HeaderDataGrid.scss';

const HeaderDataGrid = ({ /* data, */ sortState, sortDataAction }) => {
  // console.log('in HeaderDataGrid', data);

  // TODO: Use action for header in <tr>

  return (
    <div className="header-data-grid">
      <table className="header-data-grid--table">
        <thead>
          <tr className="header-data-grid--row">
            <HeaderDataCell title="Avatar" />
            <HeaderDataCell
              title="Name"
              fieldName="name"
              sortName={sortState.sortName}
              sortDirection={sortState.sortDirection}
              isSortable
              isSearchable
              sortDataAction={sortDataAction}
            />
            <HeaderDataCell
              title="Score"
              fieldName="score"
              sortName={sortState.sortName}
              sortDirection={sortState.sortDirection}
              isSortable
              isSearchable
              sortDataAction={sortDataAction}
            />
            <HeaderDataCell
              title="RegisterDate"
              fieldName="registerDate"
              sortName={sortState.sortName}
              sortDirection={sortState.sortDirection}
              isSortable
              sortDataAction={sortDataAction}
            />
            <HeaderDataCell
              title="LastVisit"
              fieldName="lastVisit"
              sortName={sortState.sortName}
              sortDirection={sortState.sortDirection}
              isSortable
              sortDataAction={sortDataAction}
            />
            <HeaderDataCell title="Status" />
            <HeaderDataCell title="Instant" />
            <HeaderDataCell title="Money currencySymbol" />
            <HeaderDataCell title="Mentor" />
          </tr>
        </thead>
      </table>
    </div>
  );
};

HeaderDataGrid.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object),
  sortState: PropTypes.shape({
    sortName: PropTypes.string,
    sortDirection: PropTypes.number,
    error: PropTypes.string,
    isSorting: PropTypes.bool,
  }).isRequired,
  sortDataAction: PropTypes.func.isRequired,
};

// HeaderDataGrid.defaultProps = {
//   data: [],
// };

const mapStateToProps = state => {
  return {
    sortState: state.sortState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sortDataAction: (fieldName, sortDirection) =>
      dispatch(sortData(fieldName, sortDirection)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDataGrid);
