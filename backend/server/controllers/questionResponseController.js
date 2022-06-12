
const QuestionResponse = require('../database/models/QuestionResponse')

exports.createQuestionResponse = async (req, res) => {
    try {
        let content = req.body;
        if (req.body.evaluated === true) content.evaluated = false;
        const questionResponse = await QuestionResponse.create(content);
        res.status(201).send({ msg: 'Deu certo o cadastro', content: questionResponse })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
}

exports.retrieveQuestionResponses = async (req, res) => {
    try {
        const questionResponses = await QuestionResponse.findAll();
        if (questionResponses) res.send(questionResponses)
        else res.send({ msg: 'Não existem formulários de resposta de questão' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.retrieveQuestionResponse = async (req, res) => {
    try {
        const questionResponse = await QuestionResponse.findByPk(req.params.id);
        if (questionResponse) res.send(questionResponse);
        else res.status(400).send({ msg: 'Formulário de resposta de questão não existe' });
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.updateQuestionResponse = async (req, res) => {
    try {
        await QuestionResponse.update(req.body, { where: { id_question_response: req.params.id } });
        res.status(200).send({ msg: 'Deu certo o update.' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.deleteQuestionResponse = async (req, res) => {
    try {
        await QuestionResponse.destroy({ where: { id_question_response: req.params.id } });
        res.status(200).send({ msg: 'Item deletado.' })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
}