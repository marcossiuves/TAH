const express = require("express");
const router = express.Router();
const questionResponseController = require("../controllers/questionResponseController");

router.post("/cadastrar", (req, res) => {
  questionResponseController.createQuestionResponse(req, res);
});
router.get("/", (req, res) => {
  questionResponseController.retrieveQuestionResponses(req, res);
});
router.get("/:id", (req, res) => {
  questionResponseController.retrieveQuestionResponse(req, res);
});
router.patch("/editar/:id", (req, res) => {
  questionResponseController.updateQuestionResponse(req, res);
});
router.delete("/deletar/:id", (req, res) => {
  questionResponseController.deleteQuestionResponse(req, res);
});
router.get("/conferirResposta/:id_question", (req, res) => {
  questionResponseController.evaluateUserResponse(req, res);
});

module.exports = router;
