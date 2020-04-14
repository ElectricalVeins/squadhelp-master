const bd = require('../dbs/models');
const CONSTANTS = require('../constants');

module.exports.createWhereForAllContests = (contestId, industry, awardSort,
  selectedContestTypes) => {

  let object = {
    where: {},
    order: [],
  };
  if (selectedContestTypes) {
    Object.assign(object.where, { contestType: //selectedContestTypes.toString()
       getPredicateTypes(selectedContestTypes)
    }); // сюда приходит сразу массив с выбранными аргументами
  }
  if (contestId) {
    Object.assign(object.where, { id: contestId });
  }
  if (industry) {
    Object.assign(object.where, { industry: industry });
  }
  if (awardSort) {
    object.order.push(['prize', awardSort]);
  }
  Object.assign(object.where, {
    status: {
      [ bd.Sequelize.Op.or ]: [
        CONSTANTS.CONTEST_STATUS_FINISHED,
        CONSTANTS.CONTEST_STATUS_ACTIVE,
      ],
    },
  });
  object.order.push(['id', 'desc']);
  return object;
};
function getPredicateTypes (array) {
  return { [ bd.Sequelize.Op.or ]: array
     // [types[ index ].split(',')]
  };
}

/*
const types = [
  '',
  'name,tagline,logo',
  'name',
  'tagline',
  'logo',
  'name,tagline',
  'logo,tagline',
  'name,logo'
];*/
