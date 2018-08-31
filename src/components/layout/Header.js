import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
	const { branding } = props;

	return(
		<div className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
			<div className="container">
				<a href="/" className="navbar-brand">{branding}</a>
				<div>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to="/" className="nav-link">
						<i className="fas fa-home"></i>	Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact/add" className="nav-link">
						 <i className="fas fa-plus"></i> Add Contact
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-link">
						 <i className="fas fa-question"></i> About
						</Link>
					</li>
				</ul>
				</div>
			</div>
		</div>
	);
}

Header.defaultProps = {
	branding: 'My App'
};

Header.propTypes = {
	branding: PropTypes.string.isRequired
};

export default Header;