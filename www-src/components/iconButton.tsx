import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactNode;
	label: string;
	variant?: "inactive" | "active" | "error";
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, label, variant, ...props }) => {
	return (
		<button className={`icon-button ${variant ?? ""}`} {...props}>
			<div className="aspect-ratio-hack">
				<div className="child">
					<span className="icon">{icon}</span>
					<span className="label">{label}</span>
				</div>
			</div>
		</button>
	);
};
