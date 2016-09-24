import './style.scss';

import React, { Component, PropTypes } from 'react';

import CommentForm from 'components/CommentForm';
import FeedList from 'components/FeedList';

const list = [
	{ id: 1, email: 'elik@bigpanda.io', message: 'Hello there. How are you?' },
	{ id: 2, email: 'Shai@bigpanda.io', message: 'Good!!!' },
	{ id: 3, email: 'noam@bigpanda.io', message: 'Goodbye :}' }
];

class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="app__area app__commentForm">
					<CommentForm />
				</div>

				<div className="app__area app__feed">
					<FeedList items={ list } />
				</div>
			</div>
		);
	}
}

export default App;