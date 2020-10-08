import { Config } from "./lib/config";

const config: Config = {
	pages: [
		{
			label: "Licht & Rollos",
			icon: "Adjustments",
			sections: [
				{
					label: "Lichter",
					widgets: [
						{
							widgetType: "button",
							label: "Steckdose",
							icon: "ChevronUp",
							id: "zwave2.0.Node_017.Binary_Switch.currentValue",
							writeId: "zwave2.0.Node_017.Binary_Switch.targetValue",
						},
					],
				},
			],
		},
	],
};

export default config;
