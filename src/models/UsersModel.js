const Sequelize = require('sequelize');

module.exports = (app) => {
  const { sequelize: sequelizeCon } = app;

  const UsersModel = sequelizeCon.define('users', {
    id_user: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    status: {
      type: Sequelize.DOUBLE(),
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE(),
    },
    UpdatedAt: {
      type: Sequelize.DATE(),
    },
    DeletedAt: {
      type: Sequelize.DATE(),
    },
  }, {
    freezeTableName: true,
    timestamps: false
  });

  UsersModel.destroy({
    where: {},
    truncate: true
  })

  return UsersModel;
};
