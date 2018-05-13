import React, { Component } from "react";
import PropTypes from "prop-types";

export default class searchBar extends Component{

	render(){

		const {children, onClick, id, className ,type}=this.props;
		return (
			
			<nav>
				<div class="nav-wrapper">
					<form>
						<div class="input-field">
							<input id="search" type="search" required/>
							<label class="label-icon" for="search"><i class="material-icons">search</i></label>
							<i class="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>
		);
		
	}	

}

searchBar.propTypes={
	// especifica qual o valor espera para tratativa
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	id: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
};