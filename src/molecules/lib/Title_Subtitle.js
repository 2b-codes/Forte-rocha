import React, { Component } from "react";
import {Title, SubTitle} from "../../atoms/lib/..";
import PropTypes from "prop-types";


export default class Title_Subtitle extends Component{

	render(){
		const{type, className, id}= this.props;
		return(
			<div>
				<Title type={"h1"}></Title>
				<SubTitle type={"h4"}></SubTitle>
			</div>

		);
		
	}
}

Title_Subtitle.propTypes={

	type: PropTypes.string,
	className: PropTypes.string.isRequired,
	id:PropTypes.string
};