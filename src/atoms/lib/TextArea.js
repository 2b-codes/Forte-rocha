import React, { Component } from "react";
import PropTypes from"prop-types";


export default class TextArea extends Component {

	render() {	
		const {
			id,
			placeholder,
			handleChange,
			value,
			className,
			rows
		} = this.props;

		return (
			<div className={`input-field ${className}`}>
				<textarea
					id={id}
					onChange={handleChange}
					className="materialize-textarea"
					value={value}
					rows={rows}
				/> 
				<label htmlFor={id}>{placeholder}</label>
			</div>
		);
	}
}

TextArea.propTypes={
	id: PropTypes.string.isrequired,
	placeholder: PropTypes.string.isrequired,
	handleChange: PropTypes.func.isrequired,
	value: PropTypes.string.isrequired,
	className: PropTypes.string,
	rows: PropTypes.string,
};