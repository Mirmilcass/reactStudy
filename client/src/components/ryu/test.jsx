import React, { useState } from 'react'

import style from './test.module.scss';
import MainStyle from '../../main.module.scss';

import Tabs from './tabs/tabs.jsx';

const Test = () => {
	const [tabIndex, setTabIndex] = useState(0)
	
	const setIndex = (number) => {
		setTabIndex(number);
	}
	
	const secondTitle = 'BENEFITS of TECHNOLOGIES';
	let codes = [];
	for (let i = 0; i < secondTitle.length; i++) {
		codes.push(<span>{secondTitle.charAt(i)}</span>);
	}
	
	const tabs = ['SVELTE', 'ESBUILD', 'NEXT.JS', 'TYPESCRIPT', 'VITE'];
	const tabContents = ['another frontend JS framework', 'an extremely fast JavaScript bundler', 'framework for Production', 'giving you better tooling at any scale', 'a frontend build tool'];
	
	return (
		<div className={[style.base, MainStyle.halfChild].join(" ")}>
			<section>
				<nav className={style.nav}>
					<h1 className={style.H1}>FRONTEND TRENDS</h1>
					<h3 className={style.H3}>
						{codes}
					</h3>
					<Tabs tabs={tabs} setIndex={setIndex} />
				</nav>
			</section>
			<div className={style.body}>
				<h1 className={style.H1}>{tabs[tabIndex]}</h1>
				<h2>{tabContents[tabIndex]}</h2>
			</div>
		</div>
	)
}

export default Test;