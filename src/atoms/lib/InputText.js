import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputText extends Component{

	render(){
		const{ id, className, value, placeholder, type, onchange }= this.props;
		return(

			<div className="input-field col s6"> 
				<input

				type={"text"} 
				id={ id }
				className={`validate${className}`} 
				value={ value }
				onchange= {onchange}


				/>
				<label for="first_name">First Name</label>

		</div>
		);
	}

}

InputText.propTypes = {
	onchange: PropTypes.string.isRequired,
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};