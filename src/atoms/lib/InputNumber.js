import React, { Component} from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";

export default class InputNumber extends Component{



	render(){
		const{id,className,onchange,value,type, placeholder}= this.props;
		return(
				
				<InputMask
					type="tel" 
					id={id} 
					value={value} 
					
					placeholder={placeholder}
					
					 {...this.props} mask="+55 (99) 9 9999-9999" maskChar="" 

				/> 
				
			
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