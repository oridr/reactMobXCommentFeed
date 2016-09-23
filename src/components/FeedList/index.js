import React, { PropTypes } from 'react';

import FeedItem from './FeedItem';

const FeedList = ({ items = [] }) => (
	<ul>
		{
			items.map((item) => (
				<FeedItem key={ item.email } { ...item } />
			))
		}
	</ul>
);

FeedList.propTypes = {
	items: PropTypes.array
};

export default FeedList;