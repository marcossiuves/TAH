import axios from "axios";
import { API_HOST } from "./consts";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let token

export const redirectResult = (status) => {
	switch (status) {
		case 200:
			return toast.success('Atualizado com sucesso');
		case 400:
			return toast.error('Houve um erro, cheque as informacoes');
		case 404:
			return toast.error('Rota nao encontrada');
		default:
			return toast.error(`Servidor inoperante, tente novamente mais tarde.`);
	}
}

export const login = (data) => {
	axios.post(`${API_HOST}/login/`, { data })
		.then(response => loginProcess(response))
		.catch(err => redirectResult(err.status))
}

export const loginProcess = (data) => {
	localStorage.setItem('token', data)
	retrieveToken()
}

export const logoutProcess = () => {
	localStorage.removeItem('token')
}


export const retrieveToken = () => {
	token = localStorage.getItem('token')
}



// Questoes

export const fetchQuestion = (id) => {
	axios.get(`${API_HOST}/questoes/${id}`)
}

export const fetchAllQuestions = () => {
	axios.get(`${API_HOST}/questoes/`)
}

export const createQuestion = (data) => {
	axios.post(`${API_HOST}/questoes/cadastrar`, data)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const editQuestion = (questaoId, data) => {
	axios.post(`${API_HOST}/questoes/editar/${questaoId}`, data)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const deleteQuestion = (questaoId) => {
	axios.delete(`${API_HOST}/questoes/deletar/${questaoId}`)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}


// Exames - Provas

export const fetchExam = (id) => {
	axios.get(`${API_HOST}/prova/${id}`)
}

export const fetchAllExams = () => {
	axios.get(`${API_HOST}/prova/`)
}

export const createExam = (data) => {
	axios.post(`${API_HOST}/prova/cadastrar`, data)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const editExam = (examId, data) => {
	axios.post(`${API_HOST}/prova/editar/${examId}`, data)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const deleteExam = (examId) => {
	axios.delete(`${API_HOST}/provas/deletar/${examId}`)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}


// Usuarios

export const fetchUser = () => {
	axios.post(`${API_HOST}/usuarios/`)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const fetchAllUsers = () => {
	axios.post(`${API_HOST}/usuarios/`)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const createUser = (data) => {
	axios.post(`${API_HOST}/usuarios/cadastrar`, data)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const editUser = (userId, data) => {
	axios.post(`${API_HOST}/usuarios/editar/${userId}`, data)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const deleteUser = (userId) => {
	axios.post(`${API_HOST}/usuarios/deletar/${userId}`)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}


// Cursos

export const fetchCourse = () => {
	axios.post(`${API_HOST}/cursos/`)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const fetchAllCourses = () => {
	axios.post(`${API_HOST}/cursos/`)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const createCourse = (data) => {
	axios.post(`${API_HOST}/cursos/cadastrar`, data)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const editCourse = (courseId, data) => {
	axios.post(`${API_HOST}/cursos/editar/${courseId}`, data)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

export const deleteCourse = (courseId) => {
	axios.post(`${API_HOST}/cursos/deletar/${courseId}`)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}
