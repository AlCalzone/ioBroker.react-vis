import type { Config } from "./lib/config";

const config: Config = {
	weather: {
		now: {
			label: "jetzt",
			iconId: "daswetter.0.NextHours.Location_1.Day_1.current.iconURL",
			iconTooltipId: "daswetter.0.NextHours.Location_1.Day_1.current.symbol_desc",
			temperatureId: "daswetter.0.NextHours.Location_1.Day_1.current.temp_value",
		},
		days: [
			{
				label: "heute",
				iconId: "daswetter.0.NextHours.Location_1.Day_1.iconURL",
				iconTooltipId: "daswetter.0.NextHours.Location_1.Day_1.symbol_desc",
				tempRangeIds: [
					"daswetter.0.NextHours.Location_1.Day_1.tempmin_value",
					"daswetter.0.NextHours.Location_1.Day_1.tempmax_value",
				],
				humidityId: "daswetter.0.NextHours.Location_1.Day_1.humidity_value",
			},
			{
				label: "morgen",
				iconId: "daswetter.0.NextDaysDetailed.Location_1.Day_2.iconURL",
				iconTooltipId: "daswetter.0.NextDaysDetailed.Location_1.Day_2.symbol_desc",
				tempRangeIds: [
					"daswetter.0.NextDaysDetailed.Location_1.Day_2.tempmin_value",
					"daswetter.0.NextDaysDetailed.Location_1.Day_2.tempmax_value",
				],
				humidityId: "daswetter.0.NextDaysDetailed.Location_1.Day_2.humidity_value",
			},
			// {
			// 	label: "überm.",
			// 	iconId: "daswetter.0.NextDaysDetailed.Location_1.Day_3.iconURL",
			// 	iconTooltipId: "daswetter.0.NextDaysDetailed.Location_1.Day_3.symbol_desc",
			// 	tempRangeIds: [
			// 		"daswetter.0.NextDaysDetailed.Location_1.Day_3.tempmin_value",
			// 		"daswetter.0.NextDaysDetailed.Location_1.Day_3.tempmax_value",
			// 	],
			// 	humidityId: "daswetter.0.NextDaysDetailed.Location_1.Day_3.humidity_value",
			// },
		],
	},
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
									widgetType: "button",
									label: "Alles aus",
									icon: "BulbOff",
									id: "javascript.0.Licht.allOff",
									variant: "error",
								},
								{
									widgetType: "toggle-button",
									label: "Küche",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "alias.0.Z-Wave.Küche",
								},
								{
									widgetType: "toggle-button",
									label: "Bad",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "alias.0.Z-Wave.Bad",
								},
								{
									widgetType: "toggle-button",
									label: "Schlaf\u00ADzimmer",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "alias.0.Z-Wave.Rollo_Schlafzimmer",
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
									id: "alias.0.Z-Wave.Abstellkammer",
								},
								{
									widgetType: "toggle-button",
									label: "Schreibtisch Caro",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "alias.0.Z-Wave.Schreibtisch_Caro",
								},
								{
									widgetType: "toggle-button",
									label: "Schreibtisch Domi",
									icon: { false: "BulbOff", true: "BulbOn" },
									id: "alias.0.Z-Wave.Schreibtisch_Domi",
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
									id: "tradfri.0.L-65542.lightbulb.state",
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
									id: "alias.0.Z-Wave.Schreibtisch_Caro",
								},
								{
									widgetType: "slider",
									label: "Schreib\u00ADtisch Domi",
									id: "alias.0.Z-Wave.Schreibtisch_Domi",
								},
								{
									widgetType: "slider",
									label: "Strahler Couch",
									id: "tradfri.0.L-65537.lightbulb.brightness",
								},
								{
									widgetType: "slider",
									label: "Strahler Schreib\u00ADtisch",
									id: "tradfri.0.L-65542.lightbulb.brightness",
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
									label: "Alle Rollos",
									id: "javascript.0.Rollo.setAll",
								},
								{
									widgetType: "slider",
									label: "Schlafzimmer",
									id: "alias.0.Z-Wave.Rollo_Schlafzimmer",
								},
								{
									widgetType: "slider",
									label: "Balkon",
									id: "alias.0.Z-Wave.Rollo_Balkon",
								},
								{
									widgetType: "slider",
									label: "Wohnzimmer links",
									id: "alias.0.Z-Wave.Rollo_Wohnzimmer_Links",
								},
								{
									widgetType: "slider",
									label: "Wohnzimmer rechts",
									id: "alias.0.Z-Wave.Rollo_Wohnzimmer_Rechts",
								},
							],
						},
					],
				},
			],
		},
		{
			label: "Staubsauger",
			icon: "Vacuum",
			sections: [
				{
					label: "Saugen",
					widgets: [
						{
							widgetType: "item-list",
							className: "button-list",
							items: [
								{
									widgetType: "radio-button",
									label: "Alles saugen",
									icon: "Play",
									writeId: "mihome-vacuum.0.control.start",
									id: "mihome-vacuum.0.control.clean_home",
								},
								{
									widgetType: "button",
									label: "Pause",
									icon: "Pause",
									id: "mihome-vacuum.0.control.pause",
								},
								{
									widgetType: "radio-button",
									label: "Zur Ladestation",
									icon: "Charger",
									id: "javascript.0.Staubsauger.stop",
								},
								{
									widgetType: "button",
									label: "Wo bin ich?",
									icon: "Directions",
									id: "mihome-vacuum.0.control.find",
								},
								{
									widgetType: "radio-button",
									label: "Zum Mülleimer",
									icon: "Trash",
									id: "javascript.0.Staubsauger.goto_Mülleimer",
								},
								{
									widgetType: "radio-button",
									label: "Vor's Bett",
									icon: "Bed",
									id: "javascript.0.Staubsauger.goto_Bett",
								},
							],
						},
					],
				},
				{
					label: "Einzelraumreinigung",
					widgets: [
						{
							widgetType: "item-list",
							className: "button-list",
							items: [
								{
									widgetType: "radio-button",
									label: "Küche",
									icon: "Kitchen",
									id: "javascript.0.Staubsauger.Küche",
								},
								{
									widgetType: "radio-button",
									label: "Bad",
									icon: "Play",
									id: "javascript.0.Staubsauger.Bad",
								},
								{
									widgetType: "radio-button",
									label: "Flur",
									icon: "Play",
									id: "javascript.0.Staubsauger.Flur",
								},
								{
									widgetType: "radio-button",
									label: "Schlafzimmer",
									icon: "Bed",
									id: "javascript.0.Staubsauger.Schlafzimmer",
								},
								{
									widgetType: "radio-button",
									label: "Wohnzimmer",
									icon: "TV",
									id: "javascript.0.Staubsauger.Wohnzimmer",
								},
							],
						},
					],
				},
				{
					label: "Karte",
					widgets: [
						{
							widgetType: "image",
							id: "mihome-vacuum.0.cleanmap.map64",
						},
					],
				},
				{
					label: "Feintuning",
					widgets: [
						{
							widgetType: "slider",
							label: "Leistung",
							id: "mihome-vacuum.0.control.fan_power",
						},
					],
				},
			],
		},
		{
			label: "Heizung",
			icon: "Temperature",
			sections: [
				{
					label: "Wohnzimmer",
					widgets: [
						{
							widgetType: "item-list",
							className: "button-list",
							items: [
								{
									widgetType: "radio-button",
									label: "Aus",
									icon: "Snowflake",
									id: "zwave2.0.Node_019.Thermostat_Mode.mode",
									value: 0,
								},
								{
									widgetType: "radio-button",
									label: "Manuell",
									icon: "Mug",
									id: "zwave2.0.Node_019.Thermostat_Mode.mode",
									value: 1,
								},
								{
									widgetType: "radio-button",
									label: "Automatisch",
									icon: "Clock",
									id: "zwave2.0.Node_019.Thermostat_Mode.mode",
									value: 11,
								},
								{
									widgetType: "radio-button",
									label: "Urlaubs-Modus",
									icon: "Briefcase",
									id: "zwave2.0.Node_019.Thermostat_Mode.mode",
									value: 13,
								},
								{
									widgetType: "if",
									id: "zwave2.0.Node_019.Thermostat_Mode.mode",
									value: 1,
									child: {
										widgetType: "thermostat",
										label: "Temperatur",
										id: "zwave2.0.Node_019.Thermostat_Setpoint.setpoint_heating",
										min: 15,
										max: 23,
										step: 0.5,
									},
								},
							],
						},
					],
				},
				{
					label: "Schlafzimmer",
					widgets: [
						{
							widgetType: "item-list",
							className: "button-list",
							items: [
								{
									widgetType: "radio-button",
									label: "Aus",
									icon: "Snowflake",
									id: "zwave2.0.Node_020.Thermostat_Mode.mode",
									value: 0,
								},
								{
									widgetType: "radio-button",
									label: "Manuell",
									icon: "Mug",
									id: "zwave2.0.Node_020.Thermostat_Mode.mode",
									value: 1,
								},
								{
									widgetType: "if",
									id: "zwave2.0.Node_020.Thermostat_Mode.mode",
									value: 1,
									child: {
										widgetType: "thermostat",
										label: "Temperatur",
										id: "zwave2.0.Node_020.Thermostat_Setpoint.setpoint_heating",
										min: 15,
										max: 20,
										step: 0.5,
									},
								},
							],
						},
					],
				},
			],
		},
		{
			label: "Szenen",
			icon: "Wand",
			sections: [
				{
					label: "Ausführen",
					widgets: [
						{
							widgetType: "item-list",
							className: "button-list",
							items: [
								{
									widgetType: "radio-button",
									label: "Guten Morgen",
									icon: "Sunrise",
									id: "javascript.0.Licht.Szene.Tagmodus",
								},
								{
									widgetType: "radio-button",
									label: "Feierabend",
									icon: "Sunset",
									id: "javascript.0.Licht.Szene.Feierabend",
								},
								{
									widgetType: "radio-button",
									label: "Gute Nacht",
									icon: "Moon",
									id: "javascript.0.Licht.Szene.Nachtmodus",
								},
								{
									widgetType: "radio-button",
									label: "Nachtschicht",
									icon: "Computer",
									id: "javascript.0.Licht.Szene.Nachtschicht",
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
