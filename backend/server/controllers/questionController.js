const Question = require("../database/models/Question");
const QuestionExam = require("../database/models/QuestionExam");
// POST site/exame/1/questao

// prévia cadastro
// {
//     id_question: 4,
//     statement: 'opa?',
//     option_a: 'oia.',
//     option_b: 'oia.',
//     option_c: 'oia ou menos.',
//     option_d: 'oia.',
//     option_e: 'oia vezes..',
//     right_option: 'a',
//     evaluated: false,
//     updatedAt: 2022-07-03T19:37:54.308Z,
//     createdAt: 2022-07-03T19:37:54.308Z
//   },

exports.createRealQuestion = async (req, res) => {
  try {
    // pegar REQ.PARAM.id_exam /:id_exam da rota
    // CREATE QuestionExam, depois da question
    let content = req.body;
    content.evaluated = false; // X
    const question = await Question.create(content);
    const questionExam = await QuestionExam.create({
      id_question: question.dataValues.id_question,
      id_exam: req.params.id_exam,
    });
    console.log(questionExam)

    res.status(201).send({
      msg: "Deu certo o cadastro",
      content: {
        question,
        questionExam
      },
    });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};

exports.createQuestionPure = async (req, res) => {
  try {
    let content = req.body;
    content.evaluated = false; // X
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
