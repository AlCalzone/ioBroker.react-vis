import * as React from "react";
import { renderWidget } from ".";
import type { Widgets as WidgetTypes } from "../lib/config";

export type ItemListProps = Omit<WidgetTypes.ItemList, "type">;

const ButtonList: React.FC<ItemListProps> = (props) => {
	return <div className={`item-list ${props.className ?? ""}`}>{props.items.map(renderWidget)}</div>;
};
export default ButtonList;
