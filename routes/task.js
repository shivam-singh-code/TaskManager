const express = require('express');
const { getAllTaks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks');
const router = express.Router();

router.route('/').get(getAllTaks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router