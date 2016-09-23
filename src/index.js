import React from 'react';
import { render } from 'react-dom';
import FeedItem from 'components/FeedItem';

render(
	<FeedItem email="elik@bigpanda.io" message="you are not alone" />,
	document.getElementById('root')
);

// if (module.hot) {
// 	module.hot.accept('./App', () => {
// 		const NextApp = require('./App').default;
//
// 		render(
// 			<AppContainer>
// 				<NextApp appState={appState} />
// 			</AppContainer>,
// 			document.getElementById('root')
// 		);
// 	});
// }
