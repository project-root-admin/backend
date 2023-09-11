// userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/users', userController.createUser);

module.exports = router;