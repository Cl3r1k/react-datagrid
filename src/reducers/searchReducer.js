import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAIL,
} from 'actions/searchActions';

const initialState = {
  searchName: 'asdf',
  error: '',
  isSearched: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA_REQUEST:
      return {
        ...state,
        searchName: action.payload,
        isSearched: true,
        error: '',
      };

    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        searchName: action.payload,
        isSearched: false,
        error: '',
      };

    case SEARCH_DATA_FAIL:
      return { ...state, isSearched: false, error: action.payload };

    default:
      return state;
  }
};
