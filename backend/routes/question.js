const express = require('express');
const Question = require('../database/models/Question.js')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const questions = await Question.findAll();
        if (questions) res.send(questions)
        else res.send({ msg: 'Não existem usuários' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
});
router.get('/:id', async (req, res) => {
    try {
        const question = await Question.findByPk(req.params.id);
        if (question) res.send(question);
        else res.status(400).send({ msg: 'Usuário não existe' });
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
});
router.delete('/deletar/:id', async (req, res) => {
    try {
        await Question.destroy({ where: { id_question: req.params.id } });
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
        const question = await Question.create(content);
        res.status(201).send({ msg: 'Deu certo o cadastro', content: question })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
})
router.patch('/editar/:id', async (req, res) => {
    try {
        await Question.update(req.body, { where: { id_question: req.params.id } });
        res.status(200).send({ msg: 'Deu certo o update.' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
})

module.exports = router;
