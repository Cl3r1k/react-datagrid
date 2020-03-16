/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

// Components
import DataCellAvatar from 'components/DataCellAvatar/DataCellAvatar';
import DataCellText from 'components/DataCellText/DataCellText';
import DataCellBool from 'components/DataCellBool/DataCellBool';

// Constants
import { MAP, DATA_TYPES } from 'config/default';

// Styles
import './ContentDataRow.scss';

const ContentDataRow = ({ index, style, data }) => {
  const renderCell = key => {
    const fieldName = MAP[key].name;

    // console.log('fieldName:', fieldName);
    // console.log('MAP[key].dataType:', MAP[key].dataType);
    switch (MAP[key].dataType) {
      case DATA_TYPES.AVATAR_TYPE:
        return (
          <DataCellAvatar
            key={`${key}-${fieldName}`}
            imageUrl={data[index][fieldName]}
            style={{ width: MAP[key].columnWidth }}
          />
        );

      case DATA_TYPES.TEXT_TYPE:
        return (
          <DataCellText
            key={`${key}-${fieldName}`}
            dataContent={data[index][fieldName]}
            style={{ width: MAP[key].columnWidth }}
          />
        );

      case DATA_TYPES.NUMBER_TYPE:
        return (
          <DataCellText
            key={`${key}-${fieldName}`}
            dataContent={data[index][fieldName]}
            isNumber
            style={{ width: MAP[key].columnWidth }}
          />
        );

      case DATA_TYPES.BOOL_TYPE:
        return (
          <DataCellBool
            key={`${key}-${fieldName}`}
            dataContent={data[index][fieldName]}
            style={{ width: MAP[key].columnWidth }}
          />
        );

      case DATA_TYPES.OBJECT_TYPE:
        return (
          <div
            style={{ width: MAP[key].columnWidth }}
            key={`${key}-${fieldName}`}
          >
            Some Object
          </div>
        );

      default:
        return <p>some item</p>;
    }
  };

  return (
    <div className="row-item" style={{ ...style, width: 'auto' }}>
      {Object.keys(MAP).map(key => renderCell(key))}
    </div>
  );
};

ContentDataRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

ContentDataRow.defaultProps = {
  data: [],
};

export default ContentDataRow;
