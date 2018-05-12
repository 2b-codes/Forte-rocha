import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Picture extends Component {

	render(){
		const {
			className,
			id,
			src,
			width,
			height
		} = this.props;
		return(
			<img className="materialboxed" width={width} height={height} src={src} id={id}/>
		);
	}
}

Picture.propTypes={
	className: PropTypes.string,
	id: PropTypes.string,
	src: PropTypes.string


};