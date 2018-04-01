import React, { Component } from "react";
import PropTypes from "prop-types";

export default class button extends Component{

	render(){

		const {children, onClick, id, className ,type} =this.props;
		return (
			<button id={id} className={`button ${className}`} onClick={onClick} type={type}>name</button>
		);
		
	}	

}

button.propTypes={
	// especifica qual o valor espera para tratativa
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	id: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
};