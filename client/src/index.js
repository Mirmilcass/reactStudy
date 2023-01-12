import React from 'react';
import ReactDOM from 'react-dom/client';

import Test from './containers/test';
import Ryu from './containers/ryu';

import MainCss from './main.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<div className={MainCss.half}>
			<Test />
			<Ryu />
		</div>
	</React.StrictMode>
);