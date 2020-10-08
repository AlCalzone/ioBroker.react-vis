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
