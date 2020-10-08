// Based on https://github.com/giladl82/use-gestures, converted to TypeScript
import { useEffect, useRef, useState } from "react";

export interface PanSwipeEvent {
	preventDefault: () => void;
	stopPropagation: () => void;
	x: number;
	y: number;
	deltaX: number;
	deltaY: number;
	delta: number;
	distance: number;
	angleDeg: number;
}

export interface PinchEvent {
	preventDefault: () => void;
	stopPropagation: () => void;
	pointers: Pointer[];
	delta: number;
	scale: number;
	distance: number;
	angleDeg: number;
}

export class Pointer {
	constructor(touch: { clientX: number; clientY: number }) {
		this.x = touch.clientX;
		this.y = touch.clientY;
	}

	public x: number;
	public y: number;
}

const debounce = (func, wait) => {
	let timeout;
	return function (...args) {
		// @ts-expect-error
		const context = this;
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(context, args), wait);
	};
};

const getDistance = (p1: Pointer, p2: Pointer) => {
	const powX = Math.pow(p1.x - p2.x, 2);
	const powY = Math.pow(p1.y - p2.y, 2);

	return Math.sqrt(powX + powY);
};

const getAngleDeg = (p1: Pointer, p2: Pointer) => {
	return (Math.atan2(p1.y - p2.y, p1.x - p2.x) * 180) / Math.PI;
};

