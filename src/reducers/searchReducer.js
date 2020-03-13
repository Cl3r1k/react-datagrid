import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAIL,
  SEARCH_POPUP,
  TOGGLE_STATE,
  SET_ENUM_FILTER,
} from 'actions/searchActions';

const initialState = {
  searchField: '',
  searchValue: '',
  searchPopupName: '',
  error: '',
  isSearching: false,
  filterToggleState: 0,
  filterEnums: [],
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

    case TOGGLE_STATE:
      return { ...state, filterToggleState: action.payload };

    case SET_ENUM_FILTER:
      return { ...state, filterEnums: action.payload };

    default:
      return state;
  }
};
