import format from "date-fns/format";
import de from "date-fns/locale/de";
import * as React from "react";

export const Clock: React.FC = () => {
	const [now, setNow] = React.useState(new Date());

	React.useEffect(() => {
		const refreshClock = setInterval(() => {
			setNow(new Date());
		}, 1000);
		return () => clearInterval(refreshClock);
	});

	return (
		<div
			className="clock"
			style={{
				// @ts-expect-error React does not like custom properties
				"--seconds": now.getSeconds(),
			}}
		>
			<span className="date">{format(now, "PPPP", { locale: de })}</span>
			<span className="time">{format(now, "p", { locale: de })}</span>
		</div>
	);
};
