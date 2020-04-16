
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeOperation: {
      type: DataTypes.ENUM('income', 'expense'),
      allowNull: false,
    },
    sum: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  });

  Transactions.associate = function (models) {
    Transactions.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Transactions;
};
