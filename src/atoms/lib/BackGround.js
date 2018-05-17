import React from "react";
import PropTypes from "prop-types";

export default class BackGround extends React.Component {

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
			bgSize,
			alt,
			clickAction,
		} = this.props;
		const notImplemented = () => console.log("NOT IMPLEMENTED");

		return(
			<div
				style={{
					backgroundImage: `url(${bgImage})`,
					backgroundColor: bgColor || "#CCC",
					backgroundRepeat: bgRepeat || "no-repeat",
					backgroundAttachment: bgAttachment || "scroll",
					backgroundPosition: bgPosition || "0% 0%",
					backgroundBlendMode: bgblendMode || "normal", 
					backgroundSize: bgSize || "auto",
					height: height,
					width: width
				}}
				className="background-image"
				onClick={clickAction || notImplemented}
			>
				<img 
					className="-hidden"
					src={bgImage} 
					alt={alt}
					height={height}
					width={width}
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