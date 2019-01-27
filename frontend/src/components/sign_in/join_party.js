import React, { Component } from 'react';
import  TextInput  from '../inputs/text_input';
import queryString from 'query-string';
import { Redirect, BrowserRouter } from 'react-router-dom';
import './join_party.css';

class JoinParty extends Component{
	constructor(props){
			super(props);
			this.state = {
					userName: null,
					userId: null,
					partyId: null,
					redirect: false,
		};
	}
	componentDidMount() {
		let url = this.props.location.search;
  		let params = queryString.parse(url);
		if(params['uuid'] !== undefined){
			this.props.updateUuid (params['uuid']);
			this.setState({redirect: true});
		}
  		
		
	}
	handleTextChange = (e, id) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
		console.log(e.target.value);
	}
	
	redirectToCreateParty = () => {
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
				<Redirect to='/createparty' />
			);
		}
		return(
			<div className="join-party-container">
				<div className="inner-wrap">
					<h1>Enter the <br/>party code.</h1>
					<TextInput
						name={'partyId'}
						id={'partyId'}
						placeHolder={'000-000'}
						type={'text'}
						class={'center-place-holder'}
						handleTextChange={this.handleTextChange}
					/>
					<button type="button" className="btn btn-success btn-sx" onClick={this.submit}>JOIN PARTY</button>
					<hr/>
					<p>Don't have a unique code?</p>
					<button type="button" className="btn btn-success btn-sx sml"onClick={this.redirectToCreateParty}>CREATE A SESSION</button>
				</div>	
			</div>
		);
	}
}

export default JoinParty;
