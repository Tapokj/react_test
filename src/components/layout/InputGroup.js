import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputGroup = ({
	label,
	name,
	value,
	placeholder,
	type,
	onChange, 
	error
}) => {
	return(
	<div className='form-group'>
	 <label htmlFor={name}>{label}</label>
	 <input onChange={onChange} value={value} name={name} placeholder={placeholder} type={type} className={classnames('form-control form-control-lg',
	 	{'is-invalid':error})}/>
	 {error && <div className="invalid-feedback">{error}</div>}
	</div>
	)
};

InputGroup.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string
};

InputGroup.defaultProps = {
	type: 'text',
};

export default InputGroup