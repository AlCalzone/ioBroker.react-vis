import { useIoBrokerState } from "iobroker-react/hooks";
import * as React from "react";
import { IconButton } from "../components/iconButton";
import { IconOrIndicator } from "../components/iconOrIndicator";
import type { Widgets as WidgetTypes } from "../lib/config";

export type ButtonProps = Omit<WidgetTypes.Button, "type">;

const Button: React.FC<ButtonProps> = (props) => {
	const [, ack, setValue] = useIoBrokerState({
		id: props.id,
		subscribe: true,
	});
	return (
		<IconButton
			label={props.label}
			icon={<IconOrIndicator icon={props.icon} working={!ack} size={40} />}
			onClick={() => setValue(props.value ?? true)}
			variant={props.variant}
		/>
	);
};
export default Button;
