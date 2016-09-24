import './style.scss';

import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

import InputField from 'components/shared/InputField';
import FeedItem from './FeedItem';

@observer
class FeedList extends Component {
	static propTypes = {
		feed: PropTypes.object.isRequired
	};

	filter = (name, value) => this.props.feed.filter = value;

	render() {
		const { feed } = this.props;

		return (
			<div className="feedList">
				<InputField label="Filter" name="filter" onChange={ this.filter } />

				<ul className="feedList__list">
					{
						feed.filteredItems.map(({ id, email, message }) => (
							<FeedItem key={ id } email={ email } message={ message } />
						))
					}
				</ul>
			</div>
		);
	}
}

export default FeedList;