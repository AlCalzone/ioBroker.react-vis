import * as React from "react";
import { getStateAsync, setStateAsync, subscribeStatesAsync, unsubscribeStatesAsync } from "./backend";

export interface UseIoBrokerStateOptions<T extends ioBroker.State["val"] = ioBroker.State["val"]> {
	/** The ID of the state that is used for reading */
	id: string;
	/** The ID of the state that is used for writing. Defaults to `stateId` */
	writeId?: string;
	/** The default value that is used until the actual value has been retrieved */
	defaultValue?: T;
	/** The default ACK flag that is used until the actual state's ACK flag has been retrieved. Default: true */
	defaultAck?: boolean;
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
 */
export function useIoBrokerState<T extends ioBroker.State["val"] = ioBroker.State["val"]>(
	options: UseIoBrokerStateOptions<T> & { defaultValue: T },
): readonly [value: T, ack: boolean, setValue: BoundSetState];
export function useIoBrokerState<T extends ioBroker.State["val"] = ioBroker.State["val"]>(
	options: UseIoBrokerStateOptions<T>,
): readonly [value: T | undefined, ack: boolean, setValue: BoundSetState];

export function useIoBrokerState<T extends ioBroker.State["val"] = ioBroker.State["val"]>(
	options: UseIoBrokerStateOptions<T>,
): readonly [value: T | undefined, ack: boolean, setValue: BoundSetState] {
	const { id, writeId = id, subscribe = true, defaultValue, defaultAck = true, transform } = options;

	const [{ value, ack }, setValue] = React.useState<{ value: T | undefined; ack: boolean }>({
		value: defaultValue,
		ack: defaultAck,
	});

	const onStateChange: ioBroker.StateChangeHandler = (changedId, state) => {
		if (state && state.ack && changedId === id) {
			const value = state.val as T;
			setValue({
				value: transform ? transform(value) : value,
				ack: state.ack,
			});
		}
	};

	React.useEffect(() => {
		(async () => {
			// Load value initially
			if (subscribe) await subscribeStatesAsync(id);
			const initial = await getStateAsync(id);
			const val = (initial?.val ?? defaultValue) as T;
			const ack = initial?.ack ?? defaultAck;
			setValue({
				value: transform ? transform(val) : val,
				ack,
			});

			// And update it on changes
			socket.on("stateChange", onStateChange);
		})();

		// componentWillUnmount
		return () => {
			socket.removeEventListener("stateChange", onStateChange);
			if (subscribe) unsubscribeStatesAsync(id);
		};
	}, []);

	const updateValue: BoundSetState = (...args: [any, ...any[]]) => {
		// While updating a value on the server, update it locally with ACK = false
		// so the UI can show a response immediately
		const value = args[0];
		const ack = args[1] ?? false;
		setValue({ value, ack });
		// And update it on the server asynchronously
		return setStateAsync(writeId, ...args);
	};

	return [value, ack, updateValue] as const;
}
