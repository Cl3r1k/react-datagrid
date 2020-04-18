import * as actionTypes from 'constants/actionTypes';

export const initialState = {
  sortKeys: [],
  directions: [],
  isSortPending: false,
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SORT_PENDING:
      return { ...state, isSortPending: true };

    case actionTypes.SET_SORT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isSortPending: false,
      };

    default:
      return state;
  }
};
