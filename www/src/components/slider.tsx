import { clamp } from "alcalzone-shared/math";
import * as React from "react";
import useGestures from "../lib/useGestures";
import { ChevronDown, ChevronUp } from "./icons";

export interface SliderProps {
	label: string;
	value: number;
	min?: number;
	max?: number;
	scale?: number;
	onValueChanged(newValue: number): void;
}

export const Slider: React.FC<SliderProps> = (props) => {
	const { scale = 3, min = 0, max = 100 } = props;

	const valueToPercentage = React.useCallback(
		(value: number) => {
			return Math.round(((value - min) / (max - min)) * 100);
		},
		[min, max],
	);
	const valueFromPercentage = React.useCallback(
		(percentage: number) => {
			return Math.round(min + (percentage / 100) * (max - min));
		},
		[min, max],
	);

	const [percentage, setPercentage] = React.useState(valueToPercentage(props.value));
	React.useEffect(() => {
		setPercentage(valueToPercentage(props.value));
	}, [props.value]);

	const [startY, setStartY] = React.useState<number>();
	const track = React.useRef<HTMLDivElement>(null);

	const computePercentage = React.useCallback(
		(y) => clamp(Math.round(valueToPercentage(props.value) + (startY! - y) / scale), 0, 100),
		[props.value, startY],
	);

	useGestures(track, {
		onPanStart: (e) => {
			setStartY(e.y);
		},
		onPanMove: (e) => {
			setPercentage(computePercentage(e.y));
		},
		onPanEnd: (e) => {
			const newPercentage = computePercentage(e.y);
			setPercentage(newPercentage);
			props.onValueChanged?.(valueFromPercentage(newPercentage));
		},
	});

	return (
		<div className="slider">
			<label>{props.label}</label>
			<button
				className="up"
				onClick={() => {
					setPercentage(100);
					props.onValueChanged?.(valueFromPercentage(100));
				}}
			>
				<ChevronUp size={24} />
			</button>
			<div
				className="track"
				ref={track}
				style={{
					// @ts-expect-error React does not like custom CSS props
					"--percentage": percentage,
				}}
			>
				{percentage} %
			</div>
			<button
				className="down"
				onClick={() => {
					setPercentage(0);
					props.onValueChanged?.(valueFromPercentage(0));
				}}
			>
				<ChevronDown size={24} />
			</button>
		</div>
	);
};
