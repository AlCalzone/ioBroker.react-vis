import * as React from "react";
import { Dialog } from "../components/dialog";
import { IconButton } from "../components/iconButton";
import { Adjustments, Vacuum } from "../components/icons";

export interface LightDialogProps {
	onClose?: () => void;
}

export const LightDialog: React.FC<LightDialogProps> = (props) => {
	return (
		<Dialog title="Licht &amp; Rollos" onClose={props.onClose}>
			<h2>Lichter</h2>
			<div className="icon-button-list">
				<IconButton
					label="Licht &amp; Rollos"
					icon={<Adjustments size={40} />}
				/>
				<IconButton
					label="Staubsauger"
					icon={<Vacuum size={40} />}
					variant="active"
				/>
				<IconButton
					label="Licht &amp; Rollos"
					icon={<Adjustments size={40} />}
				/>
				<IconButton
					label="Staubsauger"
					icon={<Vacuum size={40} />}
					variant="active"
				/>
				<IconButton
					label="Licht &amp; Rollos"
					icon={<Adjustments size={40} />}
				/>
				<IconButton
					label="Staubsauger"
					icon={<Vacuum size={40} />}
					variant="active"
				/>
				<IconButton
					label="Licht &amp; Rollos"
					icon={<Adjustments size={40} />}
				/>
				<IconButton
					label="Staubsauger"
					icon={<Vacuum size={40} />}
					variant="active"
				/>
				<IconButton
					label="Licht &amp; Rollos"
					icon={<Adjustments size={40} />}
				/>
				<IconButton
					label="Staubsauger"
					icon={<Vacuum size={40} />}
					variant="active"
				/>
			</div>
			<h2>Rollos</h2>
			<ul>
				<li>tüdelü</li>
				<li>tütü</li>
				<li>bla</li>
			</ul>
		</Dialog>
	);
};
