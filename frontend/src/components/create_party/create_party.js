import React, { Component } from 'react';
import  TextInput  from '../inputs/text_input';
import axios from 'axios';
import './create_party.css';
import '../sign_in/join_party.css';

class CreateParty extends Component{
	constructor(props){
			super(props);
			this.state = {
					userId: props.uuid,
					partyId: null,
					redirect: false,
		};
	}

	handleTextChange = (e, id) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
		console.log(e.target.value);
	}

	submit = () => {
		let endpoint = '/create_party';
		let body={
			user_uuid: this.props.uuid, 
			party_name: this.state.partyName 
		};
		console.log(body);

		axios.post( endpoint, body )
			.then( response => {
				console.log(response.data);
				this.props.updateState('partyCode', response.data);
				this.props.updateState('partyName', this.state.partyName)
			})
			.catch( err => {
				console.log(err);
			});

	}

	handleEnter = (event) => {
	    var code = event.keyCode || event.which;
	    if(code === 13) { //13 is the enter keycode
   			this.submit();
		}
	}

	render(){
		if(this.props.partyCode !== null)
			return( this.props.handleRedirect('/tracklist') );

		return(
			<div className="join-party-container">
				<div className="inner-wrap">
					<h1 className="extend-h1">Name <br/> your Party.</h1>
					<TextInput
						name={'partyName'}
						id={'partyName'}
						placeHolder={"ex: Jimi's Party"}
						type={'text'}
						handleTextChange={this.handleTextChange}
						onKeyPress={ this.handleEnter }
						/>
					<button type="button" className="btn btn-success" onClick={this.submit}>CREATE</button>
				</div>
			</div>
		);
	}
}

export default CreateParty;
