import * as React from "react";
import { useIoBrokerState } from "./useIoBrokerState";

export interface AdapterContextData {
	alive: boolean;
	connected: boolean;
}

export const AdapterContext = React.createContext<AdapterContextData>({
	alive: false,
	connected: false,
});

export function useAdapter(adapter: string, instance: number): readonly [alive: boolean, connected: boolean] {
	const namespace = `${adapter}.${instance}`;
	const aliveId = `system.adapter.${namespace}.alive`;
	const connectedId = `${namespace}.info.connection`;

	const [alive] = useIoBrokerState<boolean>({
		id: aliveId,
		defaultValue: false,
	});
	const [connected] = useIoBrokerState<boolean>({
		id: connectedId,
		defaultValue: false,
	});

	return [alive, connected] as const;
}
