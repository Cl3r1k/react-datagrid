export const SEARCH_DATA_REQUEST = 'SEARCH_DATA_REQUEST';
export const SEARCH_DATA_SUCCESS = 'SEARCH_DATA_SUCCESS';
export const SEARCH_DATA_FAIL = 'SEARCH_DATA_FAIL';
export const SEARCH_POPUP = 'SEARCH_POPUP';
export const TOGGLE_STATE = 'TOGGLE_STATE';
export const SET_ENUM_FILTER = 'SET_ENUM_FILTER';
export const SET_ENUM = 'SET_ENUM';
export const UNSET_ENUM = 'UNSET_ENUM';

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

export const setToggle = (toggleValue, checkedStatus) => {
  return (dispatch, getState) => {
    const { filterToggleState } = getState().searchState;

    if (!filterToggleState || filterToggleState !== toggleValue) {
      dispatch({
        type: TOGGLE_STATE,
        payload: toggleValue,
      });
    } else if (checkedStatus) {
      dispatch({
        type: TOGGLE_STATE,
        payload: 0,
      });
    }
  };
};

export const setEnumFilter = (enumValue, setType) => {
  return (dispatch, getState) => {
    const { filterEnums } = getState().searchState;
    console.log('filterEnums', filterEnums);

    switch (setType) {
      case SET_ENUM:
        if (!filterEnums.includes(enumValue)) {
          dispatch({
            type: SET_ENUM_FILTER,
            payload: [...filterEnums, enumValue],
          });
        }
        break;

      case UNSET_ENUM:
        if (filterEnums.includes(enumValue)) {
          const enumIndex = filterEnums.indexOf(enumValue);
          // console.log('setEnumFilter enumIndex', enumIndex);
          const newArr = [...filterEnums];
          newArr.splice(enumIndex, 1);
          // console.log('setEnumFilter result', result);
          dispatch({
            type: SET_ENUM_FILTER,
            payload: newArr,
          });
        }
        break;

      default:
        dispatch({
          type: SET_ENUM_FILTER,
          payload: [],
        });
        break;
    }
  };
};
