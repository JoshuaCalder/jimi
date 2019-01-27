import React, { Component } from 'react';
import './text_input.css';

const TextInput = (props) => {
		return(
			<div className="form-group textbox-align">

    			<label>{ props.label }</label>
    			<input type={ props.type } name={ props.name } className="form-control" id={ props.id } placeholder={ props.placeHolder } onChange={ props.handleTextChange } onKeyPress={ props.onKeyPress } />
  			</div>
		);
}
export default TextInput;
