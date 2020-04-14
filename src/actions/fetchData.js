/* eslint-disable no-unused-vars */
// Utils
import { generateFakeData } from 'utils/dataUtils';

// Constants
import { /* BASE_URL, */ FETCH_DELAY } from 'config/default';

export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

const handleErrors = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const fetchDataPending = () => {
  return {
    type: FETCH_DATA_PENDING,
  };
};

const fetchDataSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

const fetchDataError = err => {
  return {
    type: FETCH_DATA_ERROR,
    payload: err,
  };
};

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataPending());

    setTimeout(() => {
      // Generate data
      const fetchedData = generateFakeData();
      dispatch(fetchDataSuccess(fetchedData));

      if (!fetchedData) {
        dispatch(fetchDataError('Something went wrong on fetching data...'));
      }
    }, FETCH_DELAY);

    // TODO: Rewrite fetch part for real API
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
