import * as actionTypes from 'constants/actionTypes';

import { ACTION_DELAY, DIRECTION_VALUES } from 'constants/constants';

// export const SORT_DATA_SUCCESS = 'SORT_DATA_SUCCESS';

// const sortDataByField = (sortField, shiftKey, sortFields, sortDirections) => {
//   const fieldIndex = sortFields.indexOf(sortField);

//   if (
//     !shiftKey &&
//     ((fieldIndex !== 0 && sortFields.length > 0) ||
//       (fieldIndex === 0 && sortFields.length > 1))
//   ) {
//     sortFields.length = 0;
//     sortDirections.length = 0;
//   }

//   if (fieldIndex < 0) {
//     sortFields.push(sortField);
//     sortDirections.push(DIRECTION_VALUES.ASCENDING_DIRECTION);
//   } else if (
//     sortDirections[fieldIndex] === DIRECTION_VALUES.ASCENDING_DIRECTION
//   ) {
//     sortDirections[fieldIndex] = DIRECTION_VALUES.DESCENDING_DIRECTION;
//   } else {
//     sortFields.splice(fieldIndex, 1);
//     sortDirections.splice(fieldIndex, 1);
//   }

//   return {
//     sortFields,
//     sortDirections,
//   };
// };

// export const sortData = (sortField, shiftKey) => {
//   return (dispatch, getState) => {
//     const { sortFields, sortDirections } = getState().sortState;

//     setTimeout(() => {
//       const payload = sortDataByField(
//         sortField,
//         shiftKey,
//         sortFields,
//         sortDirections
//       );

//       dispatch({
//         type: SORT_DATA_SUCCESS,
//         payload: { ...payload },
//       });
//     }, ACTION_DELAY);
//   };
// };

const setSortValues = (sortKey, shiftKey, sortKeysArg, directionsArg) => {
  const sortKeys = [...sortKeysArg];
  const directions = [...directionsArg];
  const fieldIndex = sortKeys.indexOf(sortKey);

  if (
    !shiftKey &&
    ((fieldIndex !== 0 && sortKeys.length > 0) ||
      (fieldIndex === 0 && sortKeys.length > 1))
  ) {
    sortKeys.length = 0;
    directions.length = 0;
  }

  if (fieldIndex < 0) {
    sortKeys.push(sortKey);
    directions.push(DIRECTION_VALUES.ASCENDING_DIRECTION);
  } else if (directions[fieldIndex] === DIRECTION_VALUES.ASCENDING_DIRECTION) {
    directions[fieldIndex] = DIRECTION_VALUES.DESCENDING_DIRECTION;
  } else {
    sortKeys.splice(fieldIndex, 1);
    directions.splice(fieldIndex, 1);
  }

  return {
    sortKeys,
    directions,
  };
};

export const setSortParams = (sortKey, shiftFlag) => {
  return (dispatch, getState) => {
    const { sortKeys, directions } = getState().sortState;

    dispatch({
      type: actionTypes.SET_SORT_PENDING,
    });

    setTimeout(() => {
      const payload = setSortValues(sortKey, shiftFlag, sortKeys, directions);

      dispatch({
        type: actionTypes.SET_SORT_SUCCESS,
        payload,
      });
    }, ACTION_DELAY);
  };
};
