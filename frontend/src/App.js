import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';
import JoinParty from './components/sign_in/join_party';
import LogIn from './components/sign_in/log_in';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
			<BrowserRouter> 
				<Route path='/joinparty' render={() => <JoinParty /> } />
			</BrowserRouter>
			<BrowserRouter>	
				<Route path='/login' render={ () => <LogIn />} />
			</BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
