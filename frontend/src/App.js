import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import JoinParty from './components/sign_in/join_party';
import LogIn from './components/sign_in/log_in';
import SignUp from './components/sign_in/sign_up';
import CreateParty from './components/create_party/create_party';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
			<BrowserRouter>
				<Route path='/joinParty' render={() => <JoinParty /> } />
			</BrowserRouter>
			<BrowserRouter>
				<Route path='/login' render={ () => <LogIn />} />
			</BrowserRouter>
			<BrowserRouter>
				<Route path='/signUp' render={ () => <SignUp />} />
			</BrowserRouter>
			<BrowserRouter>
				<Route path='/createParty' render={ () => <CreateParty />} />
			</BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
