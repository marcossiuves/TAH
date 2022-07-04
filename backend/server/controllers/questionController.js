const Question = require("../database/models/Question");
const QuestionExam = require("../database/models/QuestionExam");

exports.createRealQuestion = async (req, res) => {
  try {
    let content = req.body;
    const question = await Question.create(content);
    const questionExam = await QuestionExam.create({
      id_question: question.dataValues.id_question,
      id_exam: req.params.id_exam,
    });

    res.status(201).send({
      msg: "Deu certo o cadastro",
      content: {
        question,
        questionExam,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};

exports.createPureQuestion = async (req, res) => {
  try {
    let content = req.body;
    const question = await Question.create(content);

    res.status(201).send({
      msg: "Deu certo o cadastro",
      content: { question },
    });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};

exports.retrieveQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    if (questions) res.send(questions);
    else res.send({ msg: "Não existem questões" });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};

exports.retrieveQuestion = async (req, res) => {
  try {
    const questions = await Question.findByPk(req.params.id);
    if (questions) res.send(questions);
    else res.status(400).send({ msg: "Questão não existe" });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    await Question.update(req.body, { where: { id_question: req.params.id } });
    res.status(200).send({ msg: "Deu certo o update." });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    await Question.destroy({ where: { id_question: req.params.id } });
    res.status(200).send({ msg: "Item deletado." });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};
