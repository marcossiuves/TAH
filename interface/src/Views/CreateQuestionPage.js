import React, { useState } from "react";
import StandardInput from "../Components/StandardInput";
import StandardSelectBox from "../Components/StandardSelectBox";
import Button from "../Components/Button";
import './Styles/CreateQuestionPageStyle.css'
import { createQuestion } from "../services/Services";

const CreateQuestionPage = () => {
  const [questionValues, setQuestionValues] = useState({})


  const handleChange = (field, value) => {
    setQuestionValues({ ...questionValues, [field]: value })
  }


  const alternativas = [
    "A) ",
    "B) ",
    "C) ",
    "D) ",
    "E) ",
  ]

  const options = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
  ]

  const handleCreateQuestion = () => {
    createQuestion(questionValues)
  }



  return (

    <div className="main-question">

      <h2> Cadastro de perguntas -nome da prova-</h2>
      <textarea
        className="question-field"
        placeholder="Enunciado da pergunta..."
        name="statement"
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
          field={"right_option"}
          options={options}
          onChange={handleChange}
        />
      </div>
      <div className="send-button">
        <Button
          onClick={() => handleCreateQuestion()}
        >
          Cadastrar Questao
        </Button>
      </div>
    </div>
  )
}
export default CreateQuestionPage;