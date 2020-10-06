import * as React from "react";
import * as ReactDOM from "react-dom";
import { Clock } from "./components/clock";

const Root: React.FC = () => {
	return (
		<>
			<header></header>
			<div className="content-wrapper">
				<aside>
					<Clock />
				</aside>
				<main></main>
			</div>
			<footer></footer>
		</>
	);
};

ReactDOM.render(<Root />, document.getElementById("app"));
