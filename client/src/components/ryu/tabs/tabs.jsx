import tabsStyle from './tabs.module.scss';

const Tabs = ({tabs, setIndex}) => {
	const selectMenuHandelr = (index) => {
		setIndex(index);
	};

	return (
		<div className={tabsStyle.base}>
			{tabs.map((el, index) => (
				<li className={tabsStyle.base__tab} onClick={() => selectMenuHandelr(index)}>
					{el}
				</li>
			))}
			<span className={tabsStyle.base__tab__slider} />
		</div>
	);
};

export default Tabs;