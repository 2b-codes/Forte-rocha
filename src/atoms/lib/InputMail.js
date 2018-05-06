import React, { Component } from "react";
import PropTypes from "prop-types";


export default class InputMail extends Component {

	componentDidMount(){
   		$(document).ready(function() {
    		M.updateTextFields();
  		});
	}
	render(){
		const {type,id,className,value, onchange, placeholder}= this.props;
		return(
	
			<div className="input-field" >
      			<input id="id"
				onChange={onchange}
				value={value}
				type={type || "text"}
				className="validate"/>
	          <label htmlFor="id">Email</label>
	        </div>
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
