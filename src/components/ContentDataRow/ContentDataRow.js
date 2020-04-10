/* eslint-disable no-plusplus */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import DataCellAvatar from 'components/DataCellAvatar/DataCellAvatar';
import DataCellText from 'components/DataCellText/DataCellText';
import DataCellBool from 'components/DataCellBool/DataCellBool';
import DataCellObject from 'components/DataCellObject/DataCellObject';
import DataCellSelect from 'components/DataCellSelect/DataCellSelect';

// Constants
import { MAP, DATA_TYPES } from 'config/default';

const useStyles = makeStyles(theme => ({
  rowItem: {
    flexShrink: '0',
    flexWrap: 'nowrap',
    position: 'relative',
    height: theme.spacing(6),
    // width: '950px',
    width: 'fit-content',
    backgroundColor: theme.palette.common.white,
    borderTop: '1px solid #efefef',
    '&:hover': {
      backgroundColor: theme.color.grayed,
    },
  },
  selectedItem: {
    backgroundColor: theme.color.grayed,
  },
  renderText: {
    position: 'absolute',
    bottom: '0',
    left: 0,
    fontSize: '0.65rem',
    color: theme.palette.secondary.light,
    zIndex: 10,
  },
}));

export const ContentDataRow = React.memo(
  ({ index, item, style, isSelected, hiddenColumns, setSelectionAction }) => {
    const classes = useStyles();
    const renders = useRef(0);

    const renderCell = key => {
      const fieldName = MAP[key].name;
      const { columnWidth } = MAP[key];

      switch (MAP[key].dataType) {
        case DATA_TYPES.HIDDEN_TYPE:
          return (
            <DataCellSelect
              key={`${key}-${fieldName}`}
              index={index}
              className="sticky"
              selectState={isSelected}
              id={item.id}
              style={{ width: columnWidth, left: MAP[key].leftPosition }}
              setSelectionAction={setSelectionAction}
            />
          );

        case DATA_TYPES.AVATAR_TYPE:
          return (
            <DataCellAvatar
              key={`${key}-${fieldName}`}
              className="sticky"
              imageUrl={item[fieldName]}
              style={{
                width: columnWidth,
                left: MAP[key].leftPosition,
              }}
            />
          );

        case DATA_TYPES.TEXT_TYPE:
          return (
            <DataCellText
              key={`${key}-${fieldName}`}
              className={fieldName === 'name' ? 'sticky' : ''}
              dataContent={item[fieldName]}
              style={{
                width: columnWidth,
                left: fieldName === 'name' ? MAP[key].leftPosition : 'auto',
              }}
              isHidden={hiddenColumns[fieldName]}
            />
          );

        case DATA_TYPES.NUMBER_TYPE:
          return (
            <DataCellText
              key={`${key}-${fieldName}`}
              dataContent={item[fieldName]}
              isNumber
              style={{ width: columnWidth }}
              isHidden={hiddenColumns[fieldName]}
            />
          );

        case DATA_TYPES.DATE_TYPE:
          return (
            <DataCellText
              key={`${key}-${fieldName}`}
              dataContent={new Date(item[fieldName]).toLocaleDateString()}
              style={{ width: columnWidth }}
              isHidden={hiddenColumns[fieldName]}
            />
          );

        case DATA_TYPES.BOOL_TYPE:
          return (
            <DataCellBool
              key={`${key}-${fieldName}`}
              flagState={item[fieldName]}
              style={{ width: columnWidth }}
            />
          );

        case DATA_TYPES.OBJECT_TYPE:
          return (
            <DataCellObject
              key={`${key}-${fieldName}`}
              data={item[fieldName]}
              style={{ width: columnWidth }}
            />
          );

        default:
          return (
            <DataCellText key={`${key}-${fieldName}`} dataContent="some item" />
          );
      }
    };

    return (
      <Grid
        container
        item
        className={clsx(
          classes.rowItem,
          'row-item',
          isSelected && ['selected-item', classes.selectedItem]
        )}
        style={style}
      >
        <div className={classes.renderText}>renders: {renders.current++}</div>
        {Object.keys(MAP).map(key => renderCell(key))}
      </Grid>
    );
  },
  (prevProps, nextProps) => {
    if (
      prevProps.isSelected !== nextProps.isSelected ||
      prevProps.hiddenColumns !== nextProps.hiddenColumns ||
      prevProps.style.top !== nextProps.style.top
    ) {
      return false;
    }

    return true;
  }
);

ContentDataRow.propTypes = {
  index: PropTypes.number,
  item: PropTypes.shape({
    id: PropTypes.string,
  }),
  isSelected: PropTypes.bool,
  hiddenColumns: PropTypes.objectOf(PropTypes.bool),
  setSelectionAction: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ContentDataRow.defaultProps = {
  index: undefined,
  item: {},
  isSelected: false,
  hiddenColumns: {},
  setSelectionAction: undefined,
  style: {},
};
