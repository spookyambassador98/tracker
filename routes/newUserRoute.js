const express = require('express');
const NewUserController = require('../controllers/usersController.js');
const router = express.Router(); // Create a new router instance

router.post('/register', NewUserController.register);

module.exports = router;
