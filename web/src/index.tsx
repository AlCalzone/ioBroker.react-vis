import * as React from "react";
import * as ReactDOM from "react-dom";
import { Clock } from "./components/clock";
import { Dialog } from "./components/dialog";
import { Navigation } from "./components/navigation";
import { LightDialog } from "./dialogs/light";

export type Dialogs = "light" | "vacuum";

const Root: React.FC = () => {
	const [currentDialog, setCurrentDialog] = React.useState<Dialogs>();
	const clearCurrentDialog = setCurrentDialog.bind(undefined, undefined);

	return (
		<>
			<header></header>
			<div className="content-wrapper">
				<aside>
					<Clock />
					<p>hier kommt mal das Wetter hin</p>
					<h2>Meldungen</h2>
					<p>hier gibts noch nichts zu sehen!</p>
					<Navigation onSelectDialog={setCurrentDialog} />
				</aside>
				<main>
					{currentDialog === "light" ? (
						<LightDialog onClose={clearCurrentDialog} />
					) : undefined}
				</main>
			</div>
			<footer></footer>
		</>
	);
};

ReactDOM.render(<Root />, document.getElementById("app"));
