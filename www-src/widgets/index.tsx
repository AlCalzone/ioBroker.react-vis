import * as React from "react";
import type { Widget } from "../lib/config";
import button from "./button";
import _if from "./if";
import image from "./image";
import itemList from "./item-list";
import radioButton from "./radio-button";
import slider from "./slider";
import thermostat from "./thermostat";
import toggleButton from "./toggle-button";

const index = {
	button: button,
	"toggle-button": toggleButton,
	"radio-button": radioButton,
	"item-list": itemList,
	slider: slider,
	thermostat: thermostat,
	if: _if,
	image: image,
};

export default index;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function renderWidget(widget: Widget, key?: any) {
	const { widgetType, ...widgetProps } = widget;
	const Widget = index[widgetType];
	const randomKey = [...crypto.getRandomValues(new Uint8Array(8))].map((i) => i.toString(16)).join("");
	// @ts-expect-error
	return <Widget key={`${randomKey}-${key}`} {...widgetProps} />;
}
