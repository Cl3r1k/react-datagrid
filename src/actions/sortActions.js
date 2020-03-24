import { ACTION_DELAY, DIRECTION_VALUES } from 'constants/constants';

export const SORT_DATA_SUCCESS = 'SORT_DATA_SUCCESS';

const sortDataByField = (sortField, shiftKey, dispatch, getState) => {
  const { sortFields, sortDirections } = getState().sortState;

  const fieldIndex = sortFields.indexOf(sortField);

  if (
    !shiftKey &&
    ((fieldIndex !== 0 && sortFields.length > 0) ||
      (fieldIndex === 0 && sortFields.length > 1))
  ) {
    sortFields.length = 0;
    sortDirections.length = 0;
    sortFields.push(sortField);
    sortDirections.push(DIRECTION_VALUES.ASCENDING_DIRECTION);
  }

  if (fieldIndex < 0) {
    sortFields.push(sortField);
    sortDirections.push(DIRECTION_VALUES.ASCENDING_DIRECTION);
  } else if (
    sortDirections[fieldIndex] === DIRECTION_VALUES.ASCENDING_DIRECTION
  ) {
    sortDirections[fieldIndex] = DIRECTION_VALUES.DESCENDING_DIRECTION;
  } else {
    sortFields.splice(fieldIndex, 1);
    sortDirections.splice(fieldIndex, 1);
  }

  dispatch({
    type: SORT_DATA_SUCCESS,
    payload: {
      sortFields,
      sortDirections,
    },
  });
};

export const sortData = (sortField, shiftKey) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      sortDataByField(sortField, shiftKey, dispatch, getState);
    }, ACTION_DELAY);
  };
};
