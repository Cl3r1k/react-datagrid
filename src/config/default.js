export const DEFAULT_CONFIG = {
  DATA_LENGTH: 10, // TODO: Change back to 1000
  MAX_SCORE: 3000,
  MAX_AMOUNT: 10000,
  FIXED_ROW_HEIGHT: 40,
};

export const ENUM_CONFIG = ['Admin', 'Student', 'Mentor', 'Worker'];

export const DATA_TYPES = {
  HIDDEN_TYPE: 'hidden',
  AVATAR_TYPE: 'avatar',
  TEXT_TYPE: 'text',
  OBJECT_TYPE: 'object',
  NUMBER_TYPE: 'number',
  BOOL_TYPE: 'boolean',
  DATE_TYPE: 'date',
};

export const MAP = {
  0: {
    name: 'id',
    title: '',
    columnWidth: '50px',
    isHidden: true,
    dataType: DATA_TYPES.HIDDEN_TYPE,
    leftPosition: 0,
    sticky: true,
  },
  1: {
    name: 'avatar',
    title: '',
    columnWidth: '45px',
    dataType: DATA_TYPES.AVATAR_TYPE,
    leftPosition: 50,
    sticky: true,
  },
  2: {
    name: 'name',
    title: 'Name',
    columnWidth: 150,
    dataType: DATA_TYPES.TEXT_TYPE,
    leftPosition: 95,
    sticky: true,
    isSortable: true,
    isSearchable: true,
  },
  3: {
    name: 'score',
    title: 'Score',
    columnWidth: 120,
    dataType: DATA_TYPES.NUMBER_TYPE,
    isSortable: true,
    isSearchable: true,
  },
  4: {
    name: 'registerDate',
    title: 'Reg Date',
    columnWidth: 150,
    dataType: DATA_TYPES.TEXT_TYPE,
    isSortable: true,
    isSearchable: true,
  },
  5: {
    name: 'lastVisit',
    title: 'Last Visit',
    columnWidth: 150,
    dataType: DATA_TYPES.TEXT_TYPE,
    isSortable: true,
  },
  6: {
    name: 'type',
    title: 'Person Type',
    columnWidth: 100,
    dataType: DATA_TYPES.TEXT_TYPE,
  },
  7: {
    name: 'instant',
    title: 'Instant',
    columnWidth: 150,
    dataType: DATA_TYPES.DATE_TYPE,
  },
  8: {
    name: 'money',
    title: 'Money',
    columnWidth: 100,
    dataType: DATA_TYPES.OBJECT_TYPE,
  },
  9: {
    name: 'active',
    title: 'Active',
    columnWidth: 70,
    dataType: DATA_TYPES.BOOL_TYPE,
  },
  10: {
    name: 'description',
    title: 'Description',
    columnWidth: 350,
    dataType: DATA_TYPES.TEXT_TYPE,
    largeText: true,
  },
};

export const THROTTLE_DELAY = 1000;
