import * as React from "react";
import type { Widgets as WidgetTypes } from "../lib/config";
import Button from "./button";

export type ButtonListProps = Omit<WidgetTypes.ButtonList, "type">;

const ButtonList: React.FC<ButtonListProps> = (props) => {
	return (
		<div className="icon-button-list">
			{props.buttons.map((button) => (
				<Button {...button} />
			))}
		</div>
	);
};
export default ButtonList;
