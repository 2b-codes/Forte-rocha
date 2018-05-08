import React, { Component } from "react";
import PropTypes from"prop-types";


export default class TextArea extends Component {

	render() {	
	
		const { id, placeholder, onChange, value, className, rows } = this.props;
		return (
			 <div class="input-field col s12">
				<textarea
				id={id}
				placeholder={placeholder}
				onChange={onChange}
				className={"materialize-textarea"}
				value={ value }
				
				> 
				</textarea>
			</div>
		);
	
	}
	
}

TextArea.propTypes={
	id: PropTypes.string.isrequired,
	placeholder: PropTypes.string.isrequired,
	onChange: PropTypes.func.isrequired,
	value: PropTypes.string.isrequired,
	className: PropTypes.string,
	rows: PropTypes.string,
};