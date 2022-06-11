const express = require('express');
const MajorField = require('../database/models/MajorField.js')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const questionsResponses = await MajorField.findAll();
        if (questionsResponses) res.send(questionsResponses)
        else res.send({ msg: 'Não existem respostas' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
});
router.get('/:id', async (req, res) => {
    try {
        const majorField = await MajorField.findByPk(req.params.id);
        if (majorField) res.send(majorField);
        else res.status(400).send({ msg: 'Resposta não existe' });
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
});
router.delete('/deletar/:id', async (req, res) => {
    try {
        await MajorField.destroy({ where: { id_major_field: req.params.id } });
        res.status(200).send({ msg: 'Item deletado.' })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
})
router.post('/cadastrar', async (req, res) => {
    try {
        let content = req.body;
        if (req.body.evaluated === true) content.evaluated = false;
        const majorField = await MajorField.create(content);
        res.status(201).send({ msg: 'Deu certo o cadastro', content: majorField })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
})
router.patch('/editar/:id', async (req, res) => {
    try {
        await MajorField.update(req.body, { where: { id_major_field: req.params.id } });
        res.status(200).send({ msg: 'Deu certo o update.' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
})

module.exports = router;
