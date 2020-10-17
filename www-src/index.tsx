import * as React from "react";
import * as ReactDOM from "react-dom";
import { Clock } from "./components/clock";
import { Navigation } from "./components/navigation";
import { Page } from "./components/page";
// import { getObjectAsync } from "./lib/backend";
// import { useIoBrokerObject } from "./lib/useIoBrokerObject";
import config from "./config.json";

// TODO: Detect from the URL
// const namespace = "react-vis.0";

const Root: React.FC = () => {
	const [currentPageName, setCurrentPageName] = React.useState<string | undefined>("Heizung");
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
					<p>hier kommt mal das Wetter hin!</p>
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
};

const App: React.FC = () => {
	// Manage socket connection and only display the Root component when a socket is available
	const [socketLoaded, setSocketLoaded] = React.useState<boolean>(!!window.socket);
	React.useEffect(() => {
		const timeout = setInterval(() => {
			if (!!window.socket) {
				clearTimeout(timeout);
				setSocketLoaded(true);
			}
		}, 250);
		(window as any).onSocketLoaded = () => {
			setSocketLoaded(true);
		};
		return () => clearTimeout(timeout);
	}, []);
	return socketLoaded ? <Root /> : <span>loading...</span>;
};

ReactDOM.render(<App />, document.getElementById("app"));
