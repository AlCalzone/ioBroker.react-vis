import * as React from "react";
import { IconButton } from "./iconButton";
import { Adjustments, Vacuum } from "./icons";

export const Navigation: React.FC = () => {
	return (
		<>
			<h2>Navigation</h2>
			<nav>
				<IconButton
					label="Licht &amp; Rollos"
					icon={<Adjustments size={40} />}
				/>
				<IconButton label="Staubsauger" icon={<Vacuum size={40} />} />
			</nav>
		</>
	);
};
