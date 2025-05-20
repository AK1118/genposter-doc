import { DownPointerEvent, MovePointerEvent, PointerEvent, UpPointerEvent } from "../events";
import { OnePointerGestureRecognizer } from "./gesture-recognizer";
export interface PanDragGestureRecognizerArguments {
    onDragStart: (event: DownPointerEvent) => void;
    onDragUpdate: (event: MovePointerEvent) => void;
    onDragEnd: (event: UpPointerEvent) => void;
}
declare class PanDragGestureRecognizer extends OnePointerGestureRecognizer implements PanDragGestureRecognizerArguments {
    onDragStart: (event: DownPointerEvent) => void;
    onDragUpdate: (event: MovePointerEvent) => void;
    onDragEnd: (event: UpPointerEvent) => void;
    private startEvent;
    private moved;
    isAllowedPointer(event: DownPointerEvent): boolean;
    handleEvent(event: PointerEvent): void;
    rejectGesture(pointer: number): void;
    private reset;
    private handlePanDragEnd;
    private handlePanDragStart;
    private handlePanDragUpdate;
}
export default PanDragGestureRecognizer;
