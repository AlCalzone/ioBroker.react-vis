import { useIoBrokerState } from "iobroker-react/hooks";
import * as React from "react";
import type { Widgets as WidgetTypes } from "../lib/config";

export type ImageProps = Omit<WidgetTypes.Image, "type">;

const Image: React.FC<ImageProps> = (props) => {
	const [src] = useIoBrokerState<string>({
		id: props.id,
	});

	if (src) {
		return <img src={src} />;
	} else {
		return <></>;
	}
};
export default Image;
