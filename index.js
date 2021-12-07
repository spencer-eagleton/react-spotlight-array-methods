// INPUT: the array of countries from data.js
// OUTPUT: an array of the names
// REQS: use .map

export const getCountryNames = (countries) => {
  const countryNames = countries.map((countries) => countries.name);
  return countryNames;
};

// INPUT: the array of countries from data.js
// OUTPUT: an array of the names and their iso2 country codes using .map
// REQS: use .map

export const getCountryCodes = (countries) => {
  const countryCodes = countries.map((countries) => [countries.name, countries.iso2]);
  return countryCodes;
};

// INPUT: the array of countries from data.js
// OUTPUT: only countries in Oceana
// REQS: use .filter

export const filterOceania = (countries) => {};

// INPUT: the array of countries from data.js
// OUTPUT: only countries that include the letters 'au'
// REQS: use .filter

export const filterAu = (countries) => {};

// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {};
