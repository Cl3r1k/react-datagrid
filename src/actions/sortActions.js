export const SORT_DATA_REQUEST = 'SORT_DATA_REQUEST';
export const SORT_DATA_SUCCESS = 'SORT_DATA_SUCCESS';
export const SORT_DATA_FAIL = 'SORT_DATA_FAIL';

const sortDataByFieldName = (sortName, sortDirection, dispatch) => {
  console.log('in sortDataByFieldName: ', sortName, sortDirection);

  dispatch({
    type: SORT_DATA_SUCCESS,
    payload: {
      sortName,
      sortDirection,
    },
  });
};

export const sortData = (sortName, sortDirection) => {
  return dispatch => {
    dispatch({
      type: SORT_DATA_REQUEST,
      payload: sortName,
    });

    setTimeout(() => {
      sortDataByFieldName(sortName, sortDirection, dispatch);
    }, 1000);
  };
};
