import './style.scss';

import React, { PropTypes, PureComponent } from 'react';

import InputField from 'components/shared/InputField';

const getInitialState = () => ({
	email: { value: '', valid: false },
	message: { value: '', valid: false }
});

class CommentForm extends PureComponent {
	static propTypes = {
		addItem: PropTypes.func.isRequired
	};

	state = getInitialState();

	setItemProp = (name, value, validity) => this.setState({
		[name]: { value, validity }
	});

	addItem = (e) => {
		e.preventDefault();

		const { email, message } = this.state;

		this.props.addItem({
			email: email.value,
			message: message.value
		});

		this.setState(getInitialState());
	};

	render() {
		const { email, message } = this.state;

		return (
			<div className="commentForm">
				<form noValidate onSubmit={ this.addItem }>
					<div className="commentForm__field commentForm__field--email">
						<InputField label="Email" name="email" type="email" value={ email.value } required onChange={ this.setItemProp } />
					</div>

					<div className="commentForm__field commentForm__field--message">
						<InputField label="Message" name="message" value={ message.value } required multi onChange={ this.setItemProp } />
					</div>

					<button type="submit" className="commentForm__submit" disabled={ !email.validity || !message.validity }>SUBMIT</button>
				</form>
			</div>
		);
	}
}

export default CommentForm;