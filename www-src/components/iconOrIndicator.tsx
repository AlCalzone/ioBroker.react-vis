import * as React from "react";
import type { IconProps } from "./icons";
import * as icons from "./icons";

export interface IconOrIndicatorProps extends IconProps {
	icon: Exclude<keyof typeof icons, "Loader">;
	working?: boolean;
}

export const IconOrIndicator: React.FC<IconOrIndicatorProps> = ({ icon, working = false, ...props }) => {
	const Icon = React.useMemo(() => icons[icon], [icon]);
	return working ? <icons.Loader {...props} /> : <Icon {...props} />;
};
