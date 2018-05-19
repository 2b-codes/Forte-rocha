import React from "react";

import Button from "../../atoms/lib/Button";

const genericText = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker";

export default class ProductCard extends React.Component {

	render() {
		const {
			product = {},
			clickAction = () => console.log("NOT IMPLEMENTED"),
			viewProductAction = () => console.log("NOT IMPLEMENTED"),
			className
		} = this.props;

		return(
			<div className={`card product-card ${className}`}>
				<div className="card-image waves-effect waves-block waves-light" id={product.product_id}  onClick={viewProductAction}>
					<img className="" src="https://loremflickr.com/320/240/brazil" />
				</div>
				<div className="card-content">
					<span id={product.product_id} onClick={viewProductAction} className="card-title grey-text text-darken-4">{product.name || "Title of the product"}<i className="material-icons right">more_vert</i></span>
					<p className="description activator">{product.description || genericText}</p>
					<p className="read-more activator">+ ler mais ...</p>
				</div>
				<div className="card-reveal">
					<span className="card-title grey-text text-darken-4">{product.name || "Title of the product"}<i className="material-icons right">close</i></span>
					<p className="description -no-hidden">{product.description || genericText}</p>
					<Button 
						id={product.product_id} 
						clickAction={clickAction}
						children="Adicionar ao orçamento"
						/>
				</div>
			</div>
		);
	}
}