import React, { Component } from "react";
import PropTypes from "prop-types";


export default class InputMail extends Component {

	componentDidMount(){
   		$(document).ready(function() {
    		M.updateTextFields();
  		});
	}
	render(){
		const {
			type,
			id,
			className,
			value,
			handleChange,
			placeholder,
			icon
		}= this.props;

		return(
			<div className={`input-field ${className}`} >
				{!icon || <i className={`material-icons ${icon}`}>{icon}</i>}
				<input 
					id={id}
					onChange={handleChange}
					value={value}
					type="email"
					className="validate"
				/>
				<label className={`${icon && " label-input"}`} htmlFor={id}>{placeholder || "E-mail"}</label>
			</div>
		);
	}	
}

InputMail.PropTypes={

	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	handleChange: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	type:PropTypes.string.isRequired
};
