import * as React from "react";
import { Page } from "../lib/config";
import { IconButton } from "./iconButton";
import * as icons from "./icons";

export interface NavigationProps {
	onSelectItem(item: string): void;
	items: Pick<Page, "label" | "icon">[];
}

export const Navigation: React.FC<NavigationProps> = (props) => {
	return (
		<>
			<h2>Navigation</h2>
			<nav>
				{props.items.map(({ label, icon }) => {
					const Icon = icons[icon];
					return (
						<IconButton
							key={label}
							label={label}
							icon={<Icon size={40} />}
							onClick={() => props.onSelectItem(label)}
						/>
					);
				})}
			</nav>
		</>
	);
};
