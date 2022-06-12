const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController')

router.post('/cadastrar', async (req, res) => {
    await examController.createExam(req,res)
})
router.get('/', async (req, res) => {
    await examController.retrieveExams(req,res)
});
router.get('/:id', async (req, res) => {
    await examController.retrieveExam(req,res)
});
router.patch('/editar/:id', async (req, res) => {
    await examController.updateExam(req,res)
})
router.delete('/deletar/:id', async (req, res) => {
    await examController.deleteExam(req,res)
})

module.exports = router;
