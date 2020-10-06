import * as React from "react";
import * as ReactDOM from "react-dom";
import { Clock } from "./components/clock";
import { Navigation } from "./components/navigation";

const Root: React.FC = () => {
	return (
		<>
			<header></header>
			<div className="content-wrapper">
				<aside>
					<Clock />
					<p>hier kommt mal das Wetter hin</p>
					<h2>Meldungen</h2>
					<p>hier gibts noch nichts zu sehen!</p>
					<Navigation />
				</aside>
				<main></main>
			</div>
			<footer></footer>
		</>
	);
};

ReactDOM.render(<Root />, document.getElementById("app"));
