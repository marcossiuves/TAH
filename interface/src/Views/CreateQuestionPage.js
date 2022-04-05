import React, { useState } from "react";
import StandardInput from "../Components/StandardInput";
import './Styles/CreateQuestionPageStyle.css'


const CreateQuestionPage = () => {
  const [questionValues, setQuestionValues] = useState({})

  const alternativas = [
    "a", "b", "c", "d", "e"
  ]

  const handleChange = (field, value) => {
    setQuestionValues({ ...questionValues, [field]: value })
  }



  return (

    <div className="main-question">
      {console.log(questionValues)}
      <h2> Cadastro de perguntas </h2>
      <textarea
        className="question-field"
        placeholder="Enunciado da pergunta..."
        name="enunciado"
        maxLength={2000}
        resize="none"
      />
      <div className="body-question">
        {alternativas.map((alternativa) => (
          <div className="body-question-alternatives">
            <h3> {alternativa}: </h3>
            <StandardInput
              style="question-input"
              name={alternativa}
              placeHolder={`Alternativa ${alternativa}`}
              type="text"
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <label for="vehicle1"> I have a bike</label>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label for="vehicle1"> I have a bike</label>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label for="vehicle1"> I have a bike</label>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label for="vehicle1"> I have a bike</label>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label for="vehicle1"> I have a bike</label>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <button> Enviar</button>
    </div>
  )
}
export default CreateQuestionPage;