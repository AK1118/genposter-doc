import { DownPointerEvent, PointerEvent } from "../events";
import { OnePointerGestureRecognizer } from "./gesture-recognizer";
export interface DoubleTapGestureRecognizerArguments {
    onDoubleTap: VoidFunction;
}
declare class DoubleTapGestureRecognizer extends OnePointerGestureRecognizer implements DoubleTapGestureRecognizerArguments {
    onDoubleTap: VoidFunction;
    private doubleTapTimer;
    private _firstTap;
    private doubleTapTimeOut;
    protected addAllowedPointer(event: DownPointerEvent): void;
    get firstTap(): DownPointerEvent;
    set firstTap(value: DownPointerEvent);
    private startTrack;
    private registerSecondaryTap;
    private registerFirstTap;
    private startDoubleTimer;
    private stopDoubleTimer;
    isAllowedPointer(): boolean;
    stopTimer(): void;
    handleEvent(event: PointerEvent): void;
    private reject;
    private reset;
    acceptGesture(pointer: number): void;
    private checkDoubleTap;
}
export default DoubleTapGestureRecognizer;
