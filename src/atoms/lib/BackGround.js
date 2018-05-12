import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BackGround extends Component{


	render(){

		const {
			bgImage,
			id,
			className,
			bgColor,
			bgRepeat,
			bgAttachment,
			bgPosition,
			bgblendMode,
			height,
			width,
			bgSize
		} = this.props;
		return(
			<div
				style={{
					backgroundImage: `url(${bgImage})`,
					backgroundColor: bgColor,
					backgroundRepeat: bgRepeat,
					backgroundAttachment: bgAttachment,
					backgroundPosition: bgPosition,
					backgroundBlendMode: bgblendMode,
					backgroundSize: bgSize,
					height: height,
					width: width
				}}
			>
			</div>
		);
	}
}

BackGround.PropTypes={

	src: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,

};