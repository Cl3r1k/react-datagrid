import React from 'react';
import PropTypes from 'prop-types';

// Components
import DataCellAvatar from 'components/DataCellAvatar/DataCellAvatar';
import DataCellText from 'components/DataCellText/DataCellText';
import DataCellBool from 'components/DataCellBool/DataCellBool';
import DataCellObject from 'components/DataCellObject/DataCellObject';
import DataCellSelect from 'components/DataCellSelect/DataCellSelect';

// Constants
import { MAP, DATA_TYPES } from 'config/default';

// Styles
import './ContentDataRow.scss';

const ContentDataRow = ({
  index,
  style,
  data,
  isVirtualization,
  selectedItems,
  hiddenColumns,
  setSelectionAction,
}) => {
  const selected = selectedItems.includes(data[index].id);

  const renderCell = key => {
    const fieldName = MAP[key].name;

    switch (MAP[key].dataType) {
      case DATA_TYPES.HIDDEN_TYPE:
        return (
          <DataCellSelect
            key={`${key}-${fieldName}`}
            selectState={selected}
            id={data[index].id}
            style={{ width: MAP[key].columnWidth }}
            setSelectionAction={setSelectionAction}
          />
        );

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
            isHidden={hiddenColumns[fieldName]}
          />
        );

      case DATA_TYPES.NUMBER_TYPE:
        return (
          <DataCellText
            key={`${key}-${fieldName}`}
            dataContent={data[index][fieldName]}
            isNumber
            style={{ width: MAP[key].columnWidth }}
            isHidden={hiddenColumns[fieldName]}
          />
        );

      case DATA_TYPES.DATE_TYPE:
        return (
          <DataCellText
            key={`${key}-${fieldName}`}
            dataContent={new Date(data[index][fieldName]).toLocaleDateString()}
            style={{ width: MAP[key].columnWidth }}
            largeText={MAP[key].largeText}
            isHidden={hiddenColumns[fieldName]}
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
      className={`row-item ${selected ? 'selected-item' : ''}`}
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
  selectedItems: PropTypes.arrayOf(PropTypes.string),
  hiddenColumns: PropTypes.objectOf(PropTypes.bool),
  setSelectionAction: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ContentDataRow.defaultProps = {
  data: [],
  isVirtualization: false,
  selectedItems: [],
  hiddenColumns: {},
  setSelectionAction: undefined,
  style: '',
};

export default ContentDataRow;
