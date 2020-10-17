import * as React from "react";
import { renderWidget } from ".";
import type { Widgets as WidgetTypes } from "../lib/config";
import { useIoBrokerObject } from "../lib/useIoBrokerObject";
import { useIoBrokerState } from "../lib/useIoBrokerState";

export type IfProps = Omit<WidgetTypes.If, "type">;

const If: React.FC<IfProps> = (props) => {
	const [value] = useIoBrokerState({
		id: props.id,
	});
	const [object] = useIoBrokerObject({ id: props.id, subscribe: false });

	if (value != undefined && object != undefined) {
		let visible: boolean;

		if (props.value != undefined) {
			visible = value === props.value;
		} else {
			switch (object.common.type) {
				case "number": {
					visible = value > object.common.min ?? 0;
					break;
				}
				case "boolean":
				default:
					visible = !!value;
			}
		}

		if (visible) {
			return renderWidget(props.child);
		}
	}
	return <></>;
};
export default If;
