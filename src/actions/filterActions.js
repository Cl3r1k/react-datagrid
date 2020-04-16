import { FILTER_DELAY } from 'constants/constants';
import * as actionTypes from 'constants/actionTypes';

export const setFilterData = (filterKey, filterValue) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SEARCH_DATA_REQUEST,
      payload: filterValue,
    });

    setTimeout(() => {
      dispatch({
        type: actionTypes.SEARCH_DATA_SUCCESS,
        payload: { filterKey, filterValue },
      });
    }, FILTER_DELAY);
  };
};

export const setSearchPopup = searchPopupName => {
  return dispatch => {
    dispatch({
      type: actionTypes.SEARCH_POPUP,
      payload: searchPopupName,
    });
  };
};

export const setToggle = (toggleValue, checkedStatus) => {
  return (dispatch, getState) => {
    const { filterToggleState } = getState().filterState;

    if (!filterToggleState || filterToggleState !== toggleValue) {
      dispatch({
        type: actionTypes.TOGGLE_STATE,
        payload: toggleValue,
      });
    } else if (checkedStatus) {
      dispatch({
        type: actionTypes.TOGGLE_STATE,
        payload: 0,
      });
    }
  };
};

export const setEnumFilter = enumsSelected => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_ENUM_FILTER_PENDING,
    });

    setTimeout(() => {
      dispatch({
        type: actionTypes.SET_ENUM_FILTER_SUCCESS,
        payload: enumsSelected,
      });
    }, FILTER_DELAY);
  };
};

export const setFilterGlobal = filterGlobalValue => {
  return dispatch => {
    dispatch({
      type: actionTypes.GLOBAL_SEARCH_PENDING,
    });

    setTimeout(() => {
      dispatch({
        type: actionTypes.GLOBAL_SEARCH_SUCCESS,
        payload: filterGlobalValue,
      });
    }, FILTER_DELAY);
  };
};
