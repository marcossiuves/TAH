import React, { useEffect, useState } from "react";
import StandardInput from "../Components/StandardInput";
import StandardSelectBox from "../Components/StandardSelectBox";
import Button from "../Components/Button";
import './Styles/CreateQuestionPageStyle.css'
import { createQuestion, fetchExam } from "../services/Services";
import { useParams } from "react-router";

const CreateQuestionPage = () => {
  const [questionValues, setQuestionValues] = useState({})
  const [testSpecs, setTestSpecs] = useState({})

  const handleChange = (field, value) => {
    setQuestionValues({ ...questionValues, [field]: value })
  }


  const alternativas = [
    { id: 1, name: "A) ", field: "option_a" },
    { id: 2, name: "B) ", field: "option_b" },
    { id: 3, name: "C) ", field: "option_c" },
    { id: 4, name: "D) ", field: "option_d" },
    { id: 5, name: "E) ", field: "option_e" },
  ]

  const options = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
  ]

  const params = useParams()

  const handleCreateQuestion = () => {
    createQuestion(params.id, questionValues)
  }


  const getTest = () => {
    // setTestSpecs(fetchExam(params.id))
    setQuestionValues({})
  }

  useEffect(() => {
    getTest();
  }, [])


  return (

    <div className="main-question">

      <h2> Cadastro de perguntas </h2>
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
            <h3> {alternativa.name}: </h3>
            <StandardInput
              styles="question-input"
              name={alternativa.field}
              placeHolder={`Alternativa ${alternativa.name}`}
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