// @flow

type User = {
  name: ?string,
  country: string,
  age: number,
};

type Users = Array<User>;

const bob: User = {
  age: 3,
  country: 'USA',
  name: null
};

const bob2: User = {
  age: 3,
  country: 'USA',
  name: 'Bob',
};

const users = [bob, bob2];

users.forEach(user => {
  if (user.name != null) {
    console.log(user.name.length)
  }
})
