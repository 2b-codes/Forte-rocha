import React from "react";


export default class InformationExpandable extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}
  
	render() {
		const genericAction = () => this.setState({show: !this.state.show});
		const genericText = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.";

		const {
			title,
			readMoreAction = genericAction,
			text = genericText,
		} = this.props;

		return (
			<div className="information-expandable">
				<h4>{title || "Informações"}</h4>
				<p className={`description ${this.state.show ? "" : "-min-height"}`}>{text}</p>
				<p className="read-more" onClick={readMoreAction}>
					{this.state.show ? "- ler menos ..." : "+ ler mais ..."}
				</p>
			</div>
		);
	}
}