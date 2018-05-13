import React from "react";
import {
	BackGround,
	Button,
	Icon,
	InputMail,
	InputNumber,
	InputText,
	Logo,
	Picture,
	SubTitle,
	TextArea,
	Dropdown,
	/* Title */
} from "../atoms";
import {
	searchBar,
	/* Title_Subtitle */
} from "../molecules";

import InputMask from "react-input-mask";

export default class Welcome extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			drop: { id: "mm", label: "em branco" }
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const {
			value,
			id
		} = e.target;
		const drop = {id, label: value };
		this.setState({drop});
	}

	render(){

		const array = [
			{
				id: "1",
				label: "1",
			},
			{
				id: "2",
				label: "2",
			},
			{
				id: "3",
				label: "3",
			},
			{
				id: "4",
				label: "4",
			},
			{
				id: "5",
				label: "5",
			},
		];

		return(			
			<section>
				<Dropdown options={array} handleChange={this.handleChange} id="drop" value={this.state.drop} />
				<InputMail placeholder={Math.random()*10} id={Math.random()} icon="phone"  />
				<InputNumber placeholder={Math.random()*10} id={Math.random()} icon="phone"  />
				<InputText  placeholder={Math.random()*10} id={Math.random()} icon="phone" />>
			</section>
		);
	}
}



