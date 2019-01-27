import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter,Switch } from 'react-router-dom';
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
		};	
	}

	
	updateUuid = (id) => {
		if(this.state.uuid === null){
			this.setState({
				uuid: id,
			});
		}
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
			<BrowserRouter>
				<Switch>
					<Route path='/entrance' render={(props) => <Entrance {...props} updateUuid={ this.updateUuid  }/>} />
					<Route path='/login' render={ () => <LogIn />} />
					<Route path='/signUp' render={ () => <SignUp />} />
					<Route path='/joinparty' render={(props) =><JoinParty {...props} updateUuid={ this.updateUuid}  />} />
					<Route path='/createParty' render={ () => <CreateParty uuid={this.state.uuid}/>} />
					<Route path='/tracklist' render={ () => <TrackPage />} />
				</Switch>
			</BrowserRouter>
        </header>
      </div>
    );
  }
}

export default Content;
