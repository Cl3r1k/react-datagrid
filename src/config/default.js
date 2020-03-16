export const DEFAULT_CONFIG = {
  DATA_LENGTH: 1000,
  MAX_SCORE: 3000,
  MAX_AMOUNT: 10000,
};

export const ENUM_CONFIG = ['Admin', 'Student', 'Mentor', 'Worker'];

export const DATA_TYPES = {
  AVATAR_TYPE: 'avatar',
  TEXT_TYPE: 'text',
  OBJECT_TYPE: 'object',
  NUMBER_TYPE: 'number',
  BOOL_TYPE: 'boolean',
};

export const MAP = {
  0: {
    name: 'id',
    columnWidth: 100,
    isHidden: true,
    dataType: DATA_TYPES.TEXT_TYPE,
  },
  1: {
    name: 'avatar',
    columnWidth: 50,
    dataType: DATA_TYPES.AVATAR_TYPE,
  },
  2: {
    name: 'name',
    columnWidth: 150,
    dataType: DATA_TYPES.TEXT_TYPE,
  },
  3: {
    name: 'score',
    columnWidth: 100,
    dataType: DATA_TYPES.NUMBER_TYPE,
  },
  4: {
    name: 'registerDate',
    columnWidth: 150,
    dataType: DATA_TYPES.TEXT_TYPE,
  },
  5: {
    name: 'lastVisit',
    columnWidth: 150,
    dataType: DATA_TYPES.TEXT_TYPE,
  },
  6: {
    name: 'type',
    columnWidth: 100,
    dataType: DATA_TYPES.TEXT_TYPE,
  },
  7: {
    name: 'instant',
    columnWidth: 150,
    dataType: DATA_TYPES.TEXT_TYPE,
  },
  8: {
    name: 'money',
    columnWidth: 100,
    dataType: DATA_TYPES.OBJECT_TYPE,
  },
  9: {
    name: 'active',
    columnWidth: 50,
    dataType: DATA_TYPES.BOOL_TYPE,
  },
  10: {
    name: 'description',
    columnWidth: 350,
    dataType: DATA_TYPES.TEXT_TYPE,
  },
};
