import React from "react";

import InputText from "../../atoms/lib/InputText";
import InputMail from "../../atoms/lib/InputMail";
import InputNumber from "../../atoms/lib/InputNumber";
import TextArea from "../../atoms/lib/TextArea";
import Button from "../../atoms/lib/Button";

export default class EstimateForm extends React.Component {
  
	render() {
		const {
			values = {},
			handleChange,
			submitAction,
			products = [
				{name: "item", quant: 0},
			],
		} = this.props;

		return(
			<div className="estimate-form -container">
				<h3 className="title">Orçamento</h3>
				<form className="estimate-form-container">
					<fieldset>
						<InputText 
							id="estimateFormName"
							className=""
							value={values.estimateFormName}
							type="text"
							handleChange={handleChange}
							placeholder="Nome"
							icon="account_circle"
						/>
						<InputMail 
							type="email"
							id="estimateFormEmail"
							className=""
							value={values.estimateFormEmail}
							handleChange={handleChange}
							placeholder="E-mail"
							icon="email"
						/>
					</fieldset>
					<fieldset>
						<InputNumber 
							className=""
							id="estimateFormPhone"
							handleChange={handleChange}
							value={values.estimateFormPhone}
							type="tel"
							placeholder="Telefone"
							icon="phone"
						/>
						<InputNumber 
							className=""
							id="estimateFormCelphone"
							handleChange={handleChange}
							value={values.estimateFormCelphone}
							type="tel"
							placeholder="Celular"
							icon="phone"
						/>
					</fieldset>
					<h3 className="title">E-mail: </h3>
					<div className="information-box">
						<p>Olá, gostaria de solicitar o orçamento dos seguintes produtos:</p>
						<table className="estimate-table">

							<tr className="products-list">
								<td className="name -title">nome</td>
								<td className="quant -title">quantidade</td>
							</tr>
							{
								products.map(product => 
									<tr className="products-list">
										<td className="name">{product.name}</td>
										<td className="quant">{product.quant}</td>
									</tr>
								)
							}
						</table>
						<TextArea 
							id="estimateFormMsg"
							placeholder="Digite sua mensagem e negocie aqui."
							handleChange={handleChange}
							value={values.estimateFormMsg}
							className=""
							rows="5"
						/>
					</div>
					<div className="actions">
						<Button 
							children="Enviar Solicitação de orçamento"
							onClick={submitAction}
							id="sendestimateForm"
							className
							type="submit"
						/>
					</div>
				</form>
			</div>
		);
	}
}