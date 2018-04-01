import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputText extends Component{

	render(){
		const{ id, className, value, placeholder, type, onchange }= this.props;
		return(
			<input

				type={type || "text"} 
				id={ id }
				className={`input-text ${className}`} 
				value={ value }
				placeholder= { placeholder }
				onchange= {onchange}

			/>

		);
	}

}

InputText.propTypes = {
	onchange: PropTypes.string.isRequired,
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};