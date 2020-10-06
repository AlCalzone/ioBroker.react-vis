import * as React from "react";

export interface IconButtonProps {
	icon: React.ReactNode;
	label: string;
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
	return (
		<button className="icon-button">
			<div className="child">
				<span className="icon">{props.icon}</span>
				<span className="label">{props.label}</span>
			</div>
		</button>
	);
};
