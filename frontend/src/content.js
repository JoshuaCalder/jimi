import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import JoinParty from './components/sign_in/join_party';
import LogIn from './components/sign_in/log_in';
import SignUp from './components/sign_in/sign_up';
import CreateParty from './components/create_party/create_party';
import TrackPage from './components/track_page/track_page';
import Entrance from './components/entrance/entrance';

class Content extends Component {
	constructor(props){
		super(props);
		this.state={
			uuid: null,
			partyId: null,
			partyName: null,
			partyCode: null,
			trackList: null,
		};	
	}

	
	updateState = (key, val) => {
		if(this.state[key] === null){
			this.setState({
				[key]: val,
			});
		}
	}

	handleRedirect = (url) =>{
		return (	<Redirect to={ url } />	);
	}
	
	getTrackList = ( partyCode ) =>{
		let endpoint = '/party_top_tracks?party_code='+this.state.partyCode;
		if(this.state.trackList !== null)
			return;
		//let sendBody = JSON.stringify(body);
		//console.log(sendBody);
		axios.get( endpoint )
			.then( response => {
				// console.log(response.data)
				this.setState(
					{
						trackList:response.data.items
					}
				)
			})
			.catch( err => {
				console.log(err);
			});

	}

  render() {
	
    return (
      <div className="App">
        <header className="App-header">
			<BrowserRouter>
				<Switch>
					<Route path='/entrance' component={(props) => <Entrance {...props} 
							updateState={ this.updateState  }/>} />
					<Route path='/login' render={ () => <LogIn />} />
					<Route path='/signUp' render={ () => <SignUp />} />
					<Route path='/joinparty' component={(props) => <JoinParty {...props} 
							handleRedirect={ this.handleRedirect } 
							updateState={ this.updateState }
							updatePartyId={ this.updatePartyId }
							uuid={this.state.uuid}
							/>} 
						/>
					<Route path='/createparty' component={(props) => <CreateParty {...props} 
							updateState={ this.updateState  }
							handleRedirect={ this.handleRedirect }
							partyCode={ this.state.partyCode }
							uuid={ this.state.uuid }/>} />
					<Route path='/tracklist' render={ () => <TrackPage 
							partyName={ this.state.partyName }
							partyCode={ this.state.partyCode }
							trackList={ this.state.trackList}
							getTracks={ this.getTrackList }
							/>} />
				</Switch>
			</BrowserRouter>
        </header>
      </div>
    );
  }
}

export default Content;
