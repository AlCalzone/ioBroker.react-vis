const asyncifiedMethods = {
	subscribeObjectsAsync: "subscribeObjects",
	subscribeStatesAsync: "subscribe",
	unsubscribeObjectsAsync: "unsubscribeObjects",
	unsubscribeStatesAsync: "unsubscribe",
	setStateAsync: "setState",
	setStateChangedAsync: "setStateChanged",
	setForeignStateAsync: "setForeignState",
	setForeignStateChangedAsync: "setForeignStateChanged",
	getStateAsync: "getState",
	getForeignStateAsync: "getForeignState",
	getStatesAsync: "getStates",
	getForeignStatesAsync: "getForeignStates",
} as const;
type AsyncifiedMethods = typeof asyncifiedMethods;
type Asyncified = { [M in keyof AsyncifiedMethods]: ioBroker.Adapter[M] };

const exported = {} as Asyncified;
for (const [method, emitted] of Object.entries(asyncifiedMethods)) {
	exported[method] = (...args: any[]) => {
		return new Promise<any>((resolve, reject) => {
			window.socket.emit(emitted, ...args, (err, result) => {
				if (err) reject(err);
				resolve(result);
			});
		});
	};
}
export = exported;
