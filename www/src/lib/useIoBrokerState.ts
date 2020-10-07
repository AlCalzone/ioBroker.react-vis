import * as React from "react";
import { getStateAsync, setStateAsync, subscribeStatesAsync, unsubscribeStatesAsync } from "./backend";

export interface UseIoBrokerStateOptions<T extends ioBroker.State["val"] = ioBroker.State["val"]> {
	/** The ID of the state that is used for reading */
	id: string;
	/** The ID of the state that is used for writing. Defaults to `stateId` */
	writeId?: string;
	/** The default value that is used until the actual value has been retrieved */
	defaultValue?: T | undefined;
	/** Whether to subscribe to the state ID */
	subscribe?: boolean;
	/** Transforms the received values */
	transform?: (val: any) => T | undefined;
}

interface BoundSetState {
	(
		state: string | number | boolean | ioBroker.State | ioBroker.SettableState | null,
		ack?: boolean,
	): ioBroker.SetStatePromise;
	(
		state: string | number | boolean | ioBroker.State | ioBroker.SettableState | null,
		options?: unknown,
	): ioBroker.SetStatePromise;
	(
		state: string | number | boolean | ioBroker.State | ioBroker.SettableState | null,
		ack: boolean,
		options: unknown,
	): ioBroker.SetStatePromise;
}

/**
 * Links a React state to a state in ioBroker and returns a way to set the value in the backend.
 * @param stateId The state id to access
 */
export function useIoBrokerState<T extends ioBroker.State["val"] = ioBroker.State["val"]>(
	options: UseIoBrokerStateOptions<T> & { defaultValue: T },
): readonly [value: T, setValue: BoundSetState];
export function useIoBrokerState<T extends ioBroker.State["val"] = ioBroker.State["val"]>(
	options: UseIoBrokerStateOptions<T>,
): readonly [value: T | undefined, setValue: BoundSetState];

export function useIoBrokerState<T extends ioBroker.State["val"] = ioBroker.State["val"]>(
	options: UseIoBrokerStateOptions<T>,
): readonly [value: T | undefined, setValue: BoundSetState] {
	const { id, writeId = id, subscribe = true, defaultValue, transform } = options;

	const [value, setValue] = React.useState<T | undefined>(defaultValue);

	const onStateChange: ioBroker.StateChangeHandler = (changedId, state) => {
		if (state && state.ack && changedId === id) {
			const value = state?.val as T;
			setValue(transform ? transform(value) : value);
		}
	};

	React.useEffect(() => {
		(async () => {
			// Load value initially
			if (subscribe) await subscribeStatesAsync(id);
			const initialValue = (await getStateAsync(id))?.val as T;
			setValue(transform ? transform(initialValue) : initialValue);

			// And update it on changes
			socket.on("stateChange", onStateChange);
		})();

		// componentWillUnmount
		return () => {
			socket.removeEventListener("stateChange", onStateChange);
			if (subscribe) unsubscribeStatesAsync(id);
		};
	}, []);

	return [value, (...args: [any, ...any[]]) => setStateAsync(writeId, ...args)] as const;
}
