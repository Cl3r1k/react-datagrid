import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Utils
import { sortDataByFieldName } from 'utils/dataUtils';

// Styles
import './ContentDataGrid.scss';

const ContentDataGrid = ({ data, sortState }) => {
  const renderTableRow = () => {
    console.log('%c renderTableRow() sortState: ', 'color: green;', sortState);
    const sortedData = sortDataByFieldName(
      data,
      sortState.sortName,
      sortState.sortDirection
    );

    if (sortState.isSorting) {
      return (
        <tr>
          <td>
            <p>Loading... (Spinner...)</p>
          </td>
        </tr>
      );
    }

    return sortedData.map(el => (
      <tr key={el.id}>
        <td>{el.avatar}</td>
        <td>{el.name}</td>
        <td>{el.score}</td>
        <td>{el.registerDate}</td>
        <td>{el.lastVisit}</td>
        <td>{el.status}</td>
        <td>{el.instant}</td>
        <td>{el.money.currencySymbol}</td>
        <td>{el.mentor ? 'true' : 'false'}</td>
      </tr>
    ));
  };

  return (
    <div className="content-data-grid">
      <table className="content-data-grid--table">
        <tbody>{renderTableRow()}</tbody>
      </table>
    </div>
  );
};

ContentDataGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  sortState: PropTypes.shape({
    sortName: PropTypes.string,
    sortDirection: PropTypes.number,
    error: PropTypes.string,
    isSorting: PropTypes.bool,
  }).isRequired,
};

ContentDataGrid.defaultProps = {
  data: [],
};

const mapStoreToProps = state => {
  return {
    sortState: state.sortState,
  };
};

export default connect(mapStoreToProps)(ContentDataGrid);
