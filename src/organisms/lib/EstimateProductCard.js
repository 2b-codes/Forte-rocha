import React from "react";

import Button from "../../atoms/lib/Button";

const genericText = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker";

export default class EstimateProductCard extends React.Component {

	render() {
		const {
			product = { image: "https://loremflickr.com/320/240/brazil", getInformations: () => genericText},
			clickAction = () => console.log("NOT IMPLEMENTED"),
			viewProductAction = () => console.log("NOT IMPLEMENTED"),
      className,
      addAction,
      deleteAction,
		} = this.props;

		return(
			<div className={`card estimate-product-card ${className}`}>
				<div className="card-image waves-effect waves-block waves-light" id={product.product_id}  onClick={viewProductAction}>
					<img src={product.image} />
				</div>
				<div className="card-content">
					<span id={product.product_id} onClick={viewProductAction} className="card-title grey-text text-darken-4">{product.name || "Product Title"}</span>
					<p className="description activator">{product.getInformations() || genericText}</p>
          <div className="action-group">
            <div className="add-container">
              <div className="dinamic">
                <label>Quantidade</label>
                <i className="material-icons remove" id={product.product_id} onClick={e => addAction(e, -1)}>remove_circle_outline</i>
                <span>{product.quantity || 0 }</span>
                <i className="material-icons add" id={product.product_id} onClick={e => addAction(e, 1)}>add_circle_outline</i>
              </div>
              <i className="material-icons delete-button" id={product.product_id} onClick={deleteAction}>delete</i>
            </div>
          </div>
				</div>
			</div>
		);
	}
}