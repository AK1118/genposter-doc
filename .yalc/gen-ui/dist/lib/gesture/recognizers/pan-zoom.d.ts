import { PanZoomEndPointerEvent, PanZoomStartPointerEvent, PanZoomUpdatePointerEvent, PointerEvent } from "../events";
import { OnePointerGestureRecognizer } from "./gesture-recognizer";
export interface PanZoomGestureRecognizerArguments {
    onPanZoomStart?: (event: PanZoomStartPointerEvent) => void;
    onPanZoomUpdate?: (event: PanZoomUpdatePointerEvent) => void;
    onPanZoomEnd?: (event: PanZoomEndPointerEvent) => void;
}
export declare class PanZoomGestureRecognizer extends OnePointerGestureRecognizer implements PanZoomGestureRecognizerArguments {
    onPanZoomEnd?: (event: PanZoomEndPointerEvent) => void;
    onPanZoomStart?: (event: PanZoomStartPointerEvent) => void;
    onPanZoomUpdate?: (event: PanZoomUpdatePointerEvent) => void;
    private _startDistance;
    private _preAngle;
    private _preScale;
    handleEvent(event: PointerEvent): void;
    private handlePanZoomStart;
    private handlePanZoomUpdate;
    private handlePanZoomEnd;
    private computeRotationAngle;
    private computeDistance;
    isAllowedPointer(event: PointerEvent): boolean;
}
