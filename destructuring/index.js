import prettyLog from '../helpers/prettyLog';

const user = {
  name: 'Emanuel',
  location: {
    state: 'Quebec',
    country: 'Canada',
  },
  profession: 'Mobile and Web developer'
};

// Basic Object

// const { location: { state } } = user;

// Object with Rename

// const { name: firstname } = user;

// Object with rest

// const { name, location, ...rest } = user;


const animals = [
  {
    name: 'Dog',
    legs: 4
  },
  {
    name: 'Cat',
    legs: 4
  },
  {
    name: 'Fish',
    legs: 0
  },
]

// Basic Array

// const [animal1, animal2] = animals;

// Array with default

// const [dog, cat, fish, bird = 'Jon'] = animals;

// Array with ignore

// const [, , fish] = animals;

// Array with rest

// const [, cat, ...rest] = animals;

// Function

// function greeting({ name = 'Jane', age = 68 } = {}) {
//   return prettyLog(`Hello ${name} who have age of ${age}`)
// }

// Function rest

function greeting({ country, ...rest }) {
  return prettyLog(`Hello ${country} who have age of ${rest.age}`);
}

greeting({ name: 'Jon', age: 65, country: 'Canada' });