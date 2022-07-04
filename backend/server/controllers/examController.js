
const Exam = require('../database/models/Exam')
const QuestionExam = require('../database/models/QuestionExam')

exports.createExam = async (req, res) => {
    try {
        let content = req.body;
        const exams = await Exam.create(content);
        res.status(201).send({ msg: 'Deu certo o cadastro', content: exams })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
}

exports.retrieveExams = async (req, res) => {
    try {
        const questions = await Exam.findAll();
        if (questions) res.send(questions)
        else res.send({ msg: 'Não existem provas' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.retrieveExam = async (req, res) => {
    try {
        const exams = await Exam.findByPk(req.params.id);
        const questions = await QuestionExam.findAll({ where: { id_exam: req.params.id } })
        if (exams) res.send({ exams, questions });
        else res.status(400).send({ msg: 'Prova não existe' });
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.retrieveExamQuestions = async (req, res) => {
    try {
        const exams = await Exam.findByPk(req.params.id);
        // const questions = await 
        if (exams) res.send(exams);
        else res.status(400).send({ msg: 'Prova não existe' });
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.updateExam = async (req, res) => {
    try {
        await Exam.update(req.body, { where: { id_exam: req.params.id } });
        res.status(200).send({ msg: 'Deu certo o update.' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.deleteExam = async (req, res) => {
    try {
        await Exam.destroy({ where: { id_exam: req.params.id } });
        res.status(200).send({ msg: 'Item deletado.' })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
}