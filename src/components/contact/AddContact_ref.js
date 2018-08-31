import React, { Component } from 'react';

class AddContact extends Component {	
	//We refer to the name of input
	constructor(props){
		super(props);

		this.nameInput = React.createRef();
		this.emailInput = React.createRef();
		this.phoneInput = React.createRef();

	}
	
	onSubmit = e => {
		e.preventDefault();
		const contact = {
			name: this.nameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value
		}

		console.log(contact)
	}

	static defaultProps = {
		name: 'Fred Smith',
		email: 'fred@gm.com',
		phone: '777-777-777'
	};

	render() {
		const { name, email, phone } = this.props;
		return (
			<div className='card mb-3'>
			 <div className="card-header">Add Contact</div>
			 <div className="card-body">
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
					 <label htmlFor="name">Name</label>
					 <input ref={this.nameInput}defaultValue={name} name='name' placeholder='Enter Name...' type="text" className="form-control form-control-lg"/>
					</div>
					<div className="form-group">
					 <label htmlFor="email">Email</label>
					 <input ref={this.emailInput}defaultValue={email} name='email' placeholder='Enter Email...' type="email" className="form-control form-control-lg"/>
					</div>
					<div className="form-group">
					 <label htmlFor="phone">Phone</label>
					 <input ref={this.phoneInput}defaultValue={phone} name='phone' placeholder='Enter Phone...' type="text" className="form-control form-control-lg"/>
					</div>
					<input type="submit" value='Add Contact'  className="btn btn-danger mt-2"/>
				</form>
			 </div>
			 

			</div>
		);
	}
}

export default AddContact;