export default function useGestures<T extends HTMLElement>(
	ref: React.RefObject<T>,
	handlers: {
		onPanStart?: (e: PanSwipeEvent) => void;
		onPanMove?: (e: PanSwipeEvent) => void;
		onSwipeLeft?: (e: PanSwipeEvent) => void;
		onSwipeRight?: (e: PanSwipeEvent) => void;
		onSwipeUp?: (e: PanSwipeEvent) => void;
		onSwipeDown?: (e: PanSwipeEvent) => void;
		onPanEnd?: (e: PanSwipeEvent) => void;
		onSwipeLeftEnd?: (e: PanSwipeEvent) => void;
		onSwipeRightEnd?: (e: PanSwipeEvent) => void;
		onSwipeUpEnd?: (e: PanSwipeEvent) => void;
		onSwipeDownEnd?: (e: PanSwipeEvent) => void;
		onPinchStart?: (e: PinchEvent) => void;
		onPinchChanged?: (e: PinchEvent) => void;
		onPinchEnd?: (e: PinchEvent) => void;
	},
	options: {
		minDelta: number;
	} = {
		minDelta: 30,
	},
): void {
	const [touches, setTouches] = useState<PinchEvent | PanSwipeEvent>();
	const [gesture, setGesture] = useState("");

	const initialTouches = useRef<PinchEvent | PanSwipeEvent>();

	useEffect(() => {
		const element = ref.current;

		const getCurrentTouches = (originalEvent, touches, prevTouch): PinchEvent | PanSwipeEvent => {
			const firstTouch = initialTouches.current;

			if (touches.length === 2) {
				const pointer1 = new Pointer(touches[0]);
				const pointer2 = new Pointer(touches[1]);

				const distance = getDistance(pointer1, pointer2);
				return {
					preventDefault: originalEvent.preventDefault,
					stopPropagation: originalEvent.stopPropagation,
					pointers: [pointer1, pointer2],
					delta: prevTouch ? distance - prevTouch.distance : 0,
					scale: firstTouch ? distance / firstTouch.distance : 1,
					distance,
					angleDeg: getAngleDeg(pointer1, pointer2),
				};
			} else {
				const pointer = new Pointer(touches[0]);

				return {
					preventDefault: originalEvent.preventDefault,
					stopPropagation: originalEvent.stopPropagation,
					...pointer,
					deltaX: prevTouch ? pointer.x - prevTouch.x : 0,
					deltaY: prevTouch ? pointer.y - prevTouch.y : 0,
					delta: prevTouch ? getDistance(pointer, prevTouch) : 0,
					distance: firstTouch ? getDistance(pointer, firstTouch as PanSwipeEvent) : 0,
					angleDeg: prevTouch ? getAngleDeg(pointer, prevTouch) : 0,
				};
			}
		};

		const callHandler = (eventName, event) => {
			if (eventName && handlers[eventName] && typeof handlers[eventName] === "function") {
				handlers[eventName](event);
			}
		};

		const handleTouchStart = (event) => {
			const currentTouches = getCurrentTouches(event, event.touches, null);
			setTouches(currentTouches);
			initialTouches.current = currentTouches;

			if (event.touches.length === 2) {
				callHandler("onPinchStart", currentTouches);
			} else {
				callHandler("onPanStart", currentTouches);
			}
		};

		// const handleMouseDown = (event) => {
		// 	const currentTouches = getCurrentTouches(event, [event], null);
		// 	setTouches(currentTouches);
		// 	initialTouches.current = currentTouches;

		// 	callHandler("onPanStart", currentTouches);
		// };

		const handleTouchMove = (event) => {
			event.preventDefault();
			const currentTouches = getCurrentTouches(event, event.touches, touches);
			setTouches(currentTouches);

			if (event.touches.length === 2) {
				callHandler("onPinchChanged", currentTouches);
			} else {
				callHandler("onPanMove", currentTouches);

				let eventName, theGesture;
				if (!("deltaX" in currentTouches)) return;

				if (
					Math.abs(currentTouches.deltaX) >= options.minDelta &&
					Math.abs(currentTouches.deltaY) < options.minDelta
				) {
					if (currentTouches.deltaX < 0) {
						eventName = "onSwipeLeft";
						theGesture = "swipeLeft";
					} else {
						eventName = "onSwipeRight";
						theGesture = "swipeRight";
					}
				} else if (
					Math.abs(currentTouches.deltaX) < options.minDelta &&
					Math.abs(currentTouches.deltaY) >= options.minDelta
				) {
					if (currentTouches.deltaY < 0) {
						eventName = "onSwipeUp";
						theGesture = "swipeUp";
					} else {
						eventName = "onSwipeDown";
						theGesture = "swipeDown";
					}
				} else {
					theGesture = "";
				}

				if (eventName) {
					debounce((eventName, touches, theGesture) => {
						callHandler(eventName, touches);
						setGesture(theGesture);
					}, 100)(eventName, touches, theGesture);
				}
			}
		};

		// const handleMouseMove = (event) => {
		// 	event.preventDefault();
		// 	const currentTouches = getCurrentTouches(event, [event], touches);
		// 	setTouches(currentTouches);

		// 	callHandler("onPanMove", currentTouches);

		// 	let eventName, theGesture;
		// 	if (!("deltaX" in currentTouches)) return;

		// 	if (
		// 		Math.abs(currentTouches.deltaX) >= options.minDelta &&
		// 		Math.abs(currentTouches.deltaY) < options.minDelta
		// 	) {
		// 		if (currentTouches.deltaX < 0) {
		// 			eventName = "onSwipeLeft";
		// 			theGesture = "swipeLeft";
		// 		} else {
		// 			eventName = "onSwipeRight";
		// 			theGesture = "swipeRight";
		// 		}
		// 	} else if (
		// 		Math.abs(currentTouches.deltaX) < options.minDelta &&
		// 		Math.abs(currentTouches.deltaY) >= options.minDelta
		// 	) {
		// 		if (currentTouches.deltaY < 0) {
		// 			eventName = "onSwipeUp";
		// 			theGesture = "swipeUp";
		// 		} else {
		// 			eventName = "onSwipeDown";
		// 			theGesture = "swipeDown";
		// 		}
		// 	} else {
		// 		theGesture = "";
		// 	}

		// 	if (eventName) {
		// 		debounce((eventName, touches, theGesture) => {
		// 			callHandler(eventName, touches);
		// 			setGesture(theGesture);
		// 		}, 100)(eventName, touches, theGesture);
		// 	}
		// };

		const handleTouchEnd = (event) => {
			const currentTouches = getCurrentTouches(event, event.changedTouches, null);
			// @ts-expect-error
			if (touches?.pointers?.length === 2) {
				callHandler("onPinchEnd", currentTouches);
			} else {
				callHandler("onPanEnd", currentTouches);
			}

			if (gesture) {
				callHandler(`on${gesture.charAt(0).toUpperCase() + gesture.slice(1)}End`, currentTouches);
			}
		};

		// const handleMouseUp = (event) => {
		// 	const currentTouches = getCurrentTouches(event, [event], null);
		// 	callHandler("onPanEnd", currentTouches);

		// 	if (gesture) {
		// 		callHandler(`on${gesture.charAt(0).toUpperCase() + gesture.slice(1)}End`, currentTouches);
		// 	}
		// };

		const preventTouchScrolling = (event) => {
			event.preventDefault();
		};
		window.addEventListener("touchstart", preventTouchScrolling, {
			passive: true,
		});
		element?.addEventListener("touchstart", handleTouchStart);
		element?.addEventListener("touchmove", handleTouchMove);
		element?.addEventListener("touchend", handleTouchEnd);
		// element?.addEventListener("mousedown", handleMouseDown);
		// element?.addEventListener("mousemove", handleMouseMove);
		// element?.addEventListener("mouseend", handleMouseUp);
		return () => {
			window.removeEventListener("touchmove", preventTouchScrolling);
			element?.removeEventListener("touchstart", handleTouchStart);
			element?.removeEventListener("touchmove", handleTouchMove);
			element?.removeEventListener("touchend", handleTouchEnd);
			// element?.removeEventListener("mousedown", handleMouseDown);
			// element?.removeEventListener("mousemove", handleMouseMove);
			// element?.removeEventListener("mouseend", handleMouseUp);
		};
	});
}
