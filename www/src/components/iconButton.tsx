import * as React from "react";

export interface IconButtonProps {
	icon: React.ReactNode;
	label: string;
	onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
	variant?: "inactive" | "active" | "error";
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
	return (
		<button
			className={`icon-button ${props.variant ?? ""}`}
			onClick={props.onClick}
		>
			<div className="child">
				<span className="icon">{props.icon}</span>
				<span className="label">{props.label}</span>
			</div>
		</button>
	);
};
