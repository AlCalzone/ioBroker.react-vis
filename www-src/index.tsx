import { IoBrokerApp } from "iobroker-react/app";
import React from "react";
import ReactDOM from "react-dom";
import { Clock } from "./components/clock";
import { Navigation } from "./components/navigation";
import { Page } from "./components/page";
import { Weather } from "./components/weather";
// import { getObjectAsync } from "./lib/backend";
// import { useIoBrokerObject } from "./lib/useIoBrokerObject";
import config from "./config.json";

// TODO: Detect from the URL
// const namespace = "react-vis.0";

const Root: React.FC = React.memo(() => {
	const [currentPageName, setCurrentPageName] = React.useState<string | undefined>("Licht & Rollos");
	const clearCurrentPageName = () => setCurrentPageName(undefined);

	// TODO: dynamically load layout
	// const [layout] = useIoBrokerObject({ id: `system.adapter.${namespace}` });
	// React.useEffect(() => {
	// 	console.log(layout);
	// }, [layout]);
	const layout = config;
	const currentPage = layout.pages.find((p) => p.label === currentPageName);

	return !!layout ? (
		<>
			<header></header>
			<div className="content-wrapper">
				<aside>
					<Clock />
					<Weather now={config.weather.now} days={config.weather.days} />
					<h2>Meldungen</h2>
					<p>hier gibts noch nichts zu sehen!</p>
					<Navigation items={config.pages} onSelectItem={setCurrentPageName} />
				</aside>
				<main>
					{currentPage && (
						<Page
							title={currentPage.label}
							sections={currentPage.sections}
							onClose={clearCurrentPageName}
						/>
					)}
				</main>
			</div>
			<footer></footer>
		</>
	) : (
		<span>loading...</span>
	);
});

ReactDOM.render(
	<IoBrokerApp name="react-vis">
		<Root />
	</IoBrokerApp>,
	document.getElementById("app"),
);
