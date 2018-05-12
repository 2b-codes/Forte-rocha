import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component{

	render(){

		const {
			children,
			onClick,
			id,
			className,
			type
		} = this.props;
		return (
			<button type={type} className="waves-effect waves-light btn" id={id} onClick={onClick} >{children}</button>
		);
		
	}	

}

Button.propTypes={
	// especifica qual o valor espera para tratativa
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	id: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
};