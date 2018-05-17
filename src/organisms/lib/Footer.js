import React from "react";

import Picture from "../../atoms/lib/Picture";

export default class Footer extends React.Component {

	renderCompanyArea() {
		const {
			name,
			slogan,
		} = this.props;
		return (
			<div className="company-area">
				<Picture
					className="logo" 
					id="" 
					src="https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=" 
					width="139px" 
				/>
				<div className="company-description">
					<label className="company -name">{name || "Company Name"}</label>
					<label className="company -slogan">{slogan || "This is a great slogan man! Just Do It!"}</label>
				</div>
			</div>
		);
	}
	renderContactArea() {
		const {
			emails,
			phones
		} = this.props;
		return (
			<ul className="contact-area">
				<li className="title">Atendimento</li>
				{emails.map(email => <li className="email">{email}</li>)}
				{phones.map(phone => <li className="phone">{phone}</li>)}
			</ul>
		);
	}

	render () {
		const {
			name,
			slogan
		} = this.props;

		return (
			<section className="footer">
				<div className="first-line">
					{this.renderCompanyArea()}
					{this.renderContactArea()}
				</div>
				<div className="second-line">
					<span className="2b-codes">powered by 2bCodes();</span>
				</div>
			</section>
		);
	}
}
