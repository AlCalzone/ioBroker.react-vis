import * as React from "react";
import { getObjectAsync, subscribeObjectsAsync, unsubscribeObjectsAsync } from "./backend";

export interface UseIoBrokerObjectOptions {
	/** The ID of the object that is used for reading */
	id: string;
	/** Whether to subscribe to the object ID */
	subscribe?: boolean;
}

/**
 * Links a React state to an object in ioBroker
 */
export function useIoBrokerObject<T extends ioBroker.Object = ioBroker.Object>(
	options: UseIoBrokerObjectOptions,
): readonly [value: T | undefined] {
	const { id, subscribe = true } = options;

	const [object, setObject] = React.useState<T>();

	const onObjectChange: ioBroker.ObjectChangeHandler = (changedId, object) => {
		console.log(`received object ${id}`);
		if (object && changedId === id) {
			setObject(object as T);
		}
	};

	React.useEffect(() => {
		(async () => {
			// Load value initially
			console.log(`getObject ${id}`);
			if (subscribe) await subscribeObjectsAsync(id);
			setObject((await getObjectAsync(id)) as T);
			console.log(`received object ${id}`);

			// And update it on changes
			socket.on("objectChange", onObjectChange);
		})();

		// componentWillUnmount
		return () => {
			socket.removeEventListener("objectChange", onObjectChange);
			if (subscribe) unsubscribeObjectsAsync(id);
		};
	}, []);

	return [object] as const;
}
