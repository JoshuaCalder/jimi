import React, { Component } from 'react';
import  TextInput  from '../inputs/text_input';
import axios from 'axios';

class CreateParty extends Component{
	constructor(props){
			super(props);
			this.state = {
					userId: 'e8662251-b386-40d6-901f-dc7e30f8ef43',
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
		let endpoint = '/create_party';
		let body={
			user_uuid: this.state.userId, 
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
		return(
			<div>
				<TextInput 
					label={"Party Name"}
					name={'partyName'}
					id={'partyName'}
					placeHolder={'Enter Party Name'}
					type={'text'}
					handleTextChange={this.handleTextChange}
					onKeyPress={ this.handleEnter }
					/>
				<button type="button" className="btn btn-success" onClick={this.submit}>Create Party</button>
			</div>
		);
	}
}

export default CreateParty;
