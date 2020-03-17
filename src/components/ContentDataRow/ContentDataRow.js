/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

// Components
import DataCellAvatar from 'components/DataCellAvatar/DataCellAvatar';
import DataCellText from 'components/DataCellText/DataCellText';
import DataCellBool from 'components/DataCellBool/DataCellBool';
import DataCellObject from 'components/DataCellObject/DataCellObject';

// Constants
import { MAP, DATA_TYPES } from 'config/default';

// Styles
import './ContentDataRow.scss';

const ContentDataRow = ({ index, style, data, isVirtualization }) => {
  const renderCell = key => {
    const fieldName = MAP[key].name;

    switch (MAP[key].dataType) {
      case DATA_TYPES.HIDDEN_TYPE:
        return undefined;

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
            largeText={MAP[key].largeText}
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
            flagState={data[index][fieldName]}
            style={{ width: MAP[key].columnWidth }}
          />
        );

      case DATA_TYPES.OBJECT_TYPE:
        return (
          <DataCellObject
            key={`${key}-${fieldName}`}
            data={data[index][fieldName]}
            style={{ width: MAP[key].columnWidth }}
          />
        );

      default:
        return <p>some item</p>;
    }
  };

  return (
    <div
      className="row-item"
      style={{ ...style, width: isVirtualization ? 'auto' : '135%' }}
    >
      {Object.keys(MAP).map(key => renderCell(key))}
    </div>
  );
};

ContentDataRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number.isRequired,
  isVirtualization: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ContentDataRow.defaultProps = {
  data: [],
  isVirtualization: false,
  style: '',
};

export default ContentDataRow;
