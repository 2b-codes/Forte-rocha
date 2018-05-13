import React from "react";
import $ from "jquery";

export default class Dropdown extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e, id) {
		const value = e.target.id;
		this.props.handleChange({target: { id, value }});
	}

	renderOptions() {
		return this.props.options.map(item => <li><a id={item.id} href="#!" onClick={e => this.handleChange(e, this.props.id)}>{item.label}</a></li>); 
	}

	render() {
		return (
			<div className={this.props.className}>
				<a className='dropdown-trigger btn' href='#' data-target={this.props.id}>{this.props.value.label}</a>
				<ul id={this.props.id} className='dropdown-content'>
					{this.renderOptions()}
				</ul>
			</div>
		);
	}
}