require("dotenv").config();
const express = require("express");
const app = express();
const { SERVER_PORT } = process.env;
const cors = require("cors");
const router = express.Router();

app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/cursos", require("./majorField"));
app.use("/questoes", require("./question"));
app.use("/prova", require("./exam"));
app.use("/respostaDaQuestao", require("./questionResponse"));
// app.use('/questaoDaProva', require('./questionExam'))
app.use("/usuarios", require("./user"));

app.get("/", (req, res) => {
  res.send({ msg: "Rota do servidor da API testada. Good to go" });
});

app.listen(SERVER_PORT, () => {
  console.log(`Ouvindo servidor na porta: ${SERVER_PORT}`);
});

module.exports = router;
