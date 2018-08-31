import React, { Component } from 'react';
import axios from 'axios';

//1. get createContext func from React and bring it to const wich called 'Context'
//2. create and export class wich called 'Provider'
//3. in return we put JSX tag <Context.Provider> with attr value wich contain state
//4. in this tag we put props.children
//5. we create conumer const with Context.Consumer end export it out 
//6. we import Consumer to comp.and put Conumer like JSX syntax
//7. in tag we wrote arr.func with value arg and put div with other code there

const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type){
		case 'DELETE_CONTACT':
		 return {
		 	...state, 
		 	contacts: state.contacts.filter(contact => 
		 	contact.id !== action.payload)
		 };
		case 'ADD_CONTACT':
		 return {
		 	...state, 
		 	contacts: [action.payload, ...state.contacts]
		 };
		case 'UPDATE_CONTACT':
		 return {
		 	...state, 
		 	contacts: state.contacts.map(contact => {
		 		contact.id === action.payload.id ? (contact = action.payload) : contact
		 	})
		 };

	 default: 
	 	return state;
	}
}

export class Provider extends Component {
	state = {
		contacts: [],
		dispatch: action => this.setState(state =>
			reducer(state, action))
	}

	async componentDidMount(){
		const res = await axios.get
		 ('https://jsonplaceholder.typicode.com/users')
		  
		this.setState({contacts: res.data});
	}

	render(){
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export const Consumer = Context.Consumer;

