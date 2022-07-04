import React, { useEffect, useState } from "react";
import StandardInput from "../Components/StandardInput";
import StandardSelectBox from "../Components/StandardSelectBox";
import Button from "../Components/Button";
import './Styles/CreateQuestionPageStyle.css'
import { createQuestion } from "../services/Services";
import { useNavigate, useParams } from "react-router";

const CreateQuestionPage = () => {
  const [questionValues, setQuestionValues] = useState({})
  const [testSpecs, setTestSpecs] = useState({})

  const handleChange = (field, value) => {
    setQuestionValues({ ...questionValues, [field]: value })
  }

  let navigate = useNavigate();

  const alternativas = [
    { id: 1, name: "A) ", field: "option_a" },
    { id: 2, name: "B) ", field: "option_b" },
    { id: 3, name: "C) ", field: "option_c" },
    { id: 4, name: "D) ", field: "option_d" },
    { id: 5, name: "E) ", field: "option_e" },
  ]

  const options = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
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
          styleType={"custom-confirm-button"}
          onClick={() => handleCreateQuestion()}
        >
          Cadastrar Questao
        </Button>
        <br />
        <Button
          styleType={"custom-button"}
          onClick={() => navigate('/selecionar-prova')}
        >
          Finalizar
        </Button>
      </div>
    </div>
  )
}
export default CreateQuestionPage;