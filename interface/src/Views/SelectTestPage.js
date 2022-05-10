import React from "react";
import ProvaCard from "../Components/ProvaCard";
import './Styles/SelectTestPageStyles.css'


const SelectTestPage = () => {

	return (
		<div className="main">
			<div className="turmas">
				<div className="grid-container">
					<ProvaCard concluded={false} grade={null} id={1} theme={'Ciência da computação'} title={'Banco de dados'} />
					<ProvaCard concluded={true} grade={39} id={2} theme={'Ciência da computação'} title={'AOC'} />
					<ProvaCard concluded={true} grade={1} id={2} theme={'Ciência da computação'} title={'AEDIII'} />
					<ProvaCard concluded={true} grade={35} id={2} theme={'Engenharia Civil'} title={'Estudo de Solos'} />
					<ProvaCard concluded={true} grade={26} id={2} theme={'Arquitetura'} title={'Luminotécnica'} />
				</div>
			</div>
		</div >
	)
}
export default SelectTestPage;
