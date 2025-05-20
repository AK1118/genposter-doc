import { Duration } from "@/lib/core/duration";
import { PointerEvent, UpPointerEvent } from "../events";
import { PrimaryPointerTapGestureRecognizer } from "./gesture-recognizer";
export interface LongPressGestureRecognizerArguments {
    onLongPressStart: (event: UpPointerEvent) => void;
    onLongPressEnd: (event: UpPointerEvent) => void;
    onLongPressUpdate: (event: UpPointerEvent) => void;
    onLongPress: () => void;
}
declare class LongPressGestureRecognizer extends PrimaryPointerTapGestureRecognizer implements LongPressGestureRecognizerArguments {
    constructor(args?: Partial<LongPressGestureRecognizerArguments & {
        pressDuration: Duration;
    }>);
    onLongPressUpdate: (event: UpPointerEvent) => void;
    onLongPress: () => void;
    onLongPressStart: (event: UpPointerEvent) => void;
    onLongPressEnd: (event: UpPointerEvent) => void;
    protected deadline: Duration;
    private isAccepted;
    private startEvent;
    handlePrimaryPointerDown(event: PointerEvent): void;
    protected didExceedDeadline(): void;
    handleEvent(event: PointerEvent): void;
    acceptGesture(pointer: number): void;
    private handleLongPressUpdate;
    private handleLongPressEnd;
    private handleLongPressStart;
    private handleLongPress;
    isAllowedPointer(event: PointerEvent): boolean;
    private reset;
}
export default LongPressGestureRecognizer;
