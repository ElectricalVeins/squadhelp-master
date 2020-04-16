const bcrypt = require( 'bcrypt' );
const SALT_ROUND = 6;


const firstNames = [
  'Emma',
  'Olivia',
  'Ava',
  'Isabella',
  'Sophia',
  'Charlotte',
  'Mia',
  'Amelia',
  'Harper',
  'Evelyn',
  'Abigail',
  'Emily',
  'Elizabeth',
  'Mila',
  'Ella',
  'Avery',
  'Sofia'];

const lastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Jones',
  'Brown',
  'Davis',
  'Miller',
  'Wilson',
  'Moore',
  'Taylor',
  'Anderson',
  'Thomas',
  'Jackson',
  'White',
  'Harris',
  'Baker',
  'Gonzalez',
  'Nelson',
  'Carter',
  'Mitchell',
  'Perez',
  'Roberts',
  'Turner'];

function generateUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const surname = lastNames[ Math.floor(Math.random() * lastNames.length) ];
    users.push({
      firstName: firstNames[ Math.floor(Math.random() * firstNames.length) ],
      lastName: surname,
      displayName: `${surname} ${surname}`,
      email: `user_${surname}${i}@gmail.com`,
      avatar: 'anon.png',
      password: bcrypt.hashSync('Test1234', bcrypt.genSaltSync(SALT_ROUND)),
      rating: 0,
      balance: 0,
      role: 'customer',
    });
  }
  return users;
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', generateUsers(20), {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  },
};
