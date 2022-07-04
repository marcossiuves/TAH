import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import Button from "../Components/Button";
import StandardSelectBox from "../Components/StandardSelectBox";
import { API_HOST } from "../services/consts";
import './Styles/CreateQuestionPageStyle.css'

const TestPage = () => {
	const [testSpecs, setTestSpecs] = useState({})
	const [testQuestions, setTestQuestions] = useState([])
	const [questionData, setQuestionData] = useState({})
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [started, setStarted] = useState(false)
	const [currentAnswer, setCurrentAnswer] = useState()
	const alternativas = [
		{ id: 1, field: "A) ", name: "option_a" },
		{ id: 2, field: "B) ", name: "option_b" },
		{ id: 3, field: "C) ", name: "option_c" },
		{ id: 4, field: "D) ", name: "option_d" },
		{ id: 5, field: "E) ", name: "option_e" },
	]
	let navigate = useNavigate();

	const params = useParams()

	const fetchExamAndQuestions = async () => {
		// @ts-ignore
		const response = await axios.get(`${API_HOST}/prova/${params.id}`)
			.then(response => (
				setTestSpecs(response.data.exams),
				setTestQuestions(response.data.questions),
				fetchQuestionData((response.data.questions)[0].id_question_exam)
			))
			.catch(err => err.data)
	}

	const fetchQuestionData = (id) => {
		axios.get(`${API_HOST}/questoes/${id}`)
			.then(res => setQuestionData(res.data))
			.catch(err => err.status)
	}

	const handleQuestionResponse = (questionId) => {

		const questionResponseData = {
			// @ts-ignore
			id_exam: parseInt(params.id),
			id_question: questionId,
			option: currentAnswer,
			id_user: 1,
		}
		axios.post(`${API_HOST}/respostaDaQuestao/cadastrar`, questionResponseData)
			// @ts-ignore
			.then(res => setCurrentQuestion(currentQuestion + 1))
			.catch(err => err.status)
		fetchQuestionData(testQuestions[currentQuestion + 1].id_question_exam)
	}


	// @ts-ignore
	const handleAnswerChange = (field, value) => {
		setCurrentAnswer(value)
	}

	useEffect(() => {
		fetchExamAndQuestions();
	}, [])


	return (
		<div className="main-question">
			<h1> {testSpecs.
				// @ts-ignore
				title} </h1>
			<h2> {testSpecs.
				// @ts-ignore
				subject} </h2>
			<div className="body-question">
				{!started && (
					<>
						<h3 style={{ color: "#000" }}> O teste possui {testQuestions.length} questões.</h3>
						<Button
							styleType={"custom-button"}
							onClick={() => setStarted(!started)}>
							Começar prova
						</Button>
					</>
				)}

			</div>
			{
				(started && questionData) ? (
					<>
						<h3>{questionData.
							// @ts-ignore
							statement}</h3>
						<div className="body-question">
							{alternativas.map((alt) =>
								<h3>{alt.field} : {questionData[alt.name]}</h3>
							)}
						</div>
						<StandardSelectBox
							field={"subject"}
							options={alternativas}
							onChange={handleAnswerChange}
						/>
						{(testQuestions.length == currentQuestion) ?
							<Button
								styleType={"custom-confirm-button"}
								onClick={() => navigate('/selecionar-prova')}>
								Finalizar
							</Button>
							:
							<Button
								styleType={"custom-button"}
								onClick={() => handleQuestionResponse(currentQuestion)}>
								Responder
							</Button>
						}

					</>
				)
					:
					''
			}
		</div >
	)
}
export default TestPage;