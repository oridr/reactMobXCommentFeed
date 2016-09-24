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
		value: '',
		type: 'text',
		required: false,
		multi: false
	};

	onChange = (event) => this.props.onChange(event.target.name, event.target.value);

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