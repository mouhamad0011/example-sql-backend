const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sportify', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
// npm i mysql2 sequelize