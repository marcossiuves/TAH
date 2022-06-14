import React, { useEffect, useState } from "react";
import StandardInput from "../Components/StandardInput";
import StandardSelectBox from "../Components/StandardSelectBox";
import Button from "../Components/Button";
import { deleteQuestion, editQuestion } from '../services/Services';
import { useParams } from "react-router-dom";
import "./Styles/EditQuestionPageStyles.css";



const EditQuestionPage = () => {
	const [questionValues, setQuestionValues] = useState({})
	const { id } = useParams()

	const alternativas = [
		"option_a",
		"option_b",
		"option_c",
		"option_d",
		"option_e"
	]

	const options = [
		{ id: 1, name: "A" },
		{ id: 2, name: "B" },
		{ id: 3, name: "C" },
		{ id: 4, name: "D" },
		{ id: 5, name: "E" },
	]

	const handleChange = (field, value) => {
		setQuestionValues({ ...questionValues, [field]: value })
	}

	const editarQuestao = () => {
		editQuestion(id, questionValues)
	}

	const deletarQuestao = () => {
		deleteQuestion(id)
	}

	const fetchQuestaoData = () => [

	]

	useEffect(() => {
		fetchQuestaoData()
	}, [])

	return (

		<div className="main-question">

			<h2> Pergunta: {id} </h2>
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
					onClick={() => editarQuestao()}
				>
					Alterar Questão
				</Button>
				<Button
					onClick={() => deletarQuestao()}
				>
					Deletar Questão
				</Button>
			</div>
		</div>
	)
}
export default EditQuestionPage;