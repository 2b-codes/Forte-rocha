import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Picture extends Component {

	render(){

		const{className,id,src}=this.props;

		return(
			
			    <img className="materialboxed" width="650" src={src} id={id}/>

		);
	}
}

Picture.propTypes={
	className: PropTypes.string,
	id: PropTypes.string,
	src: PropTypes.string


};