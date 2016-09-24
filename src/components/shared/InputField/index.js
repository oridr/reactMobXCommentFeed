import './style.scss';

import React, { PureComponent, PropTypes } from 'react'

class InputField extends PureComponent {
	static propTypes = {
		label: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		value: PropTypes.string,
		onChange: PropTypes.func.isRequired,
		type: PropTypes.string,
		required: PropTypes.bool,
		multi: PropTypes.bool
	};

	defaultProps = {
		type: 'text',
		value: '',
		required: false,
		multi: false
	};

	onChange = (event) => {
		const input = event.target;
		this.props.onChange(input.name, input.value, input.checkValidity());
	};

	render () {
		const { label, name, value, type, required, multi } = this.props;
		const fieldProps = { name, value, required, onChange: this.onChange, placeholder: label };

		return !multi ?
			(
				<input className="inputField inputField--single" type={ type } { ...fieldProps } />
			)
			:
			(
				<textarea className="inputField inputField--multi" { ...fieldProps } />
			);
	}
}

export default InputField;