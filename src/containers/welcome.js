import React from "react";
import Footer from "../organisms/lib/Footer";
import InputMask from "react-input-mask";

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
				<Footer 
					bgImage="https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg" 
					phones={[
						"+55 (11) 98765-4321", 
						"+55 (11) 98765-4321"
					]}	
					emails={[
						"email@meuemail.com",
						"email@meuemail.com",
						"email@meuemail.com",
					]}
				/>
			</section>
		);
	}
}



