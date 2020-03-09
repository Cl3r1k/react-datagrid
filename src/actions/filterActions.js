export const FILTER_DATA_REQUEST = 'FILTER_DATA_REQUEST';
export const FILTER_DATA_SUCCESS = 'FILTER_DATA_SUCCESS';
export const FILTER_DATA_FAIL = 'FILTER_DATA_FAIL';

export const filterData = filterName => {
  return dispatch => {
    dispatch({
      type: FILTER_DATA_REQUEST,
      payload: filterName,
    });

    setTimeout(() => {
      dispatch({
        type: FILTER_DATA_SUCCESS,
        payload: filterName,
      });
    }, 1000);
  };
};
