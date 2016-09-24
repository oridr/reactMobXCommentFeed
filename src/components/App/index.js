import './style.scss';

import React, { Component, PropTypes } from 'react';

import CommentForm from 'components/CommentForm';
import FeedList from 'components/FeedList';

class App extends Component {
	static propTypes = {
		feed: PropTypes.object.isRequired
	};

	render() {
		const { feed } = this.props;

		return (
			<div className="app">
				<div className="app__area app__commentForm">
					<CommentForm addItem={ feed.addItem } />
				</div>

				<div className="app__area app__feed">
					<FeedList feed={ feed } />
				</div>
			</div>
		);
	}
}

export default App;