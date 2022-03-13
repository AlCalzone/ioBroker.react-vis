import { useIoBrokerObject, useIoBrokerState } from "iobroker-react/hooks";
import * as React from "react";
import { IconButton } from "../components/iconButton";
import { IconOrIndicator } from "../components/iconOrIndicator";
import type { Widgets as WidgetTypes } from "../lib/config";

export type RadioButtonProps = Omit<WidgetTypes.RadioButton, "type">;

const RadioButton: React.FC<RadioButtonProps> = (props) => {
	const [value, ack, setValue] = useIoBrokerState<number | boolean>({
		id: props.id,
		writeId: props.writeId,
	});
	const [object] = useIoBrokerObject(props.id, { subscribe: false });

	if (value != undefined && object != undefined) {
		const currentIcon = typeof props.icon === "string" ? props.icon : !!value ? props.icon.true : props.icon.false;
		let isOn: boolean;
		const onValue = props.onValue ?? props.value;

		switch (object.common.type) {
			case "number": {
				if (onValue != undefined) {
					isOn = value === onValue;
				} else {
					isOn = value > object.common.min ?? 0;
				}
				break;
			}
			case "boolean":
			default:
				if (onValue != undefined) {
					isOn = value === onValue;
				} else {
					isOn = !!value;
				}
		}

		return (
			<IconButton
				label={props.label}
				icon={<IconOrIndicator icon={currentIcon} working={!ack} size={40} />}
				variant={isOn ? "active" : undefined}
				onClick={() => setValue(props.value ?? true)}
			/>
		);
	} else {
		return <></>;
	}
};
export default RadioButton;
