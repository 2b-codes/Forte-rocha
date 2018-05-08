import React, { Component} from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";

export default class InputNumber extends Component{



	render(){
		const{id,className,onchange,value,type, placeholder}= this.props;
		return(
				<div className="input-field col s6">
				 <i className="material-icons prefix">phone</i>
				  
					<InputMask
					type="tel" 
					id="icon_telephone"
					value={value} 
					className="validate"
					
					placeholder={placeholder}
					
					 {...this.props} mask={"+55 (99) 9 9999-9999"}maskChar="" 

				/> 

 				<label for="icon_telephone">Telephone</label>
				</div>
				
				
			
		);
	}
}

InputNumber.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	row:PropTypes.string.isRequired,
	cols:PropTypes.string.isRequired
};