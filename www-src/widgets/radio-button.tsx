import * as React from "react";
import { IconButton } from "../components/iconButton";
import * as icons from "../components/icons";
import type { Widgets as WidgetTypes } from "../lib/config";
import { useIoBrokerObject } from "../lib/useIoBrokerObject";
import { useIoBrokerState } from "../lib/useIoBrokerState";

export type RadioButtonProps = Omit<WidgetTypes.RadioButton, "type">;

const RadioButton: React.FC<RadioButtonProps> = (props) => {
	const [value, setValue] = useIoBrokerState<number | boolean>({
		id: props.id,
		writeId: props.writeId,
	});
	const [object] = useIoBrokerObject({ id: props.id, subscribe: false });

	if (value != undefined && object != undefined) {
		const currentIcon = typeof props.icon === "string" ? props.icon : !!value ? props.icon.true : props.icon.false;
		const Icon = icons[currentIcon];
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
				icon={<Icon size={40} />}
				variant={isOn ? "active" : undefined}
				onClick={() => setValue(props.value ?? true)}
			/>
		);
	} else {
		return <></>;
	}
};
export default RadioButton;
