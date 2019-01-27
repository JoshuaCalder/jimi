import React, { Component } from 'react';
import  TextInput  from '../inputs/text_input';

class JoinParty extends Component{
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
			<div>
				<h1>Join The Party.</h1>
				<h3>Sign in with <a href="https://spotify.com">Spotify</a> to play your songs.</h3>
				<TextInput 
					label={"Party Identifier"}
					name={'partyId'}
					id={'partId'}
					placeHolder={'000-000'}
					type={'text'}
					handleTextChange={this.handleTextChange}
					/>
				<button type="button" className="btn btn-success" onClick={this.submit}>Join Party</button>
			</div>
		);
	}
}

export default JoinParty;
