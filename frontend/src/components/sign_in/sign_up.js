import React, { Component } from 'react';
import TextInput from '../inputs/text_input';

class SignUp extends Component{
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
				<h1> Sign Up </h1>
				<TextInput 
					label={"Email"}
					name={'email'}
					id={'email'}
					placeHolder={'joe@email.com'}
					type={'email'}
					handleTextChange={this.handleTextChange}
					/>
				<TextInput 
					label={"Spotify Username"}
					name={'spotifyUsername'}
					id={'spotifyUsername'}
					type={'text'}
					handleTextChange={this.handleTextChange}
					/>	
				<TextInput 
					label={"Password"}
					name={'password'}
					id={'password'}
					type={'password'}
					handleTextChange={this.handleTextChange}
					/>				
				
					<button type="button" className="btn btn-success" onClick={this.submit}>Sign Up</button>

			</React.Fragment>
		);
	}
}

export default SignUp;
