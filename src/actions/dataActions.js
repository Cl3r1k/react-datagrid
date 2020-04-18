/* eslint-disable no-unused-vars */
// Utils
import { generateFakeData } from 'utils/dataUtils';

// Constants
import { /* BASE_URL, */ FETCH_DELAY } from 'config/default';
import * as actionTypes from 'constants/actionTypes';

const handleErrors = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const fetchDataPending = () => {
  return {
    type: actionTypes.FETCH_DATA_PENDING,
  };
};

const fetchDataSuccess = data => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data,
  };
};

const fetchDataError = err => {
  return {
    type: actionTypes.FETCH_DATA_ERROR,
    payload: err,
  };
};

export const fetchData = dataLength => {
  return dispatch => {
    dispatch(fetchDataPending());

    setTimeout(() => {
      // Generate data
      const fetchedData = generateFakeData(dataLength);
      dispatch(fetchDataSuccess(fetchedData));

      if (!fetchedData) {
        dispatch(fetchDataError('Something went wrong on fetching data...'));
      }
    }, FETCH_DELAY);

    // TODO: Rewrite fetch part for real API, some day...
    // return fetch(BASE_URL)
    //   .then(handleErrors)
    //   .then(res => res.json())
    //   .then(res => {
    //     dispatch(fetchDataSuccess(res));
    //     return res;
    //   })
    //   .catch(err => {
    //     dispatch(fetchDataError(err));
    //   });
  };
};

export const setSelection = selectedItem => {
  return (dispatch, getState) => {
    const selectedItems = [...getState().dataState.selectedItems];

    const itemIndex = selectedItems.indexOf(selectedItem);
    if (itemIndex !== -1) {
      selectedItems.splice(itemIndex, 1);
    } else {
      selectedItems.push(selectedItem);
    }

    dispatch({
      type: actionTypes.SET_SELECT_ROW,
      payload: selectedItems,
    });
  };
};

export const deleteRows = () => {
  return (dispatch, getState) => {
    const { selectedItems, data } = getState().dataState;

    dispatch({
      type: actionTypes.DELETE_ROWS,
      payload: {
        selectedItems: [],
        data: data.filter(item => !selectedItems.includes(item.id)),
      },
    });
  };
};
