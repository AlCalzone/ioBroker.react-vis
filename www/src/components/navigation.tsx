import * as React from "react";
import { Dialogs } from "..";
import { IconButton } from "./iconButton";
import { Adjustments, Vacuum } from "./icons";

export interface NavigationProps {
	onSelectDialog(dialog: Dialogs): void;
}

export const Navigation: React.FC<NavigationProps> = (props) => {
	return (
		<>
			<h2>Navigation</h2>
			<nav>
				<IconButton
					label="Licht &amp; Rollos"
					icon={<Adjustments size={40} />}
					onClick={() => props.onSelectDialog("light")}
				/>
				<IconButton
					label="Staubsauger"
					icon={<Vacuum size={40} />}
					onClick={() => props.onSelectDialog("vacuum")}
				/>
			</nav>
		</>
	);
};
