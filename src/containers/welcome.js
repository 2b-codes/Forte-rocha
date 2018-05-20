import React from "react";

import InputMask from "react-input-mask";
import Carousel from "../molecules/lib/Carousel";

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

		return(			
			<section>
				<Carousel autoplay wrapAround items={[
					<img src="https://loremflickr.com/320/240/dog" width="500px" alt="lorem pixel" />,
					<img src="https://demo.presscustomizr.com/wp-content/uploads/2008/04/city-1200x500.jpg" width="500px" alt="lorem pixel" />,
					<img src="https://matthewjamestaylor.com/img/illustrations/large/how-to-convert-a-liquid-layout-to-fixed-width.jpg" width="500px" alt="lorem pixel" />,
					<img src="https://demo.presscustomizr.com/wp-content/uploads/2008/04/city-1200x500.jpg" width="500px" alt="lorem pixel" />,
					<img src="https://loremflickr.com/320/240" width="500px" alt="lorem pixel" />,
					<img src="https://loremflickr.com/320/240/dog" width="500px" alt="lorem pixel" />,
					<img src="https://demo.presscustomizr.com/wp-content/uploads/2008/04/city-1200x500.jpg" width="500px" alt="lorem pixel" />,
					<img src="https://loremflickr.com/320/240/paris" width="500px" alt="lorem pixel" />,
				]} />
			</section>
		);
	}
}



