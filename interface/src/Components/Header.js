import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { logoutProcess } from "../services/Services";
import "./Styles/HeaderStyles.css";
// @ts-ignore
import logo from '../Components/tae_logo.jpg';


const Header = () => {
	const [isLoged, setIsLoged] = useState(false)
	const [isTeacher, setIsTeacher] = useState(false)

	let navigate = useNavigate();

	const logout = () => {
		logoutProcess();
		setIsLoged(false)
		navigate("/")
	}

	const fetchLoggedStatus = () => {
		if (localStorage.getItem('username')) {
			setIsLoged(true)
		}
		else {
			setIsLoged(false)
		}
		if (localStorage.getItem('type') == "Professor") {
			setIsTeacher(true)
		}
		else {
			setIsTeacher(false)
		}
	}

	const MINUTE_MS = 5000;

	useEffect(() => {
		const interval = setInterval(() => {
			fetchLoggedStatus();
		}, MINUTE_MS);

		return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
	}, [])

	useEffect(() => {
		fetchLoggedStatus()
	}, [])

	return (
		<div className="header">
			<img src={logo} alt="Logo" className="logo" onClick={() => navigate("/")} />
			<div className="header-right">
				{isLoged ?
					<>
						{isTeacher &&
							<b onClick={() => navigate("/criar-prova")}>Cadastrar Prova</b>
						}
						<b onClick={() => navigate("/selecionar-prova")}>Simulados</b>
						<b onClick={() => navigate("/selecionar-feedback")}>Pontuação</b>
						<b onClick={() => navigate("/faq")}>Ajuda</b>
						<b onClick={() => logout()}>Logout</b>
					</>
					:
					<>
						<b onClick={() => navigate("/login")}>Login</b>
					</>
				}
			</div>
		</div>
	)
}
export default Header;