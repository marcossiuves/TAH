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


export const cadastroQuestoes = (data) => {
	axios.post(`${API_HOST}/provas`, {
		header: `Authorization: JWT ${token}`
	}, { data })
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}


export const deleteQuestoes = (questaoId, provaId) => {
	axios.delete(`${API_HOST}/provas/${provaId}/${questaoId}`)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}


export const criarProva = (data) => {
	axios.post(`${API_HOST}/provas`, {
		header: `Authorization: JWT ${token}`
	}, { data })
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}


export const deletarProva = (provaId) => {
	axios.delete(`${API_HOST}/provas/${provaId}`)
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}


export const criarUsuario = (data) => {
	axios.post(`${API_HOST}/login`, { data })
		.then(response => redirectResult(response.status))
		.catch(err => redirectResult(err.status))
}

