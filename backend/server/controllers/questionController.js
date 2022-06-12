
const Question = require('../database/models/Question')

exports.createQuestion = async (req, res) => {
    try {
        let content = req.body;
        if (req.body.evaluated === true) content.evaluated = false;
        const questions = await Question.create(content);
        res.status(201).send({ msg: 'Deu certo o cadastro', content: questions })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
}

exports.retrieveQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll();
        if (questions) res.send(questions)
        else res.send({ msg: 'Não existem questões' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.retrieveQuestion = async (req, res) => {
    try {
        const questions = await Question.findByPk(req.params.id);
        if (questions) res.send(questions);
        else res.status(400).send({ msg: 'Questão não existe' });
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.updateQuestion = async (req, res) => {
    try {
        await Question.update(req.body, { where: { id_question: req.params.id } });
        res.status(200).send({ msg: 'Deu certo o update.' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.deleteQuestion = async (req, res) => {
    try {
        await Question.destroy({ where: { id_question: req.params.id } });
        res.status(200).send({ msg: 'Item deletado.' })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
}