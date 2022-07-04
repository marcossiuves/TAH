const Question = require("../database/models/Question");
const QuestionExam = require("../database/models/QuestionExam");
const QuestionResponse = require("../database/models/QuestionResponse");
const UserExamResult = require("../database/models/UserExamResult");
const examController = require("./examController");

exports.createQuestionResponse = async (req, res) => {
    try {
        let content = req.body;
        const questionResponse = await QuestionResponse.create(content);
        res
            .status(201)
            .send({ msg: "Deu certo o cadastro", content: questionResponse });
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e });
    }
};

exports.retrieveQuestionResponses = async (req, res) => {
    try {
        const questionResponses = await QuestionResponse.findAll();
        if (questionResponses) res.send(questionResponses);
        else res.send({ msg: "Não existem formulários de resposta de questão" });
        const idsQuestionResponses = questionResponses.map(
            (q) => q.dataValues.id_question
        );
        return idsQuestionResponses;
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e });
    }
};

exports.retrieveQuestionResponse = async (req, res) => {
    try {
        const questionResponse = await QuestionResponse.findByPk(req.params.id);
        if (questionResponse) res.send(questionResponse);
        else
            res
                .status(400)
                .send({ msg: "Formulário de resposta de questão não existe" });
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e });
    }
};

exports.updateQuestionResponse = async (req, res) => {
    try {
        await QuestionResponse.update(req.body, {
            where: { id_question_response: req.params.id },
        });
        res.status(200).send({ msg: "Deu certo o update." });
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e });
    }
};
// atomizado
exports.evaluateUserResponse = async (req, res) => {
    try {
        const idUser = 3; // req.body
        const idQuestion = req.params.id_question;
        const selectedOption = await QuestionResponse.findOne({
            where: { id_question: idQuestion, id_user: idUser },
        });
        const rightOption = await Question.findByPk(idQuestion);
        let acertou;
        if (selectedOption && rightOption) {
            if (
                selectedOption.dataValues.option === rightOption.dataValues.right_option
            ) {
                acertou = true;
            } else acertou = false;
            res.send({ acertou });
            return acertou;
        } else res.send({ msg: "O usuário não respondeu essa pergunta." });
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e });
    }
};
// contador de respostas certas
exports.evaluateUserExam = async (req, res) => {
    try {
        const idUser = 3; // const idUser = req.body.id_user
        const idExam = 2; // const idExam = req.body/params.id_exam
        let relatedQuestions = await QuestionExam.findAll({
            where: { id_exam: idExam }, // where: { id_exam: req.params.id_exam },
        });
        relatedQuestions = relatedQuestions.map((r) => ({
            id_exam: r.dataValues.id_exam,
            id_question: r.dataValues.id_question,
        }));

        let correctAnswers = 0;
        for (const question of relatedQuestions) {
            const idQuestion = question.id_question;

            const selectedOption = await QuestionResponse.findOne({
                id_question: question.id_question,
                id_user: idUser,
            });
            const rightOption = await Question.findByPk(idQuestion);
            if (
                selectedOption &&
                rightOption &&
                selectedOption.dataValues.option ===
                String(rightOption.dataValues.right_option).trim()
            ) {
                correctAnswers += 1;
            }
        }
        console.log("\n" + correctAnswers);
        UserExamResult.findCreateFind({ id_user: idUser, id_exam: idExam, num_right_answers: correctAnswers })
        res.status(200).send({ quantidadeAcertos: correctAnswers });
    } catch (e) {
        console.error(e);
        res.status(400).send({ e });
    }
};

exports.deleteQuestionResponse = async (req, res) => {
    try {
        await QuestionResponse.destroy({
            where: { id_question_response: req.params.id },
        });
        res.status(200).send({ msg: "Item deletado." });
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e });
    }
};
