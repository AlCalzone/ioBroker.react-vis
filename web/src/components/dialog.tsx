import * as React from "react";
import { X } from "./icons";

export interface DialogProps {
	title: string;
	onClose?: () => void;
}

export const Dialog: React.FC<DialogProps> = (props) => {
	return (
		<div className="dialog">
			<div className="dialog-title">
				<span className="title">{props.title}</span>
				<button
					className="close-button"
					onClick={() => props.onClose?.()}
				>
					<X size={24} strokeWidth={2} />
				</button>
			</div>
			<div className="dialog-content">{props.children}</div>
		</div>
	);
};
