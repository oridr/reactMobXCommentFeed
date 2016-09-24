import 'styles/normalize.css';

import React from 'react';
import { render } from 'react-dom';

import feed from './Feed';
import App from 'components/App';

render(
	<App feed={ feed } />,
	document.getElementById('root')
);