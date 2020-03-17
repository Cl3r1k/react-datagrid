import { ACTION_DELAY } from 'utils/constants';

export const SEARCH_DATA_REQUEST = 'SEARCH_DATA_REQUEST';
export const SEARCH_DATA_SUCCESS = 'SEARCH_DATA_SUCCESS';
export const SEARCH_POPUP = 'SEARCH_POPUP';
export const TOGGLE_STATE = 'TOGGLE_STATE';
export const SET_ENUM_FILTER = 'SET_ENUM_FILTER';
export const GLOBAL_SEARCH_SUCCESS = 'GLOBAL_SEARCH_SUCCESS';
export const SET_VIRTUALIZATION = 'SET_VIRTUALIZATION';
export const SET_SELECT = 'SET_SELECT';
export const DELETE_ROWS = 'DELETE_ROWS';
export const SET_HIDDEN = 'SET_HIDDEN';

export const searchData = (searchField, searchValue) => {
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
    }, ACTION_DELAY);
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

export const setEnumFilter = enumsSelected => {
  return dispatch => {
    dispatch({
      type: SET_ENUM_FILTER,
      payload: enumsSelected,
    });
  };
};

export const setGlobalSearch = globalSearchValue => {
  return dispatch => {
    dispatch({
      type: GLOBAL_SEARCH_SUCCESS,
      payload: globalSearchValue,
    });
  };
};

export const setVirtualization = virtualizationState => {
  return dispatch => {
    dispatch({
      type: SET_VIRTUALIZATION,
      payload: virtualizationState,
    });
  };
};

export const setSelection = selectedItem => {
  return (dispatch, getState) => {
    const { selectedItems } = getState().searchState;
    // Here we should probably look in store Array for selected ID
    const itemIndex = selectedItems.indexOf(selectedItem);
    if (itemIndex !== -1) {
      selectedItems.splice(itemIndex, 1);
    } else {
      selectedItems.push(selectedItem);
    }

    dispatch({
      type: SET_SELECT,
      payload: selectedItems,
    });
  };
};

export const deleteRows = () => {
  return (dispatch, getState) => {
    const { selectedItems, deletedItems } = getState().searchState;

    dispatch({
      type: DELETE_ROWS,
      payload: {
        selectedItems: [],
        deletedItems: [...deletedItems, ...selectedItems],
      },
    });
  };
};

export const setVisibility = (fieldName, hiddenState) => {
  return dispatch => {
    dispatch({
      type: SET_HIDDEN,
      payload: {
        fieldName,
        hiddenState,
      },
    });
  };
};
