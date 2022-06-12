const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/cadastrar', (req, res) => {
    userController.createUser(req, res);
})
router.get('/', (req, res) => {
    userController.retrieveUsers(req, res);
});
router.get('/:id', (req, res) => {
    userController.retrieveUser(req, res);
});
router.patch('/editar/:id', (req, res) => {
    userController.updateUser(req, res);
})
router.delete('/deletar/:id', (req, res) => {
    userController.deleteUser(req, res);
})

module.exports = router;
