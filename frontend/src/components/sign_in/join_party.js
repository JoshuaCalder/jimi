import React, { Component } from 'react';
import  TextInput  from '../inputs/text_input';
import queryString from 'query-string';
import axios from 'axios';
import { Redirect, BrowserRouter } from 'react-router-dom';
import CreateParty from '../create_party/create_party';
import './join_party.css';

class JoinParty extends Component{
	constructor(props){
			super(props);
			this.state = {
					userName: null,
					userId: props.uuid,
					partyId: null,
					redirect: false,
		};
	}
	componentDidMount() {
		let url = this.props.location.search;
  		let params = queryString.parse(url);
		if(params['uuid'] !== undefined){
			this.props.updateUuid (params['uuid']);
		}


	}
	joinParty = () => {
		let endpoint = '/join_party';
		let body = {
			user_uuid: this.state.userId,
			party_code: this.state.partyCode
		}
		console.log(body);
		axios.post( endpoint, body )
			.then( response => {
				console.log(response.data);
			})
			.catch( err => {
				console.log(err);
			});

	}


	handleTextChange = (e, id) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
		console.log(e.target.value);
	}

	redirectToCreateParty = () => {
		console.log('redirecting');
		this.setState({
			redirect: true,
		});
	}

	submit = () => {
		console.log(this.state);
	}

	render(){
		if(this.state.redirect){
			return(
				this.props.handleRedirect('/createParty')
			);
		}
		return(
			<div className="join-party-container">
				<div className="inner-wrap">
					<h1>Enter the <br/>party code.</h1>
					<TextInput
						name={'partyCode'}
						id={'partyCode'}
						placeHolder={'#000-000'}
						type={'text'}
						class={'center-place-holder'}
						handleTextChange={this.handleTextChange}
					/>
					<button type="button" className="btn btn-success btn-sx" onClick={this.joinParty}>JOIN PARTY</button>
					<hr/>
					<p>Don't have a party code?</p>
					<button type="button" className="btn btn-success btn-sx sml" onClick={ this.redirectToCreateParty }>CREATE A ROOM</button>
				</div>
			</div>
		);
	}
}

export default JoinParty;
