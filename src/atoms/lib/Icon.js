import React, { Component }from "react";
import PropTypes from "prop-types";


export default class Icon extends Component{

	render (){

		const{className, children,id}=this.props;
		return(
			// <div className="input-field col s6"> 
				<i className={"material-icons"}>{children}</i>
		//  </div>
		);
	}
}

Icon.PropTypes={
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	id:PropTypes.string
};