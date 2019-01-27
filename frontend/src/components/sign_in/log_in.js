import React, { Component } from 'react';
import TextInput from '../inputs/text_input';

class LogIn extends Component{
	constructor(props){
			super(props);
			this.state = {
					userName: null,
					userId: null,
					partyId: null,
		};
	}


	handleTextChange = (e, id) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
		console.log(e.target.value);	
	}
	
	submit = () => {
		console.log(this.state);
	}

	render(){
		return(
			<React.Fragment>
				<TextInput 
					label={"Email"}
					name={'email'}
					id={'email'}
					placeHolder={'joe@email.com'}
					type={'email'}
					handleTextChange={this.handleTextChange}
					/>

				<TextInput 
					label={"Password"}
					name={'password'}
					id={'password'}
					type={'password'}
					handleTextChange={this.handleTextChange}
					/>				
				
					<button type="button" className="btn btn-success" onClick={this.submit}>Login</button>

			</React.Fragment>
		);
	}
}

export default LogIn;
