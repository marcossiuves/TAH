import React, { useEffect, useState } from "react";
import StandardInput from "../Components/StandardInput";
import StandardSelectBox from "../Components/StandardSelectBox";
import Button from "../Components/Button";
import "./Styles/CreateProvaPageStyle.css";
import { createExam } from "../services/Services";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import IdStandardSelectBox from "../Components/IdStandardSelectBox";
import IdStandardInput from "../Components/IsStandardInput";


const CreateProvaPage = () => {
	const [provaValues, setprovaValues] = useState({});
	// @ts-ignore
	const [cursos, setCursos] = useState([]);
	const [disciplinas, setDisciplinas] = useState([]);
	const [conteudo, setConteudo] = useState([]);

	let navigate = useNavigate();


	const handleChange = (field, value) => {
		setprovaValues({ ...provaValues, [field]: value })
	}

	const fetchCursos = () => {
		setCursos([
			// @ts-ignore
			{ id: 1, name: "Arquitetura" },
			// @ts-ignore
			{ id: 2, name: "Ciencia da Computação" },
			// @ts-ignore
			{ id: 3, name: "Engenharia" },
		])
	}

	const fetchDisciplinas = () => {
		setDisciplinas([
			// @ts-ignore
			{ id: 1, name: "Banco de dados" },
			// @ts-ignore
			{ id: 2, name: "AOC" },
			// @ts-ignore
			{ id: 3, name: "AEDIII" },
		])
	}

	const fetchConteudos = () => {
		setConteudo([
			// @ts-ignore
			{ id: 1, name: "Arquitetura" },
			// @ts-ignore
			{ id: 2, name: "Ciência da Computação" },
			// @ts-ignore
			{ id: 3, name: "Engenharia Civil" },
			// @ts-ignore
			{ id: 4, name: "Direito" },
		])
	}

	const handleTestCreation = async () => {
		if (provaValues["numQuestoes"] > 40) {
			toast.error("Numero de questões não pode ser maior que 40!")
		}
		else {
			const res = await createExam(provaValues);
			navigate(`/prova/${res.content.id_exam}/criar-questao`)
		}
	}

	const getTeacherId = () => {
		//COLOCAR O ASYNC STORAGE
		setprovaValues({ id_user: 1 })
	}


	useEffect(() => {
		fetchCursos();
		fetchDisciplinas();
		fetchConteudos();
		getTeacherId()
	}, [])


	return (
		<div className="main-question">
			<ToastContainer />
			<h2> Criação da Prova </h2>
			<div className="body-question-alternatives">
				<h3> Titulo: </h3>
				<StandardInput
					styles="question-input"
					name="title"
					type="text"
					placeHolder="Titulo da Prova"
					onChange={handleChange}
					values={null}
				/>
			</div>
			<div className="body-question-alternatives">
				<h3> Disciplina: </h3>
				<StandardSelectBox
					field={"subject"}
					options={disciplinas}
					onChange={handleChange}
				/>
			</div>
			<div className="body-question-alternatives">
				<h3> Conteudo: </h3>
				<IdStandardSelectBox
					field={"id_major_field"}
					options={conteudo}
					onChange={handleChange}
				/>
			</div>
			<div className="body-question-alternatives">
				<h3> Quantidade de Perguntas: </h3>
				<IdStandardInput
					styles="question-input"
					name="question_amount"
					type="text"
					placeHolder="Digite um numero de 1 a 40"
					onChange={handleChange}
					values={null}
				/>
			</div>
			<div className="send-button">
				<Button
					styleType={"custom-confirm-button"}
					onClick={() => handleTestCreation()}
				>
					Cadastrar Prova
				</Button>
			</div>
		</div>
	)
}
export default CreateProvaPage;