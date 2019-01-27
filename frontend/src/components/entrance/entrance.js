import React, { Component } from 'react';
import './entrance.css';

class Entrance extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="entrance-body">
				<h2>Welcome to Jimi!</h2>
				<p>To start playing music, connect your Spotify Account</p>
				<div className="fluid">
					<a href="http://localhost:8000/login"><button type="button" className="btn btn-success">ENTER</button></a>
				</div>
			</div>
		);
	}
}

export default Entrance;
