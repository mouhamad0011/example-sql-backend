const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/taskController');

// ROUTE TO ADD DATA
router.post('/add', controllers.createTask);

// ROUTE TO GET DATA
router.get('/get', controllers.getAllTasks);

//ROUTE TO DELETE DATA
router.delete('/delete/:id',controllers.deleteTask);

module.exports = router;
