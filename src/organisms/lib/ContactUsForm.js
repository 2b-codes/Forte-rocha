import React from "react";

import InputText from "../../atoms/lib/InputText";
import InputMail from "../../atoms/lib/InputMail";
import InputNumber from "../../atoms/lib/InputNumber";
import TextArea from "../../atoms/lib/TextArea";

export default class ContactUsForm extends React.Component {
  
	render() {
		const {
			contact,
			phone,
			email,
			values = {},
			handleChange,
		} = this.props;
		return (
			<div className="contact-us -container">
				<h3 className="title">Contato</h3>
				<div className="others-contacts">
					<div className="contact-option">
						<span className="contact -title">Contato</span>
						<span className="contact -item -contact">{contact || "Contact Name"}</span>
					</div>
					<div className="contact-option">
						<span className="contact -title">Telefone</span>
						<span className="contact -item -phone">{phone || "+55 (11) 98765-4321"}</span>
					</div>
					<div className="contact-option">
						<span className="contact -title">E-mail</span>
						<span className="contact -item -email">{email || "email@myemail.com"}</span>
					</div>
				</div>
				<div className="contact-form-conteiner">
					<form className="contact-form">
						<InputText 
							id="contactUsName"
							className=""
							value={values.contactUsName}
							type="text"
							handleChange={handleChange}
							placeholder="Nome"
							icon="account_circle"
							/>
						<InputMail 
							type="email"
							id="contactUsEmail"
							className=""
							value={values.contactUsEmail}
							handleChange={handleChange}
							placeholder="E-mail"
							icon="email"
							/>
						<InputNumber 
							className=""
							id="contactUsPhone"
							handleChange={handleChange}
							value={values.contactUsPhone}
							type="tel"
							placeholder="Telefone"
							icon="phone"
							/>
						<TextArea 
							id="contactUsMsg"
							placeholder="Mensagem"
							handleChange={handleChange}
							value={values.contactUsMsg}
							className=""
							rows="5"
							/>
					</form>
				</div>
				<div>Agradecemos a sua procura!</div>
			</div>
		);
	}
}