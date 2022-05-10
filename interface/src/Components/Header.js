import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { logoutProcess } from "../services/Services";
import "./Styles/HeaderStyles.css";
// @ts-ignore
import logo from '../Components/tae_logo.jpg';



const Header = () => {
	const [isLoged, setIsLoged] = useState(false)

	let navigate = useNavigate();

	const logout = () => {
		logoutProcess();
		setIsLoged(false)
		navigate("/")
	}

	const fetchLoggedStatus = () => {
		if (localStorage.getItem('token')) {
			setIsLoged(true)
		}
		else {
			setIsLoged(false)
		}

	}

	useEffect(() => {
		fetchLoggedStatus()
	}, [])


	return (
		<div className="header">
			<img src={logo} alt="Logo" className="logo" />
			<div className="header-right">
				<b onClick={() => navigate("/")}>Home</b>
				<b onClick={() => navigate("/create-test")}>Cadastrar Prova</b>
				<b onClick={() => navigate("/select-test")}>Simulados</b>
				<b onClick={() => navigate("/faq")}>Ajuda</b>
				{isLoged ?
					<b onClick={() => logout()}>Logout</b>
					:
					<b onClick={() => navigate("/login")}>Login</b>
				}
			</div>
		</div>
	)
}
export default Header;