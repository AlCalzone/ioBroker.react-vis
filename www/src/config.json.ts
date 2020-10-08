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
							widgetType: "item-list",
							className: "button-list",
							items: [
								{
									widgetType: "toggle-button",
									label: "Küche",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "zwave2.0.Node_005.Binary_Switch.currentValue_001",
									writeId: "zwave2.0.Node_005.Binary_Switch.targetValue_001",
								},
								{
									widgetType: "toggle-button",
									label: "Bad",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "zwave2.0.Node_007.Binary_Switch.currentValue_001",
									writeId: "zwave2.0.Node_007.Binary_Switch.targetValue_001",
								},
								{
									widgetType: "toggle-button",
									label: "Schlaf\u00ADzimmer",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "zwave2.0.Node_006.Binary_Switch.currentValue_001",
									writeId: "zwave2.0.Node_006.Binary_Switch.targetValue_001",
								},
								{
									widgetType: "toggle-button",
									label: "Flur",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "javascript.0.Licht.Flur.state",
								},
								{
									widgetType: "toggle-button",
									label: "Abstell\u00ADkammer",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "zwave2.0.Node_008.Binary_Switch.currentValue_001",
									writeId: "zwave2.0.Node_008.Binary_Switch.targetValue_001",
								},
								{
									widgetType: "toggle-button",
									label: "Schreibtisch Caro",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "zwave2.0.Node_004.Multilevel_Switch.currentValue_001",
									writeId: "zwave2.0.Node_004.Multilevel_Switch.targetValue_001",
								},
								{
									widgetType: "toggle-button",
									label: "Schreibtisch Domi",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "zwave2.0.Node_002.Multilevel_Switch.currentValue_001",
									writeId: "zwave2.0.Node_002.Multilevel_Switch.targetValue_001",
								},
								{
									widgetType: "toggle-button",
									label: "Technikregal",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "tradfri.0.L-65541.lightbulb.state",
								},
								{
									widgetType: "toggle-button",
									label: "Strahler Couch",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "tradfri.0.L-65537.lightbulb.state",
								},
								{
									widgetType: "toggle-button",
									label: "Strahler Schreibtisch",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "tradfri.0.L-65538.lightbulb.state",
								},
								{
									widgetType: "toggle-button",
									label: "Fernsehregal",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "tradfri.0.L-65539.lightbulb.state",
								},
							],
						},
					],
				},
				{
					label: "Dimmer",
					widgets: [
						{
							widgetType: "item-list",
							items: [
								{
									widgetType: "slider",
									label: "Schreib\u00ADtisch Caro",
									id: "zwave2.0.Node_004.Multilevel_Switch.currentValue_001",
									writeId: "zwave2.0.Node_004.Multilevel_Switch.targetValue_001",
								},
								{
									widgetType: "slider",
									label: "Schreib\u00ADtisch Domi",
									id: "zwave2.0.Node_002.Multilevel_Switch.currentValue_001",
									writeId: "zwave2.0.Node_002.Multilevel_Switch.targetValue_001",
								},
								{
									widgetType: "slider",
									label: "Strahler Couch",
									id: "tradfri.0.L-65537.lightbulb.brightness",
								},
								{
									widgetType: "slider",
									label: "Strahler Schreib\u00ADtisch",
									id: "tradfri.0.L-65538.lightbulb.brightness",
								},
								{
									widgetType: "slider",
									label: "Fernsehregal",
									id: "tradfri.0.L-65539.lightbulb.brightness",
								},
							],
						},
					],
				},
				{
					label: "Rollos",
					widgets: [
						{
							widgetType: "item-list",
							items: [
								{
									widgetType: "slider",
									label: "Schlafzimmer",
									id: "zwave2.0.Node_014.Multilevel_Switch.currentValue",
									writeId: "zwave2.0.Node_014.Multilevel_Switch.targetValue",
								},
								{
									widgetType: "slider",
									label: "Balkon",
									id: "zwave2.0.Node_011.Multilevel_Switch.currentValue",
									writeId: "zwave2.0.Node_011.Multilevel_Switch.targetValue",
								},
								{
									widgetType: "slider",
									label: "Wohnzimmer links",
									id: "zwave2.0.Node_012.Multilevel_Switch.currentValue",
									writeId: "zwave2.0.Node_012.Multilevel_Switch.targetValue",
								},
								{
									widgetType: "slider",
									label: "Wohnzimmer rechts",
									id: "zwave2.0.Node_013.Multilevel_Switch.currentValue",
									writeId: "zwave2.0.Node_013.Multilevel_Switch.targetValue",
								},
							],
						},
					],
				},
			],
		},
	],
};

export default config;
