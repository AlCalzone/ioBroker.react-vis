import { clamp } from "alcalzone-shared/math";
import * as React from "react";
import useDebounce from "../lib/useDebounce";
import { ChevronDown, ChevronUp } from "./icons";

export interface ThermostatProps {
	label: string;
	value: number;
	min: number;
	max: number;
	unit?: string;
	step?: number;
	onValueChanged(newValue: number): void;
}

export const Thermostat: React.FC<ThermostatProps> = (props) => {
	const { min, max, step = 1, unit = "°C" } = props;

	const [value, setValue] = React.useState(props.value);
	React.useEffect(() => {
		setValue(props.value);
	}, [props.value]);

	// Update the actual value when the value is changed, but not too often
	const debouncedValue = useDebounce(value, 500);
	React.useEffect(() => {
		if (debouncedValue !== props.value) {
			props.onValueChanged(debouncedValue);
		}
	}, [debouncedValue]);

	const increment = () => setValue((value) => clamp(value + step, min, max));
	const decrement = () => setValue((value) => clamp(value - step, min, max));

	return (
		<div className="Thermostat">
			<div className="child">
				<button className="up" onClick={increment}>
					<ChevronUp size={24} />
				</button>
				<div className="temperature">
					{value}&nbsp;{unit}
				</div>
				<label>{props.label}</label>
				<button className="down" onClick={decrement}>
					<ChevronDown size={24} />
				</button>
			</div>
		</div>
	);
};
