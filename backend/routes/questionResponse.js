const express = require('express');
const QuestionResponse = require('../database/models/QuestionResponse.js')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const questionsResponses = await QuestionResponse.findAll();
        if (questionsResponses) res.send(questionsResponses)
        else res.send({ msg: 'Não existem respostas' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
});
router.get('/:id', async (req, res) => {
    try {
        const questionResponse = await QuestionResponse.findByPk(req.params.id);
        if (questionResponse) res.send(questionResponse);
        else res.status(400).send({ msg: 'Resposta não existe' });
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
});
router.delete('/deletar/:id', async (req, res) => {
    try {
        await QuestionResponse.destroy({ where: { id_question_response: req.params.id } });
        res.status(200).send({ msg: 'Item deletado.' })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
})
router.post('/', async (req, res) => {
    try {
        let content = req.body;
        if (req.body.evaluated === true) content.evaluated = false;
        const questionResponse = await QuestionResponse.create(content);
        res.status(201).send({ msg: 'Deu certo o cadastro', content: questionResponse })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
})
router.patch('/editar/:id', async (req, res) => {
    try {
        await QuestionResponse.update(req.body, { where: { id_question_response: req.params.id } });
        res.status(200).send({ msg: 'Deu certo o update.' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
})

module.exports = router;
