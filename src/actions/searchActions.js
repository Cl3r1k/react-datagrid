export const SEARCH_DATA_REQUEST = 'SEARCH_DATA_REQUEST';
export const SEARCH_DATA_SUCCESS = 'SEARCH_DATA_SUCCESS';
export const SEARCH_DATA_FAIL = 'SEARCH_DATA_FAIL';
export const SEARCH_POPUP = 'SEARCH_POPUP';

export const searchData = (searchField, searchValue) => {
  console.log(
    '%c ------- searchData called! searchField: ',
    'color: brown;',
    searchField,
    'searchValue',
    searchValue
  );
  return dispatch => {
    dispatch({
      type: SEARCH_DATA_REQUEST,
      payload: searchValue,
    });

    setTimeout(() => {
      dispatch({
        type: SEARCH_DATA_SUCCESS,
        payload: { searchField, searchValue },
      });
    }, 1000);
  };
};

export const setSearchPopup = searchPopupName => {
  return dispatch => {
    dispatch({
      type: SEARCH_POPUP,
      payload: searchPopupName,
    });
  };
};
