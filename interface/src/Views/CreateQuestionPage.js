import React, { useState } from "react";
import StandardInput from "../Components/StandardInput";
import StandardSelectBox from "../Components/StandardSelectBox";
import Button from "../Components/Button";
import { postNewQuestion } from "../services/PostServices";
import './Styles/CreateQuestionPageStyle.css'
import { cadastroQuestoes } from "../services/Services";

const CreateQuestionPage = () => {
  const [questionValues, setQuestionValues] = useState({})

  const alternativas = ["a", "b", "c", "d", "e"]

  const handleChange = (field, value) => {
    setQuestionValues({ ...questionValues, [field]: value })
  }

  const options = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
  ]

  const createQuestion = () => {
    cadastroQuestoes(questionValues)
  }


  return (

    <div className="main-question">

      <h2> Cadastro de perguntas -nome da prova-</h2>
      <textarea
        className="question-field"
        placeholder="Enunciado da pergunta..."
        name="enunciado"
        maxLength={2000}
        // @ts-ignore
        resize="none"
        onChange={event => handleChange(event.target.name, event.target.value)}
      />
      <div className="body-question">
        {alternativas.map((alternativa) => (
          <div className="body-question-alternatives">
            <h3> {alternativa}: </h3>
            <StandardInput
              styles="question-input"
              name={alternativa}
              placeHolder={`Alternativa ${alternativa}`}
              type="text"
              onChange={handleChange}
              values={null}
            />
          </div>
        ))}
        <h3> Resposta correta: </h3>
        <StandardSelectBox
          field={"answer"}
          options={options}
          onChange={handleChange}
        />
      </div>
      <div className="send-button">
        <Button
          onClick={() => createQuestion()}
        >
          Cadastrar Questao
        </Button>
      </div>
    </div>
  )
}
export default CreateQuestionPage;