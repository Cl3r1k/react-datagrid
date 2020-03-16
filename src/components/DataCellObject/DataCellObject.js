/* eslint-disable react/prop-types */
import React from 'react';

// Styles
import './DataCellObject.scss';

const DataCellObject = ({ data, style }) => {
  return (
    <div style={style} className="object-block">
      {Object.keys(data).map(key => (
        <span className="span-item" key={key}>
          {data[key]}
        </span>
      ))}
    </div>
  );
};

export default DataCellObject;
