import React, { Component } from 'react';
import { Consumer } from '../../context';
import InputGroup from '../layout/InputGroup';
import axios from 'axios';


class EditContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	}
	
	async componentDidMount(){
		const { id } = this.props.match.params;
		const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');

		const contact = res.data; 

		this.setState({
			name: contact.name,
			email: contact.email,
			phone: contact.phone
		});
	}
	
	
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

		const updContact = {
			name,
			email,
			phone
		}
		
		const { id } = this.props.match.params;

		const res = await axios.put('https://jsonplaceholder.typicode.com/users/1', updContact);

		dispatch({type: 'UPDATE_CONTACT', payload: res.data});


		
		
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
						 <div className="card-header">Edit Contact</div>
						 <div className="card-body">
							<form onSubmit={this.onSubmit.bind(this, dispatch)}>
								<InputGroup error={errors.name} onChange={this.onChange} label="Name" name="name" placeholder="Enter Name" value={name}/>
								<InputGroup error={errors.email} onChange={this.onChange} label="Email" name="email" placeholder="Enter Email" value={email}/>
								<InputGroup error={errors.phone} onChange={this.onChange} label="Phone" name="phone" placeholder="Enter Phone" value={phone}/>
								<input type="submit" value='Update Contact'  className="btn btn-danger mt-2"/>
							</form>
						 </div>
						</div>
					)
				}}
			</Consumer>
		)
	}
}

export default EditContact;