import { Duration } from "../../core/duration";
import { GestureArenaMember, GestureDisposition } from "../arena-manager";
import { DownPointerEvent, PointerEvent } from "../events";
type RecognizerCallback<T> = () => T;
export declare class GestureRecognizerFactory<T> {
    _constructor: () => T;
    _initializer: (instance: T) => void;
    constructor(_constructor: () => T, initializer: (instance: T) => void);
}
export declare abstract class GestureRecognizer extends GestureArenaMember {
    addPointer(event: DownPointerEvent): void;
    abstract isAllowedPointer(event: PointerEvent): boolean;
    protected addAllowedPointer(event: DownPointerEvent): void;
    protected invokeCallback<T>(name: string, callback: RecognizerCallback<T>): T;
}
/**
 * GestureArenaMember 为参赛人员
 * GestureArenaEntry  入场券
 */
export declare abstract class OnePointerGestureRecognizer extends GestureRecognizer {
    constructor();
    protected handleEventBind: (event: PointerEvent) => void;
    /**
     * 每一个指针都对应一个 @GestureArenaEntry
     */
    private entities;
    abstract handleEvent(event: PointerEvent): void;
    protected addAllowedPointer(event: DownPointerEvent): void;
    /**
     * 启用指针追踪，根据 @pointer 将自身添加到 @GestureBinding.instance.pointerRouter 中
     * 当 @GestureBinding.handleEvent 接收到 @pointer 时，将调用 @this.handleEvent
     * 即被route的 @this.handleEvent
     */
    protected startTrackingPointer(pointer: number): void;
    protected stopTrackingPointer(pointer: number): void;
    protected resolve(disposition: GestureDisposition): void;
    private addPointerToArena;
    acceptGesture(pointer: number): void;
    rejectGesture(pointer: number): void;
}
export declare abstract class PrimaryPointerTapGestureRecognizer extends OnePointerGestureRecognizer {
    protected deadline: Duration;
    protected timer: any;
    constructor(deadline?: Duration);
    protected addAllowedPointer(event: DownPointerEvent): void;
    protected didExceedDeadlineWithEvent(event: PointerEvent): void;
    protected didExceedDeadline(): void;
    handleEvent(event: PointerEvent): void;
    private stopTimer;
    rejectGesture(pointer: number): void;
    acceptGesture(pointer: number): void;
    abstract handlePrimaryPointerDown(event: PointerEvent): void;
}
export {};
