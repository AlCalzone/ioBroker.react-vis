import * as React from "react";
import { WeatherDay as WeatherConfig } from "../lib/config";
import { useIoBrokerState } from "../lib/useIoBrokerState";

export interface WeatherDayProps extends WeatherConfig {
	// label: string;
}

export const WeatherDay: React.FC<WeatherDayProps> = ({
	iconId,
	iconTooltipId,
	label,
	temperatureIds,
	humidityId,
	..._props
}) => {
	const [iconURL] = useIoBrokerState<string>({ id: iconId });
	const [tooltip] = useIoBrokerState<string>({ id: iconTooltipId });
	const [tempMin] = useIoBrokerState<string>({ id: temperatureIds[0] });
	const [tempMax] = useIoBrokerState<string>({ id: temperatureIds[1] });
	const [humidity] = useIoBrokerState<string>({ id: humidityId });

	const baseUrl = location.href.includes("localhost:") ? "http://localhost:9999" : "";

	return (
		<div className="weather-day">
			<b>{label}</b>
			<img src={`${baseUrl}${iconURL}`} title={tooltip} />
			<div>
				{tempMin}&ndash;{tempMax} °C
				<br />
				{humidity} %rF
			</div>
		</div>
	);
};

export interface WeatherProps {
	days: WeatherConfig[];
}

export const Weather: React.FC<WeatherProps> = ({ days, ..._props }) => {
	return (
		<div className="weather">
			{days.map((d, i) => (
				<WeatherDay {...d} key={`weather-day-${i}`} />
			))}
		</div>
	);
};
