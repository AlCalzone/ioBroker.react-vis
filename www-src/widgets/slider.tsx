import { useIoBrokerObject, useIoBrokerState } from "iobroker-react/hooks";
import * as React from "react";
import { Slider as SliderComponent } from "../components/slider";
import type { Widgets as WidgetTypes } from "../lib/config";

export type SliderProps = Omit<WidgetTypes.Slider, "type">;

const Slider: React.FC<SliderProps> = (props) => {
	const [value, ack, setValue] = useIoBrokerState<number>({
		id: props.id,
		writeId: props.writeId,
	});
	const [object] = useIoBrokerObject(props.id, { subscribe: false });

	if (value !== undefined && object != undefined) {
		return (
			<SliderComponent
				label={props.label}
				value={value ?? 0}
				onValueChanged={setValue}
				min={object.common.min}
				max={object.common.max}
			/>
		);
	} else {
		return <></>;
	}
};
export default Slider;
