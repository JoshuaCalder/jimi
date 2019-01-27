import React, { Component } from 'react';
import  TextInput  from '../inputs/text_input';
import axios from 'axios';

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
		let endpoint = '/join_party';
		let body={
			user_id: 'usersid', 
			party_code: this.state.partyId 
		};

		console.log(body);

		axios.post( endpoint, body )
			.then( response => {
				console.log(response.data);
			})
			.catch( err => {
				console.log(err);
			});

	}


	render(){
		return(
			<div>
				<TextInput 
					label={"Party Identifier"}
					name={'partyId'}
					id={'partyId'}
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
