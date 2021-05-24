import * as React from "react";
import { WeatherDay as WeatherDayConfig, WeatherNow as WeatherNowConfig } from "../lib/config";
import { useIoBrokerState } from "../lib/useIoBrokerState";

export interface WeatherNowProps extends WeatherNowConfig {
	// label: string;
}

export const WeatherNow: React.FC<WeatherNowProps> = ({ iconId, iconTooltipId, temperatureId, label, ..._props }) => {
	const [iconURL] = useIoBrokerState<string>({ id: iconId });
	const [tooltip] = useIoBrokerState<string>({ id: iconTooltipId });
	const [temperature] = useIoBrokerState<number>({ id: temperatureId });

	const baseUrl = location.href.includes("localhost:") ? "http://localhost:9999" : "";

	return (
		<div className={`weather-now`}>
			<b>{label}</b>
			<img src={`${baseUrl}${iconURL}`} title={tooltip} />
			<div className="temperature">{temperature} °C</div>
		</div>
	);
};

export interface WeatherDayProps extends WeatherDayConfig {
	// label: string;
}

export const WeatherDay: React.FC<WeatherDayProps> = ({
	iconId,
	iconTooltipId,
	label,
	tempRangeIds,
	humidityId,
	..._props
}) => {
	const [iconURL] = useIoBrokerState<string>({ id: iconId });
	const [tooltip] = useIoBrokerState<string>({ id: iconTooltipId });
	const [tempMin] = useIoBrokerState<number>({ id: tempRangeIds[0] });
	const [tempMax] = useIoBrokerState<number>({ id: tempRangeIds[1] });
	const [humidity] = useIoBrokerState<number>({ id: humidityId });

	const baseUrl = location.href.includes("localhost:") ? "http://localhost:9999" : "";

	return (
		<div className={`weather-day`}>
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
	now: WeatherNowConfig;
	days: WeatherDayConfig[];
}

export const Weather: React.FC<WeatherProps> = ({ now, days, ..._props }) => {
	return (
		<>
			{/* <div className="weather now">
			</div> */}
			<div className="weather">
				<WeatherNow {...now} />
				{days.map((d, i) => (
					<WeatherDay {...d} key={`weather-day-${i}`} />
				))}
			</div>
		</>
	);
};
