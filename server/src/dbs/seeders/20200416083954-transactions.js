

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Transactions', [{
      userId:'1',
      typeOperation: 'expense',
      sum: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId:'9',
      typeOperation: 'income',
      sum: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId:'2',
      typeOperation: 'expense',
      sum: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId:'5',
      typeOperation: 'income',
      sum: 100, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId:'3',
      typeOperation: 'expense',
      sum: 100, createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId:'9',
      typeOperation: 'income',
      sum: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    //return queryInterface.bulkDelete('TransactionHistory', null, {});
  },
};
