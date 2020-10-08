import * as React from "react";
import { Section } from "../lib/config";
import { renderWidget } from "../widgets";
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
					{section.widgets.map(renderWidget)}
				</React.Fragment>
			))}
		</Dialog>
	);
};
