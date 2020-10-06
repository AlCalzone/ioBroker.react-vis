import * as React from "react";
import { Dialog } from "../components/dialog";

export interface LightDialogProps {
	onClose?: () => void;
}

export const LightDialog: React.FC<LightDialogProps> = (props) => {
	return (
		<Dialog title="Licht &amp; Rollos" onClose={props.onClose}>
			<ul>
				<li>tüdelü</li>
				<li>tütü</li>
				<li>bla</li>
			</ul>
		</Dialog>
	);
};
