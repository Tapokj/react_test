import React, { Component } from 'react';
import { Consumer } from '../../context';
import InputGroup from '../layout/InputGroup';
import axios from 'axios';


class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	}
	
	//We refer to the name of input
	
	
	onSubmit = async(dispatch, e) => {
		e.preventDefault();
		
		const {name, email, phone } = this.state;

		if(name === ''){
			this.setState({errors: { name: 'Name is required' }});
			return;
		}		
		if(email === ''){
			this.setState({errors: { email: 'Email is required' }});
			return;
		}		
		if(phone === ''){
			this.setState({errors: { phone: 'Phone is required' }});
			return;
		}

		const newContact = {
			name,
			email,
			phone
		};
		
		const res = await axios.post
		 ('https://jsonplaceholder.typicode.com/users', newContact)
		dispatch({type: 'ADD_CONTACT', payload: res.data})

		
		
		//clear state here
		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {}
		});

		//Redirect
		this.props.history.push('/')
	}
	
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, phone, errors} = this.state;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className='card mb-3'>
						 <div className="card-header">Add Contact</div>
						 <div className="card-body">
							<form onSubmit={this.onSubmit.bind(this, dispatch)}>
								<InputGroup error={errors.name} onChange={this.onChange} label="Name" name="name" placeholder="Enter Name" value={name}/>
								<InputGroup error={errors.email} onChange={this.onChange} label="Email" name="email" placeholder="Enter Email" value={email}/>
								<InputGroup error={errors.phone} onChange={this.onChange} label="Phone" name="phone" placeholder="Enter Phone" value={phone}/>
								<input type="submit" value='Add Contact'  className="btn btn-danger mt-2"/>
							</form>
						 </div>
						</div>
					)
				}}
			</Consumer>
		)
	}
}

export default AddContact;