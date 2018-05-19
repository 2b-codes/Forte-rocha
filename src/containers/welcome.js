import React from "react";

import InputMask from "react-input-mask";
import CompanyValues from "../molecules/lib/CompanyValues";

export default class Welcome extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			drop: { id: "mm", label: "em branco" }
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const {
			value,
			id
		} = e.target;
		const drop = {id, label: value };
		this.setState({drop});
	}

	render(){

		return(			
			<section>
				<CompanyValues
				 mission="A missão da minha empresa é um texto muito grande, mais grande do que eu posso escrever na minha vida toda, pq esse texto é grande mesmo em bixo" 
				 vision="Visão é algo maravilhoso, você pode ver coisas através dasua visão, e pode desenhar e criar arte, graças a sua visão, porque a sua visão é muito boa manolo loko da quebrada diva"
				 values="Meu valores são caros, pq eu sou muito caro, pq eu eu sou muito bom, tão bom que eu posso ser mais foda que qualquer pessoa do mundo, só pq eu sou foda e tenho muitos valores, mais do que vocẽ pode contar ou calcular, mlk DOIDDOOOOOOO"
				/>
			</section>
		);
	}
}



