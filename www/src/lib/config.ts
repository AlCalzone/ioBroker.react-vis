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

export type Widget = Widgets.Button | Widgets.ButtonList;

export namespace Widgets {
	export interface Button {
		widgetType: "button";
		label: string;
		icon: Icon;
		id: string;
		writeId?: string;
	}

	export interface ButtonList {
		widgetType: "button-list";
		buttons: Button[];
	}
}
