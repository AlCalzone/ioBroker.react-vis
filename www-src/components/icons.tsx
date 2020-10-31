import * as React from "react";
// Copy icons from https://tablericons.com/

export interface IconProps {
	size: number;
	strokeWidth?: number;
}

const defaultStrokeWidth = 1;

export const Adjustments: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx="6" cy="10" r="2" />
			<line x1="6" y1="4" x2="6" y2="8" />
			<line x1="6" y1="12" x2="6" y2="20" />
			<circle cx="12" cy="16" r="2" />
			<line x1="12" y1="4" x2="12" y2="14" />
			<line x1="12" y1="18" x2="12" y2="20" />
			<circle cx="18" cy="7" r="2" />
			<line x1="18" y1="4" x2="18" y2="5" />
			<line x1="18" y1="9" x2="18" y2="20" />
		</svg>
	);
};

export const Vacuum: React.FC<IconProps> = (props) => {
	const { size } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" fill="currentColor">
			<path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm176 192c0 97.05-78.95 176-176 176S80 353.05 80 256a174.86 174.86 0 0123.71-88.06c.1 0 .19.06.29.06h104.72a47.94 47.94 0 0094.56 0h105.04A174.85 174.85 0 01432 256zm-208-96a32 32 0 1132 32 32.03 32.03 0 01-32-32zm79.28-8a47.94 47.94 0 00-94.56 0h-94.59a175.77 175.77 0 01283.74 0z" />
			<path d="M482.53 95.59a8 8 0 10-5.06-15.18L433.8 94.97a242.04 242.04 0 00-15.25-15.34L446.25 45a8 8 0 10-12.5-10l-27.34 34.17a239.32 239.32 0 00-300.82 0L78.25 35a8 8 0 00-12.5 10l27.7 34.63c-5.3 4.89-10.4 10-15.25 15.34L34.53 80.41a8 8 0 00-5.06 15.18l37.69 12.56A238.74 238.74 0 0016 256c0 132.34 107.66 240 240 240s240-107.66 240-240a238.74 238.74 0 00-51.16-147.85zM480 256c0 123.52-100.48 224-224 224S32 379.52 32 256 132.48 32 256 32s224 100.48 224 224z" />
			<path d="M256 336a24.03 24.03 0 00-24 24v32a24 24 0 0048 0v-32a24.03 24.03 0 00-24-24zm8 56a8 8 0 01-16 0v-8h16zm0-24h-16v-8a8 8 0 0116 0z" />
			<circle cx="256" cy="232" r="8" />
			<circle cx="288" cy="232" r="8" />
			<circle cx="224" cy="232" r="8" />
		</svg>
	);
};

export const X: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
		</svg>
	);
};

export const ChevronUp: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<polyline points="6 15 12 9 18 15" />
		</svg>
	);
};

export const ChevronDown: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<polyline points="6 9 12 15 18 9" />
		</svg>
	);
};

export const BulbOff: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
			<line x1="9.7" y1="17" x2="14.3" y2="17" />
		</svg>
	);
};

export const BulbOn: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
			<path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
			<line x1="9.7" y1="17" x2="14.3" y2="17" />
		</svg>
	);
};

export const Directions: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M9 5h10l2 2l-2 2h-10a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
			<path d="M13 13h-7l-2 2l2 2h7a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1" />
			<line x1="12" y1="22" x2="12" y2="17" />
			<line x1="12" y1="13" x2="12" y2="9" />
			<line x1="12" y1="5" x2="12" y2="3" />
		</svg>
	);
};

export const GasStation: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M13 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" />
			<line x1="4" y1="19" x2="14" y2="19" />
			<line x1="5" y1="11" x2="13" y2="11" />
			<path d="M5 19v-12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v12" />
			<path d="M17 7v1a1 1 0 0 0 1 1h1" />
		</svg>
	);
};

export const Play: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M7 4v16l13 -8z" />
		</svg>
	);
};

export const Pause: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<rect x="6" y="5" width="4" height="14" rx="1" />
			<rect x="14" y="5" width="4" height="14" rx="1" />
		</svg>
	);
};

