// Modules
import Faker from 'faker';
import orderBy from 'lodash/orderBy';

// Constants
import { DEFAULT_CONFIG, ENUM_CONFIG } from 'config/default';

const ACTIVE_TOGGLE = 1;
const TOGGLE_FIELD = 'active';
const ENUM_FIELD = 'type';
const EXCLUDED_FIELD = 'id';

const { DATA_LENGTH, MAX_SCORE, MAX_AMOUNT } = DEFAULT_CONFIG;

const getRandomEnumValue = () => {
  return ENUM_CONFIG[Math.floor((Math.random() * 10) % ENUM_CONFIG.length)];
};

const generateFakeRecord = () => {
  return {
    id: Faker.random.uuid(),
    avatar: Faker.image.avatar(),
    name: Faker.internet.userName(),
    score: Faker.random.number(MAX_SCORE),
    registerDate: Faker.date.recent().toLocaleDateString(),
    lastVisit: Faker.date.weekday(),
    type: getRandomEnumValue(),
    instant: new Date().getTime(),
    money: {
      currencySymbol: Faker.finance.currencySymbol(),
      amount: Faker.random.number(MAX_AMOUNT),
    },
    active: !(Math.floor(Math.random() * 10) % 2),
    description: Faker.lorem.paragraph(),
  };
};

export const generateFakeData = (dataLength = DATA_LENGTH) => {
  return Array.from({ length: dataLength }, () => generateFakeRecord());
};

export const sortDataByFieldName = (data, sortFields, sortDirections) => {
  return orderBy(data, sortFields, sortDirections);
};

const objectContainsValue = (record, value) => {
  return !!Object.keys(record).filter(
    key =>
      key !== EXCLUDED_FIELD &&
      record[key]
        .toString(/* some params */)
        .toLowerCase()
        .includes(value.toLowerCase())
  ).length;
};

const globalSearch = (data, globalSearchValue) => {
  return data.filter(item => objectContainsValue(item, globalSearchValue));
};

const searchByFieldName = (data, searchField, searchValue) => {
  return data.filter(item =>
    item[searchField]
      .toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );
};

const filterByEnums = (data, filterEnums) => {
  return data.filter(item => filterEnums.includes(item[ENUM_FIELD]));
};

const filterByToggle = (data, filterToggle) => {
  return data.filter(item => {
    return (
      (item[TOGGLE_FIELD] && filterToggle === ACTIVE_TOGGLE) ||
      (!item[TOGGLE_FIELD] && filterToggle !== ACTIVE_TOGGLE)
    );
  });
};

export const filterData = (
  data,
  searchField,
  searchValue,
  globalSearchValue,
  filterToggle,
  filterEnums
) => {
  let filteredData = [...data];

  if (searchField) {
    filteredData = searchByFieldName(filteredData, searchField, searchValue);
  }

  if (globalSearchValue) {
    filteredData = globalSearch(filteredData, globalSearchValue);
  }

  if (filterEnums.length) {
    filteredData = filterByEnums(filteredData, filterEnums);
  }

  if (filterToggle) {
    filteredData = filterByToggle(filteredData, filterToggle);
  }

  return filteredData;
};

export const excludeById = (data, deletedItems) => {
  return data.filter(item => !deletedItems.includes(item.id));
};
