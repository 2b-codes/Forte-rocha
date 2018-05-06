import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Logo extends Component {

	render(){

		const{className,id,src}=this.props;

		return(
			<img src= {src} 
			className={`logo ${className}`}
			id={id}
			/>
		);
	}
}

Logo.propTypes={
	className: PropTypes.string,
	id: PropTypes.string,
	src: PropTypes.string


};