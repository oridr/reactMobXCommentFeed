import './style.scss';

import React, { PropTypes, PureComponent } from 'react';

import InputField from 'components/shared/InputField';

class CommentForm extends PureComponent {
	render() {
		return (
			<div className="commentForm">
				<form>
					<div className="commentForm__field">
						<InputField label="Email" name="email" type="email" required onChange={ (name, value) => console.log(name,value) } />
					</div>

					<div className="commentForm__field">
						<InputField label="Message" name="messsage" required multi onChange={ (name, value) => console.log(name,value) } />
					</div>

					<button type="submit" className="commentForm__submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default CommentForm;