import * as React from "react";
import { Widget } from "../lib/config";
import button from "./button";
import itemList from "./item-list";
import slider from "./slider";
import toggleButton from "./toggle-button";

const index = {
	button: button,
	"toggle-button": toggleButton,
	"item-list": itemList,
	slider: slider,
};

export default index;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function renderWidget(widget: Widget, key?: any) {
	const { widgetType, ...widgetProps } = widget;
	const Widget = index[widgetType];
	// @ts-expect-error
	return <Widget key={key} {...widgetProps} />;
}
