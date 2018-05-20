import React from "react";
import PropTypes from "prop-types";


import Product from "../../models/ProductEntity";

export default class DescriptionProduct extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			images: [],
			selected: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount() {
		const imagesArray = [];
		const product = this.props.product;

		imagesArray.push(product.image);
		product.images.map(image => imagesArray.push(image));

		this.setState({images: imagesArray});

	}

	renderImages() {
		const { images, selected } = this.state;
		return images.map((img, i) => 
			<img
				src={img.src}
				alt={img.alt}
				width="100px"
				className={`image ${selected == i ? "active" : ""}`}
				onClick={this.handleClick}
				id={i}
			/>
		);
	}

	handleClick(e) {
		const id = e.target.id;
		this.setState({selected: id});

	}
  
	render() {
		const {
			images,
			selected
		} = this.state;
		console.log(this.state);
		return (
			<div className="product-description-page">
				<div className="image-container">
					<img 
						className="main-image"
						src={images[selected].src} 
						alt={images[selected].alt} 
					/>
				</div>
				<div className="images">
					{this.renderImages()}
				</div>
			</div>
		);
	}
}

DescriptionProduct.defaultProps = {
	product: new Product()
};
