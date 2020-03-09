import {
  FILTER_DATA_REQUEST,
  FILTER_DATA_SUCCESS,
  FILTER_DATA_FAIL,
} from 'actions/filterActions';

const initialState = {
  filterName: 'asdf',
  error: '',
  isFiltered: false,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_DATA_REQUEST:
      return { ...state, filterName: action.payload, error: '' };

    case FILTER_DATA_SUCCESS:
      return { ...state, filterName: action.payload, error: '' };

    case FILTER_DATA_FAIL:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
