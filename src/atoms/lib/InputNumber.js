import React, { Component} from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";

export default class InputNumber extends Component{



	render(){
		const {
			id,
			className,
			handleChange,
			value,
			type,
			placeholder,
			icon
		} = this.props;

		return(
			<div className={`input-field ${className}`}>
				{!icon || <i className={`material-icons ${icon}`}>{icon}</i>}
				<InputMask
					type="tel" 
					id={id}
					value={value} 
					className="validate"
					mask={"+55 (99) 9 9999-9999"}
					onChange={handleChange}
				/> 
				<label className={`${icon && " label-input"}`} htmlFor={id}>{placeholder || "Telefone"}</label>
			</div>
		);
	}
}

InputNumber.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	row:PropTypes.string.isRequired,
	cols:PropTypes.string.isRequired
};