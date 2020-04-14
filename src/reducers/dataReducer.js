import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from 'actions/fetchData';

const initialState = {
  data: [],
  isPending: false,
  error: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return { ...state, isPending: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, isPending: false, error: null };
    case FETCH_DATA_ERROR:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

export const getData = state => state.data;
export const getDataPending = state => state.isPending;
export const getDataError = state => state.error;
