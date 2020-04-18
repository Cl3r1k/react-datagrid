import * as actionTypes from 'constants/actionTypes';

const initialState = {
  data: [],
  selectedItems: [],
  isPending: false,
  error: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_PENDING:
      return { ...state, isPending: true, error: null };

    case actionTypes.FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, isPending: false, error: null };

    case actionTypes.FETCH_DATA_ERROR:
      return { ...state, isPending: false, error: action.payload };

    case actionTypes.SET_SELECT_ROW:
      return { ...state, selectedItems: action.payload };

    case actionTypes.DELETE_ROWS:
      return {
        ...state,
        selectedItems: action.payload.selectedItems,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export const getData = state => state.data;
export const getDataPending = state => state.isPending;
export const getDataError = state => state.error;
