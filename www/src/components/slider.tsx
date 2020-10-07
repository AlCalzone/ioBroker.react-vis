import * as React from "react";
import { ChevronDown, ChevronUp } from "./icons";
import { clamp } from "alcalzone-shared/math";
import useGestures from "../lib/useGestures";

export interface SliderProps {
	label: string;
	value: number;
	scale?: number;
	onUpClicked(): void;
	onDownClicked(): void;
	onValueChanged(value: number): void;
}

export const Slider: React.FC<SliderProps> = (props) => {
	const { scale = 3 } = props;

	const [value, setValue] = React.useState(props.value);
	const [startY, setStartY] = React.useState<number>();
	const track = React.useRef<HTMLDivElement>(null);

	const computeValue = React.useCallback(
		(y) => clamp(Math.round(props.value + (startY! - y) / scale), 0, 100),
		[startY],
	);

	useGestures(track, {
		onPanStart: (e) => {
			setStartY(e.y);
		},
		onPanMove: (e) => {
			setValue(computeValue(e.y));
		},
		onPanEnd: (e) => {
			const newValue = computeValue(e.y);
			setValue(newValue);
			props.onValueChanged?.(newValue);
		},
	});

	return (
		<div className="slider">
			<label>{props.label}</label>
			<button
				className="up"
				onClick={() => {
					setValue(100);
					props.onUpClicked();
				}}
			>
				<ChevronUp size={24} />
			</button>
			<div
				className="track"
				ref={track}
				style={{
					// @ts-expect-error React does not like custom CSS props
					"--percentage": value,
				}}
			>
				{value} %
			</div>
			<button
				className="down"
				onClick={() => {
					setValue(0);
					props.onDownClicked();
				}}
			>
				<ChevronDown size={24} />
			</button>
		</div>
	);
};
