import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SEARCH_POPUP,
  TOGGLE_STATE,
  SET_ENUM_FILTER,
  GLOBAL_SEARCH_SUCCESS,
  SET_VIRTUALIZATION,
  SET_SELECT,
  DELETE_ROWS,
  SET_HIDDEN,
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
  selectedItems: [],
  deletedItems: [],
  hiddenColumns: {
    name: false,
    score: false,
    registerDate: false,
    lastVisit: false,
  },
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA_REQUEST:
      return {
        ...state,
        searchValue: action.payload,
        selectedItems: [],
        isSearching: true,
      };

    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        searchField: action.payload.searchField,
        searchValue: action.payload.searchValue,
        selectedItems: [],
        isSearching: false,
      };

    case SEARCH_POPUP:
      return { ...state, searchPopupName: action.payload };

    case TOGGLE_STATE:
      return { ...state, filterToggleState: action.payload, selectedItems: [] };

    case SET_ENUM_FILTER:
      return { ...state, filterEnums: action.payload, selectedItems: [] };

    case GLOBAL_SEARCH_SUCCESS:
      return {
        ...state,
        globalSearchValue: action.payload,
        selectedItems: [],
        isSearching: false,
      };

    case SET_VIRTUALIZATION:
      return { ...state, virtualizationState: action.payload };

    case SET_SELECT:
      return { ...state, selectedItems: action.payload };

    case DELETE_ROWS:
      return {
        ...state,
        selectedItems: action.payload.selectedItems,
        deletedItems: action.payload.deletedItems,
      };

    case SET_HIDDEN:
      return {
        ...state,
        hiddenColumns: {
          ...state.hiddenColumns,
          [action.payload.fieldName]: action.payload.hiddenState,
        },
      };

    default:
      return state;
  }
};
