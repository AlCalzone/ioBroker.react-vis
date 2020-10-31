import * as React from "react";
import { IconButton } from "../components/iconButton";
import { IconOrIndicator } from "../components/iconOrIndicator";
import type { Widgets as WidgetTypes } from "../lib/config";
import { useIoBrokerObject } from "../lib/useIoBrokerObject";
import { useIoBrokerState } from "../lib/useIoBrokerState";

export type ToggleButtonProps = Omit<WidgetTypes.ToggleButton, "type">;

const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
	const [value, ack, setValue] = useIoBrokerState<number | boolean>({
		id: props.id,
		writeId: props.writeId,
	});
	const [object] = useIoBrokerObject({ id: props.id, subscribe: false });

	if (value != undefined && object != undefined) {
		const currentIcon = typeof props.icon === "string" ? props.icon : !!value ? props.icon.true : props.icon.false;
		let isOn: boolean;
		let toggleValue: number | boolean;

		switch (object.common.type) {
			case "number":
				isOn = value > object.common.min ?? 0;
				toggleValue = isOn ? object.common.min ?? 0 : object.common.max ?? 100;
				break;
			case "boolean":
			default:
				isOn = !!value;
				toggleValue = !value;
		}

		return (
			<IconButton
				label={props.label}
				icon={<IconOrIndicator icon={currentIcon} working={!ack} size={40} />}
				variant={isOn ? "active" : undefined}
				onClick={() => setValue(toggleValue)}
			/>
		);
	} else {
		return <></>;
	}
};
export default ToggleButton;
