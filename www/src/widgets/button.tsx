import * as React from "react";
import { IconButton } from "../components/iconButton";
import * as icons from "../components/icons";
import type { Widgets as WidgetTypes } from "../lib/config";
import { useIoBrokerState } from "../lib/useIoBrokerState";

export type ButtonProps = Omit<WidgetTypes.Button, "type">;

const Button: React.FC<ButtonProps> = (props) => {
	const Icon = icons[props.icon];
	const [value, setValue] = useIoBrokerState({
		id: props.id,
		writeId: props.writeId,
	});
	return (
		<IconButton
			label={props.label}
			icon={<Icon size={40} />}
			variant={value ? "active" : undefined}
			onClick={() => setValue(!value)}
		/>
	);
};
export default Button;
