import React, { Component } from 'react';
import  TextInput  from '../inputs/text_input';
import './join_party.css';

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
			<div className="join-party-container">
				<TextInput
					label={"Party Identifier"}
					name={'partyId'}
					id={'partId'}
					placeHolder={'000-000'}
					type={'text'}
					class={'center-place-holder'}
					handleTextChange={this.handleTextChange}
					/>
					<div className="fluid">
						<button type="button" className="btn btn-success btn-sx" onClick={this.submit}>Join Party</button>
					</div>
			</div>
		);
	}
}

export default JoinParty;
