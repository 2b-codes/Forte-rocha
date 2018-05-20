import React from "react";
import PropTypes from "prop-types";
import CarouselNuka from "nuka-carousel";

export default class Carousel extends React.Component {

	renderItems() {
		return this.props.items.map(item => item);
	}

	render() {
		return (
			<div className="carousel-module">
				<CarouselNuka
					afterSlide={this.props.afterSlide}
					autoplay={this.props.autoplay}
					autoplayInterval={this.props.autoplayInterval}
					beforeSlide={this.props.beforeSlide}
					cellAlign={this.props.cellAlign}
					cellSpacing={this.props.cellSpacing}
					data={this.props.data}
					dragging={this.props.dragging}
					easing={this.props.easing}
					framePadding={this.props.framePadding}
					frameOverflow={this.props.frameOverflow}
					edgeEasing={this.props.edgeEasing}
					initialSlideHeight={this.props.initialSlideHeight}
					initialSlideWidth={this.props.initialSlideWidth}
					slideIndex={this.props.slideIndex}
					slidesToShow={this.props.slidesToShow}
					slidesToScroll={this.props.slidesToScroll}
					slideWidth={this.props.slideWidth}
					speed={this.props.speed}
					swiping={this.props.swiping}
					vertical={this.props.vertical}
					width={this.props.width}
					wrapAround={this.props.wrapAround}
					renderCenterLeftControls={({ previousSlide }) => (
						<i onClick={previousSlide} className="material-icons carousel-controller">keyboard_arrow_left</i>
					)}
					renderCenterRightControls={({ nextSlide }) => (
						<i onClick={nextSlide} className="material-icons carousel-controller">keyboard_arrow_right</i>
					)}
				>
					{this.renderItems()}
				</CarouselNuka>
			</div>
		);
	}
}

Carousel.propTypes = {
	items: PropTypes.array.isRequired,
	afterSlide: PropTypes.func,
	autoplay: PropTypes.bool,
	autoplayInterval: PropTypes.number,
	beforeSlide: PropTypes.func,
	cellAlign: PropTypes.string,
	cellSpacing: PropTypes.number,
	data: PropTypes.func,
	dragging: PropTypes.bool,
	easing: PropTypes.string,
	framePadding: PropTypes.string,
	frameOverflow: PropTypes.string,
	edgeEasing: PropTypes.string,
	initialSlideHeight: PropTypes.number,
	initialSlideWidth: PropTypes.number,
	slideIndex: PropTypes.number,
	slidesToShow: PropTypes.number,
	slidesToScroll: PropTypes.number,
	slideWidth: PropTypes.number,
	speed: PropTypes.number,
	swiping: PropTypes.bool,
	vertical: PropTypes.bool,
	width: PropTypes.string,
	wrapAround: PropTypes.bool,

};