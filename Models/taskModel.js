const sequelize = require('../config/database');
  
const { Sequelize, DataTypes } = require('sequelize');


const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

// HON TO CREATE THE TABLE IF IT DOESN'T EXIST
Task.sync();

module.exports = Task;
