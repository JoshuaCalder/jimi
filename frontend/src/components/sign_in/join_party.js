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
				<TextInput 
					label={"Party Identifier"}
					name={'partyId'}
					id={'partId'}
					placeHolder={'000-000'}
					type={'text'}
					handleTextChange={this.handleTextChange}
					/>
				<button type="button" className="btn btn-success" onClick={this.submit}>Success</button>
			</div>
		);
	}
}

export default JoinParty;
