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
// OUTPUT: only countries in Oceania
// REQS: use .filter

export const filterOceania = (countries) => {
  return countries.filter((country) => country.continent === 'Oceania');
};

// INPUT: the array of countries from data.js
// OUTPUT: only countries that include the letters 'au'
// REQS: use .filter

export const filterAu = (countries) => {
  return countries.filter((country) => country.name.includes('au'));
};

// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {};
