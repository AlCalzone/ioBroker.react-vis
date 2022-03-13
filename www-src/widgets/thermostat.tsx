import { useIoBrokerObject, useIoBrokerState } from "iobroker-react/hooks";
import * as React from "react";
import { Thermostat as ThermostatComponent } from "../components/thermostat";
import type { Widgets as WidgetTypes } from "../lib/config";

export type ThermostatProps = Omit<WidgetTypes.Thermostat, "type">;

const Thermostat: React.FC<ThermostatProps> = (props) => {
	const [value, ack, setValue] = useIoBrokerState<number>({
		id: props.id,
	});
	const [object] = useIoBrokerObject(props.id, { subscribe: false });

	if (value !== undefined && object != undefined) {
		return (
			<ThermostatComponent
				label={props.label}
				value={value ?? 0}
				onValueChanged={setValue}
				min={props.min ?? object.common.min}
				max={props.max ?? object.common.max}
				unit={props.unit ?? object.common.unit}
				step={props.step}
			/>
		);
	} else {
		return <></>;
	}
};
export default Thermostat;
