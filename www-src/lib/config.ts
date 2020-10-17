import { IconButtonProps } from "../components/iconButton";

/* eslint-disable @typescript-eslint/no-namespace */
export type Icon = keyof typeof import("../components/icons");

export interface Config {
	pages: Page[];
}

export interface Page {
	label: string;
	icon: Icon;
	sections: Section[];
}

export interface Section {
	label: string;
	widgets: Widget[];
}

export type Widget =
	| Widgets.If
	| Widgets.ToggleButton
	| Widgets.ItemList
	| Widgets.Slider
	| Widgets.Button
	| Widgets.RadioButton
	| Widgets.Thermostat;

export namespace Widgets {
	export interface ToggleButton {
		widgetType: "toggle-button";
		label: string;
		icon:
			| Icon
			| {
					true: Icon;
					false: Icon;
			  };
		id: string;
		writeId?: string;
	}

	export interface RadioButton {
		widgetType: "radio-button";
		label: string;
		icon:
			| Icon
			| {
					true: Icon;
					false: Icon;
			  };
		id: string;
		writeId?: string;
		value?: any;
		onValue?: any;
	}

	export interface Button {
		widgetType: "button";
		label: string;
		icon: Icon;
		id: string;
		value?: any;
		variant?: IconButtonProps["variant"];
	}

	export interface ItemList {
		widgetType: "item-list";
		className?: string;
		items: Widget[];
	}

	export interface Slider {
		widgetType: "slider";
		label: string;
		id: string;
		writeId?: string;
	}

	export interface Thermostat {
		widgetType: "thermostat";
		label: string;
		id: string;
		unit?: string;
		min?: number;
		max?: number;
		step?: number;
	}

	export interface If {
		widgetType: "if";
		id: string;
		value?: any;
		child: Widget;
	}
}
