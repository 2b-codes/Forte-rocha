import React, { Component } from "react";
import PropTypes from "prop-types";


export default class InputMail extends Component {

	render(){

		const {type,id,className,value, onchange, placeholder}= this.props;
		return(
			<input
			id={id}
			className={`inputMail ${className}`}
			onchange={onchange}
			placeholder={"xxxxx@xxx.com.br"}
			value={value}
			type={type}
			/>
		);
	}	

}

InputMail.PropTypes={

	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	onchenge: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	type:PropTypes.string.isRequired
};
