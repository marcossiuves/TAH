import axios from 'axios';
import { API_HOST } from './consts';

export const postNewQuestion = (values) =>
	axios.post(`${API_HOST}`, { values })
		.then(response => response.data)
		.catch(err => err.status)