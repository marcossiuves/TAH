const express = require('express');
const router = express.Router();
const majorFieldController = require('../controllers/majorFieldController')

router.post('/cadastrar', (req, res) => {
    majorFieldController.createMajorField(req, res);
})
router.get('/', (req, res) => {
    majorFieldController.retrieveMajorFields(req, res);
});
router.get('/:id', (req, res) => {
    majorFieldController.retrieveMajorField(req, res);
});
router.patch('/editar/:id', (req, res) => {
    majorFieldController.updateMajorField(req, res);
})
router.delete('/deletar/:id', (req, res) => {
    majorFieldController.deleteMajorField(req, res);
})

module.exports = router;
