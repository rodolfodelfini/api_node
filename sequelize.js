const Sequelize = require('sequelize');
require('dotenv').config()

let sequelize = null;
module.exports = (app) => {
  const { config } = app;

  if (!sequelize) {
    sequelize = new Sequelize(
      process.env.DB_DATABASE, 
      process.env.DB_USER, 
      process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    });
  }

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!")
}).catch(function(erro){
  console.log("Falha ao se conectar "+erro);
})

return sequelize;
};
