const express = require('express');
const { getUsers, getUserID, createUser, updateUser, deleteUser} =
require("../consolelers/userController");

const router = express.Router();

router.get('/users', getUsers);
//router.get('/users/:id', getUsersID);
//router.post('/users', createUser);
//router.put('/users/:id', updateUser);
//router.delete('/users/:id', deleteUser);

module.exports = router;