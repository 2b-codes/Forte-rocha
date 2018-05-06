import React, { Component } from "react";
import PropTypes from "prop-types";


export  class SubTitle extends Component{

	renderSubTitle(){

		
		const {type,className,id}=this.props;
		switch (type){

			case "h5":
				return	<h5>....h5 ...</h5>;
			case "h4":
				return  <h4> ... h4....</h4>;

			default:
				return <h3>.... h3.....</h3>;

		}
	}

	render(){

		return(this	.renderSubTitle());		
	}
}


SubTitle.propTypes={
	className: PropTypes.string,
	id: PropTypes.string,
	type:PropTypes.string,
};