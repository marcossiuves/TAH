import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import Button from "../Components/Button";
import StandardSelectBox from "../Components/StandardSelectBox";
import { API_HOST } from "../services/consts";
import './Styles/CreateQuestionPageStyle.css'

const FeedBackEvaluationPage = () => {
	const [testSpecs, setTestSpecs] = useState({})
	const [testQuestions, setTestQuestions] = useState([])
	const [questionData, setQuestionData] = useState({})
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [started, setStarted] = useState(false)
	const [currentAnswer, setCurrentAnswer] = useState()
	const [userId, setUserId] = useState(localStorage.getItem('userid'))

	let navigate = useNavigate();
	const params = useParams();
	// const userId = 0;

	const fetchExamAndQuestions = async () => {
		// const userId = localStorage.getItem('userid')
		const examResponse = await axios.get(`${API_HOST}/prova/${params.id}`)
			.then(response => setTestSpecs(response.data))
		// @ts-ignore
		const response = await axios.get(`${API_HOST}/prova/questoes/${params.id}`)
			.then(response => (
				setTestQuestions(response.data.relatedQuestions),
				fetchQuestionData((response.data.relatedQuestions)[0].id_question_exam)
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
			// @ts-ignore
			id_question: testQuestions[questionId].id_question,
			option: currentAnswer,
			id_user: userId,
		}
		axios.get(`${API_HOST}/respostaDaQuestao/conferirResposta/${questionId}`, { questionResponseData })
			// @ts-ignore
			.then(res => setCurrentQuestion(currentQuestion + 1))
			.catch(err => err.status)
		// , fetchQuestionData(testQuestions[currentQuestion].id_question_exam)
	}

	useEffect(() => {
		fetchExamAndQuestions();
	}, [])

	useEffect(() => {
		fetchQuestionData(currentQuestion + 1);
	}, [currentQuestion])


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
						<h3 style={{ color: "#000" }}> Voce fez {testQuestions.length} questões.</h3>
						<Button
							styleType={"custom-button"}
							onClick={() => setStarted(!started)}>
							Ver respostas
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
						</div>
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
								Proxima
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
export default FeedBackEvaluationPage;