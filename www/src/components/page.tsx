import * as React from "react";
import { Section } from "../lib/config";
import widgets from "../widgets";
import { Dialog, DialogProps } from "./dialog";

export interface PageProps extends DialogProps {
	sections: Section[];
}

export const Page: React.FC<PageProps> = ({ sections, ...props }) => {
	return (
		<Dialog {...props}>
			{sections.map((section, i) => (
				<React.Fragment key={`section-${i}`}>
					<h2>{section.label}</h2>
					{section.widgets.map(({ widgetType, ...widgetProps }, i) => {
						const Widget = widgets[widgetType];
						// @ts-expect-error
						return <Widget key={i} {...widgetProps} />;
					})}
				</React.Fragment>
			))}
		</Dialog>
	);
};
