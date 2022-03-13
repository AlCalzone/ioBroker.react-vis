import * as React from "react";
import type { Page } from "../lib/config";
import { IconButton } from "./iconButton";
import { IconOrIndicator } from "./iconOrIndicator";

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
					return (
						<IconButton
							key={label}
							label={label}
							icon={<IconOrIndicator icon={icon} size={40} />}
							onClick={() => props.onSelectItem(label)}
						/>
					);
				})}
			</nav>
		</>
	);
};
