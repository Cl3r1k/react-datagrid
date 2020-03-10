import {
  SORT_DATA_REQUEST,
  SORT_DATA_SUCCESS,
  SORT_DATA_FAIL,
} from 'actions/sortActions';

const initialState = {
  sortName: '',
  error: '',
  isSorting: false,
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_DATA_REQUEST:
      return { ...state, sortName: action.payload, isSorting: true, error: '' };

    case SORT_DATA_SUCCESS:
      return {
        ...state,
        sortName: action.payload,
        isSorting: false,
        error: '',
      };

    case SORT_DATA_FAIL:
      return { ...state, error: action.payload, isSorting: false };

    default:
      return state;
  }
};
