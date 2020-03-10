export const SEARCH_DATA_REQUEST = 'SEARCH_DATA_REQUEST';
export const SEARCH_DATA_SUCCESS = 'SEARCH_DATA_SUCCESS';
export const SEARCH_DATA_FAIL = 'SEARCH_DATA_FAIL';

export const searchData = searchName => {
  return dispatch => {
    dispatch({
      type: SEARCH_DATA_REQUEST,
      payload: searchName,
    });

    setTimeout(() => {
      dispatch({
        type: SEARCH_DATA_SUCCESS,
        payload: searchName,
      });
    }, 1000);
  };
};
