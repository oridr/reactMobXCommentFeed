import './style.scss';

import React, { PropTypes } from 'react';

import FeedItem from './FeedItem';

const FeedList = ({ items = [] }) => (
	<ul className="feedList">
		{
			items.map(({ id, email, message }) => (
				<FeedItem key={ id } email={ email } message={ message } />
			))
		}
	</ul>
);

FeedList.propTypes = {
	items: PropTypes.array
};

export default FeedList;