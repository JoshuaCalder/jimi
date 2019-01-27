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

	render(){
		return(
			<React.Fragment>
				<TextInput 
					label={'Email'}
					onChange={this.handleTextChange}
					id={'email'}
					placeHolder={'example@email.com'}
					type={'email'}
				/>
				<TextInput 
					label={'Password'}
					onChange={this.handleTextChange}
					id={'password'}
					type={'password'}
				/>
			</React.Fragment>
		);
	}
}

export default LogIn;
