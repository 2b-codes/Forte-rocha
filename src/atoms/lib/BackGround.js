import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BackGround extends Component{


	render(){

		const{src,id,className}=this.props;
		return(
			<div>
			<img src={src}
				id={id}
				className={`back ${className}`}
			/>
			</div>
		);
	}
}

BackGround.PropTypes={

	src: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,

};