export const Stop: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<rect x="5" y="5" width="14" height="14" rx="2" />
		</svg>
	);
};

export const Trash: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line x1="4" y1="7" x2="20" y2="7" />
			<line x1="10" y1="11" x2="10" y2="17" />
			<line x1="14" y1="11" x2="14" y2="17" />
			<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
			<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
		</svg>
	);
};

export const Kitchen: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 3h8l-1 9h-6z" />
			<path d="M7 18h2v3h-2z" />
			<path d="M20 3v12h-5c-.023-3.681.184-7.406 5-12z" />
			<path d="M20 15v6h-1v-3" />
			<line x1="8" y1="12" x2="8" y2="18" />
		</svg>
	);
};

export const Bed: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />
			<circle cx="7" cy="10" r="1" />
		</svg>
	);
};

export const TV: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<rect x="3" y="7" width="18" height="13" rx="2" />
			<polyline points="16 3 12 7 8 3" />
		</svg>
	);
};

export const Temperature: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
			<line x1="10" y1="9" x2="14" y2="9" />
		</svg>
	);
};

export const TemperaturePlus: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
			<line x1="8" y1="9" x2="12" y2="9" />
			<line x1="16" y1="9" x2="22" y2="9" />
			<line x1="19" y1="6" x2="19" y2="12" />
		</svg>
	);
};

export const TemperatureMinus: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
			<line x1="8" y1="9" x2="12" y2="9" />
			<line x1="16" y1="9" x2="22" y2="9" />
		</svg>
	);
};

export const Briefcase: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<rect x="3" y="7" width="18" height="13" rx="2" />
			<path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
			<line x1="12" y1="12" x2="12" y2="12.01" />
			<path d="M3 13a20 20 0 0 0 18 0" />
		</svg>
	);
};

export const Mug: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M5 6h10a1 1 0 0 1 1 1v8a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4v-8a1 1 0 0 1 1 -1" />
			<path d="M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2" />
		</svg>
	);
};

export const Snowflake: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />
			<path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(60 12 12)" />
			<path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(120 12 12)" />
			<path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(180 12 12)" />
			<path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(240 12 12)" />
			<path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(300 12 12)" />
		</svg>
	);
};

export const Clock: React.FC<IconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx="12" cy="12" r="9" />
			<polyline points="12 7 12 12 15 15" />
		</svg>
	);
};

export interface LoaderIconProps extends IconProps {
	/** How many milliseconds a complete animation should take */
	duration?: number;
}

export const Loader: React.FC<LoaderIconProps> = (props) => {
	const { size, strokeWidth = defaultStrokeWidth, duration = 1000 } = props;

	const [step, setStep] = React.useState(0);
	const numSteps = 16;
	React.useEffect(() => {
		const animationInterval = setInterval(() => {
			setStep((step) => (step + 1) % numSteps);
		}, duration / numSteps);
		return () => clearInterval(animationInterval);
	}, []);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="loader-icon"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line opacity={step >= 0 && step <= 8 ? 1 : 0} x1="12" y1="6" x2="12" y2="3" />
			<line opacity={step >= 1 && step <= 9 ? 1 : 0} x1="16.25" y1="7.75" x2="18.4" y2="5.6" />
			<line opacity={step >= 2 && step <= 10 ? 1 : 0} x1="18" y1="12" x2="21" y2="12" />
			<line opacity={step >= 3 && step <= 11 ? 1 : 0} x1="16.25" y1="16.25" x2="18.4" y2="18.4" />
			<line opacity={step >= 4 && step <= 12 ? 1 : 0} x1="12" y1="18" x2="12" y2="21" />
			<line opacity={step >= 5 && step <= 13 ? 1 : 0} x1="7.75" y1="16.25" x2="5.6" y2="18.4" />
			<line opacity={step >= 6 && step <= 14 ? 1 : 0} x1="6" y1="12" x2="3" y2="12" />
			<line opacity={step >= 7 && step <= 15 ? 1 : 0} x1="7.75" y1="7.75" x2="5.6" y2="5.6" />
		</svg>
	);
};
