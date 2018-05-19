import React from "react";

import Button from "../../atoms/lib/Button";

const genericText = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.";

export default class CompanyValues extends React.Component {
  
	constructor(props) {
		super(props);
		this.state= {
			show: "mission"
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const id = e.target.id;
		this.setState({show: id});
	}

	renderLargeScreen() {
		return(
			<div className="company-values-large">
				<div className="actions-buttons">
					<Button id="mission" clickAction={this.handleChange} >Missão</Button>
					<Button id="vision"  clickAction={this.handleChange}>Visão</Button>
					<Button id="values"  clickAction={this.handleChange}>Valores</Button>
				</div>
				<div className="content-container">
					<p className="content">{this.props[this.state.show] || genericText}</p>
				</div>
			</div>
		);
	}

	renderSmallScreen() {
		return(
			<div className="company-values-small">
				<h5>Missão</h5>
				<p className="content">{this.props.mission || genericText}</p>
				<h5>Visão</h5>
				<p className="content">{this.props.vision || genericText}</p>
				<h5>Valores</h5>
				<p className="content">{this.props.values || genericText}</p>
			</div>
		);
	}
	
	render() {
		return (
			<div className="company-values">
				{this.renderLargeScreen()}
				{this.renderSmallScreen()}
			</div>
		);
	}

}