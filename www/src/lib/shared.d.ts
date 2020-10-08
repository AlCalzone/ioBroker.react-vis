import { Socket } from "socket.io";

declare global {
	interface ioBrokerSocketEventCallbacks {
		ready: ReadyHandler;
		unload: UnloadHandler;
		stateChange: StateChangeHandler;
		objectChange: ObjectChangeHandler;
		message: MessageHandler;
	}

	type ioBrokerSocketEvents = Extract<keyof ioBrokerSocketEventCallbacks, string>;

	interface IoBrokerSocket extends Socket {
		on<TEvent extends ioBrokerSocketEvents>(event: TEvent, callback: ioBrokerSocketEventCallbacks[TEvent]): this;
		once<TEvent extends ioBrokerSocketEvents>(event: TEvent, callback: ioBrokerSocketEventCallbacks[TEvent]): this;
		removeListener<TEvent extends ioBrokerSocketEvents>(
			event: TEvent,
			callback: ioBrokerSocketEventCallbacks[TEvent],
		): this;
		off<TEvent extends ioBrokerSocketEvents>(event: TEvent, callback: ioBrokerSocketEventCallbacks[TEvent]): this;
		removeEventListener<TEvent extends ioBrokerSocketEvents>(
			event: TEvent,
			callback: ioBrokerSocketEventCallbacks[TEvent],
		): this;
		removeAllListeners(event?: ioBrokerSocketEvents): this;

		// TODO: Limit this to methods
		emit(event: string, ...args: any[]): this;
	}
	const io: io;
	const socket: IoBrokerSocket;

	interface Window {
		io: typeof io;
		socket: typeof socket;
	}
}
