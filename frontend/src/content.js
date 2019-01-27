import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
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

		};	
	}

	
	updateUuid = (id) => {
		if(this.state.uuid === null){
			this.setState({
				uuid: id,
			});
		}
	}

	handleRedirect = (url) =>{
		return (	<Redirect to={ url } />	);
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
			<BrowserRouter>
				<Route path='/entrance' component={(props) => <Entrance {...props} updateUuid={ this.updateUuid  }/>} />
			</BrowserRouter>
			<BrowserRouter>
				<Route path='/joinparty' component={(props) => <JoinParty {...props} 
						handleRedirect={ this.handleRedirect } 
						updateUuid={ this.updateUuid }
						updatePartyId={ this.updatePartyId }
						uuid={this.state.uuid}
						/>} 
					/>
			</BrowserRouter>
			<BrowserRouter>
				<Route path='/login' render={ () => <LogIn />} />
			</BrowserRouter>
			<BrowserRouter>
				<Route path='/signUp' render={ () => <SignUp />} />
			</BrowserRouter>
			<BrowserRouter>
				<Route path='/createparty' component={(props) => <CreateParty {...props} updateUuid={ this.updateUuid  }/>} />
			</BrowserRouter>
			<BrowserRouter>
				<Route path='/tracklist' render={ () => <TrackPage />} />
			</BrowserRouter>
        </header>
      </div>
    );
  }
}

export default Content;
