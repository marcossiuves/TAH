const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController')

router.post('/cadastrar',  (req, res) => {
    questionController.createPureQuestion(req, res);
})
router.get('/', (req, res) => {
    questionController.retrieveQuestions(req, res);
});
router.get('/:id', (req, res) => {
    questionController.retrieveQuestion(req, res);
});
router.patch('/editar/:id', (req, res) => {
    questionController.updateQuestion(req, res);
})
router.delete('/deletar/:id', (req, res) => {
    questionController.deleteQuestion(req, res);
})

module.exports = router;
