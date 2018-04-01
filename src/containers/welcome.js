import React, { Component } from "react";
import { InputText,Button,InputNumber  } from "../atoms/lib/..";
import InputMask from "react-input-mask";

export default class Welcome extends Component{

	render(){

		return(				
			<div>	
				<div>
					<button
						id={"btnBuscar"}
						className={"button"}
						type={""}
						onClick={""}>	
						Button
					</button>
				</div>
				<div>
					<input 
						type="text"
						value={""}
						className={"inputText"}
					/>
				</div>	

				<div>
					<InputNumber
						type="tel"
						placeholder={"(00) 0000-0000"}
						className={"input-number"}

					/>
				</div>
			</div>	
		
		);
	}
}



