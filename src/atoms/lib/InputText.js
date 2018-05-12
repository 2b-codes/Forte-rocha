import React from "react";
import PropTypes from "prop-types";

export default class InputText extends React.Component{

	render(){
		const {
			id,
			className,
			value,
			type,
			handleChange,
			placeholder,
			icon
		} = this.props;
		return(
			<div className={`input-field ${className}`}> 
				{icon && <i className={`material-icons ${icon}`}>{icon}</i>}
				<input
					type="text"
					id={id}
					className="validate"
					value={value}
					onChange={handleChange}
				/>
				<label className={`${icon && " label-input"}`} htmlFor={id}>{placeholder}</label>
			</div>
		);
	}

}

InputText.propTypes = {
	handleChange: PropTypes.string.isRequired,
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};