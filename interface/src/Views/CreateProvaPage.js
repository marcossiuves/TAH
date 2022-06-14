import React, { useEffect, useState } from "react";
import StandardInput from "../Components/StandardInput";
import StandardSelectBox from "../Components/StandardSelectBox";
import Button from "../Components/Button";
import "./Styles/CreateProvaPageStyle.css";
import { createExam, fetchAllCourses } from "../services/Services";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";


const CreateProvaPage = () => {
	const [provaValues, setprovaValues] = useState({});
	const [cursos, setCursos] = useState([]);
	const [disciplinas, setDisciplinas] = useState([]);
	const [conteudo, setConteudo] = useState([]);

	let navigate = useNavigate();


	const handleChange = (field, value) => {
		setprovaValues({ ...provaValues, [field]: value })
	}

	const fetchCursos = () => {
		fetchAllCourses().then(res => setCursos(res))
	}

	const fetchDisciplinas = () => {
		setDisciplinas([
			{ id: 1, name: "Banco de dados" },
			{ id: 2, name: "AOC" },
			{ id: 3, name: "AEDIII" },
		])
	}

	const fetchConteudos = () => {
		setConteudo([
			{ id: 1, name: "conteudo 1" },
			{ id: 2, name: "conteudo 2" },
			{ id: 3, name: "conteudo 3" },
		])
	}

	const handleTestCreation = () => {
		if (provaValues["numQuestoes"] > 40) {
			toast.error("Numero de questões não pode ser maior que 40!")
		}
		else {
			createExam(provaValues);
			navigate(`/prova/${1}/create-question/${1}`)
		}
	}

	useEffect(() => {
		fetchCursos();
		fetchDisciplinas();
		fetchConteudos();
	}, [])


	return (
		<div className="main-question">
			<ToastContainer />
			<h2> Criação da Prova </h2>
			<div className="body-question-alternatives">
				<h3> Curso: </h3>
				<StandardSelectBox
					field={"curso"}
					options={cursos}
					onChange={handleChange}
				/>
			</div>
			<div className="body-question-alternatives">
				<h3> Disciplina: </h3>
				<StandardSelectBox
					field={"disciplinas"}
					options={disciplinas}
					onChange={handleChange}
				/>
			</div>
			<div className="body-question-alternatives">
				<h3> Conteudo: </h3>
				<StandardSelectBox
					field={"conteudo"}
					options={conteudo}
					onChange={handleChange}
				/>
			</div>
			<div className="body-question-alternatives">
				<h3> Quantidade de Perguntas: </h3>
				<StandardInput
					styles="question-input"
					name="numQuestoes"
					type="text"
					placeHolder="Digite um numero de 1 a 40"
					onChange={handleChange}
					values={null}
				/>
			</div>
			<div className="send-button">
				<Button
					onClick={() => handleTestCreation()}
				>
					Cadastrar Questao
				</Button>
			</div>
		</div>
	)
}
export default CreateProvaPage;