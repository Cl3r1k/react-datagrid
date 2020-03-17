import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SEARCH_POPUP,
  TOGGLE_STATE,
  SET_ENUM_FILTER,
  GLOBAL_SEARCH_SUCCESS,
  SET_VIRTUALIZATION,
} from 'actions/searchActions';

const initialState = {
  searchField: '',
  searchValue: '',
  searchPopupName: '',
  isSearching: false,
  globalSearchValue: '',
  filterToggleState: 0,
  filterEnums: [],
  virtualizationState: true,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA_REQUEST:
      return {
        ...state,
        searchValue: action.payload,
        isSearching: true,
      };

    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        searchField: action.payload.searchField,
        searchValue: action.payload.searchValue,
        isSearching: false,
      };

    case SEARCH_POPUP:
      return { ...state, searchPopupName: action.payload };

    case TOGGLE_STATE:
      return { ...state, filterToggleState: action.payload };

    case SET_ENUM_FILTER:
      return { ...state, filterEnums: action.payload };

    case GLOBAL_SEARCH_SUCCESS:
      return {
        ...state,
        globalSearchValue: action.payload,
        isSearching: false,
      };

    case SET_VIRTUALIZATION:
      return { ...state, virtualizationState: action.payload };

    default:
      return state;
  }
};
