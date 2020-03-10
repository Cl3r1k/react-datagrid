export const SORT_DATA_REQUEST = 'SORT_DATA_REQUEST';
export const SORT_DATA_SUCCESS = 'SORT_DATA_SUCCESS';
export const SORT_DATA_FAIL = 'SORT_DATA_FAIL';

export const sortData = sortName => {
  return dispatch => {
    dispatch({
      type: SORT_DATA_REQUEST,
      payload: sortName,
    });

    setTimeout(() => {
      dispatch({
        type: SORT_DATA_SUCCESS,
        payload: 'some sorted data',
      });
    }, 1000);
  };
};
