const Sequelize = require('sequelize');
const CONSTANTS = require('../../constants');
const bd = require('../../dbs/models');
const NotFound = require('../../errors/UserNotFoundError');
const ServerError = require('../../errors/ServerError');

module.exports.getHistoryByUserId = async (userId) => {
  const result = await bd.Transactions.findAll({
    where: {
      userId,
    },
  });
  if(result.length !== 0) {
    return result;
  }
  throw new NotFound('transactions are not found');
};

module.exports.getStatementByUserId = async (userId) => {
  const result = await bd.Transactions.findAll({
    where:{ userId },
    attributes: [
      'typeOperation',
      [Sequelize.fn('sum', Sequelize.col('sum')), 'sum'],
    ],
    group: ['typeOperation'],
    raw:true,
  });
  if(result.length !== 0) {
    return result;
  }
  throw new NotFound('transactions are not found');
};
