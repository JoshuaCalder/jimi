import React, { Component } from 'react';
import TextInput from '../inputs/text_input';
import './sign_up.css';

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
			<div className="signup-container">
				<h1 className="header-left"> Join the party. </h1>
				<p className="subheader-left"> Sign in with <u> Spotify </u> to play your songs </p>

				<button type="button" className="btn btn-primary facebookBtn" onClick={this.submit}>LOGIN WITH FACEBOOK</button>

				<p className="or-center"> OR </p>

				<TextInput
					name={'spotifyUsername'}
					id={'spotifyUsername'}
					placeHolder={'Spotify Username...'}
					type={'text'}
					handleTextChange={this.handleTextChange}
					/>
				<TextInput
					name={'email'}
					id={'email'}
					placeHolder={'Email address...'}
					type={'email'}
					handleTextChange={this.handleTextChange}
					/>
					<TextInput
						name={'password'}
						id={'password'}
						placeHolder={'Password...'}
						type={'password'}
						handleTextChange={this.handleTextChange}
						/>

					<button type="button" className="btn btn-success loginBtn" onClick={this.submit}>LOGIN</button>
					</div>
			</React.Fragment>
		);
	}
}

export default SignUp;
