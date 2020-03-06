import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './ContentDataGrid.scss';

const ContentDataGrid = ({ data }) => {
  return (
    <div className="content-data-grid">
      <table className="content-data-grid--table">
        <tbody>
          {data.map(el => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

ContentDataGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

ContentDataGrid.defaultProps = {
  data: [],
};

export default ContentDataGrid;
