import React from "react";
import "./Styles/HeaderStyles.css"



const Header = () => {


	return (
		<div className="header">
			<a className="logo">TAH LOGO</a>
			<div className="header-right">
				<a>Home</a>
				<a>Perguntas</a>
				<a>Simulados</a>
				<a>Ajuda</a>
			</div>
		</div>
	)
}
export default Header;