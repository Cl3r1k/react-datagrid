import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAIL,
  SEARCH_POPUP,
} from 'actions/searchActions';

const initialState = {
  searchField: '',
  searchValue: '',
  searchPopupName: '',
  error: '',
  isSearching: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA_REQUEST:
      return {
        ...state,
        searchValue: action.payload,
        isSearching: true,
        error: '',
      };

    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        searchField: action.payload.searchField,
        searchValue: action.payload.searchValue,
        isSearching: false,
        error: '',
      };

    case SEARCH_DATA_FAIL:
      return { ...state, isSearching: false, error: action.payload };

    case SEARCH_POPUP:
      return { ...state, searchPopupName: action.payload };

    default:
      return state;
  }
};
