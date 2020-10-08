import * as React from "react";
import { IconButton } from "../components/iconButton";
import * as icons from "../components/icons";
import type { Widgets as WidgetTypes } from "../lib/config";
import { useIoBrokerState } from "../lib/useIoBrokerState";

export type ButtonProps = Omit<WidgetTypes.Button, "type">;

const Button: React.FC<ButtonProps> = (props) => {
	const [, setValue] = useIoBrokerState({
		id: props.id,
		subscribe: false,
	});
	const Icon = icons[props.icon];
	return (
		<IconButton
			label={props.label}
			icon={<Icon size={40} />}
			onClick={() => setValue(props.value ?? true)}
			variant={props.variant}
		/>
	);
};
export default Button;
