/**
* The function takes an object with user data and returns a new object in which
 *password field is missing.
 *
 * @param {string} user
 */

const newUser = {
  name: 'Nick',
  city: 'Kharkov',
  mail: 'nick@mail.com',
  password: '2ZYdmraD6jgaJT3Ga1brjQswxh02',
};

function removePassword(user) {
  const userWithoutPassword = {};
  for (var userData in user) {
    if (userData === 'password') continue;
    userWithoutPassword[userData] = user[userData];
  }
  return userWithoutPassword;
}

const guest = removePassword(newUser);
console.log('2. guest', guest);
