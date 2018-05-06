import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Title extends Component{

	renderTitle(){

		
		const {type,className,id}=this.props;		
		switch(type){
			case "h2":
				return <h2> teste</h2>;
			default:
				return <h1> .....</h1>;
		}
	}

	render(){

		return(this.renderTitle());
	}		
		
}	

Title.propTypes={
	className: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type:PropTypes.string
};