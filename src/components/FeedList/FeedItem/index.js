import './style.scss';

import React, { PropTypes } from 'react';
import md5 from 'md5';

const getEmailHash = (email) => md5(email.trim().toLowerCase());

const FeedItem = ({ email, message }) => (
	<li className="feedItem">
		<img src={ `https://www.gravatar.com/avatar/${getEmailHash(email)}` } className="feedItem__avatar" />
		<div className="feedItem__email">{ email }</div>
		<div className="feedItem__label">{ message }</div>
	</li>
);

FeedItem.propTypes = {
	email: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

export default FeedItem;