import { DownPointerEvent, PointerEvent, UpPointerEvent } from "../events";
import { PrimaryPointerTapGestureRecognizer } from "./gesture-recognizer";
export type EventCallback<T extends PointerEvent = PointerEvent> = (event: T) => void;
export interface TapGestureRecognizerArguments {
    onTap: EventCallback;
    onTapDown: EventCallback<DownPointerEvent>;
    onTapUp: EventCallback<UpPointerEvent>;
    onTapCancel: VoidFunction;
}
/**
 * deadline结束后会调用onTapDown函数，但在其他识别器介入竞争时，可能会出现rejectGesture，这时候deadline不会触发，
 * 当被默认acceptGesture时，会调用onTapDown,或者另外的onTap,onTapUp
 */
export default class TapGestureRecognizer extends PrimaryPointerTapGestureRecognizer implements TapGestureRecognizerArguments {
    onTap: EventCallback;
    onTapDown: EventCallback<DownPointerEvent>;
    onTapUp: EventCallback<UpPointerEvent>;
    onTapCancel: VoidFunction;
    private sentDown;
    private up;
    private down;
    constructor();
    protected addAllowedPointer(event: DownPointerEvent): void;
    isAllowedPointer(): boolean;
    handlePrimaryPointerDown(event: PointerEvent): void;
    protected didExceedDeadline(): void;
    handleEventDown(): void;
    private checkDown;
    private checkCancel;
    private checkUp;
    private reset;
    acceptGesture(pointer: number): void;
    rejectGesture(pointer: number): void;
}
