import { Offset } from "../basic/rect";
import { Matrix4 } from "../math/matrix";
import Vector from "../math/vector";
import { GenPointerEvent, GenUnifiedEvent } from "../native/events";
export declare const G_postAcceptSlopTolerance: number;
export declare enum PointerChange {
    cancel = "cancel",
    add = "add",
    remove = "remove",
    hover = "hover",
    signal = "signal",
    down = "down",
    move = "move",
    up = "up",
    panZoomStart = "panZoomStart",
    panZoomUpdate = "panZoomUpdate",
    panZoomEnd = "panZoomEnd"
}
export declare class GenPointerData {
    change: PointerChange;
    event: GenPointerEvent;
    delta: Offset;
    position: Vector;
    pointer: number;
    unifiedEvent: GenUnifiedEvent;
    constructor(change: PointerChange, event: GenPointerEvent, delta: Offset, position: Vector, pointer: number, unifiedEvent: GenUnifiedEvent);
}
/**
 * 事件类型
 */
export type GenEvent = GenUnifiedEvent;
export type PointerChangeCallback = (data: GenPointerData) => PointerEvent;
export declare class PointerEventHandler {
    private isPointerDown;
    private isPanZoom;
    private onPointerChange;
    private prePointerData;
    private initialPosition;
    /**
     *
     * @onPointerChange 是 @GestureBinding.handlePointerData 的回调
     */
    constructor(onPointerChange: PointerChangeCallback);
    private reset;
    private initializeEventListeners;
    private handlePointerDown;
    private handlePointerUp;
    private handlePointerMove;
    private handlePointerCancel;
    private handleWheel;
    private handleTouchStart;
    private handleTouchMove;
    private handleTouchEnd;
    private handleTouchCancel;
    private handlePointerEvent;
    /**
     * 根据指针事件判断是否取消手势，取消手势后重置初始位置
     * 取消手势判定一般为在手指触摸屏幕后移动超过18像素距离
     * 该方法在被判定为取消手势后，会回调 @handlePointerEvent 函数，
     */
    private addCancelPointer;
    private getEventPosition;
}
interface PointerArguments {
    change: PointerChange;
    event: GenUnifiedEvent;
    delta: Offset;
    position: Vector;
    pointer: number;
    pointers: Array<GenPointerEvent>;
}
export declare abstract class PointerEvent {
    readonly position: Vector;
    readonly delta: Offset;
    readonly pointer: number;
    readonly pointers: Array<GenPointerEvent>;
    constructor(option: Partial<PointerArguments>);
}
export declare abstract class PanZoomPointerEvent extends PointerEvent {
}
export declare class DownPointerEvent extends PointerEvent {
}
export declare class UpPointerEvent extends PointerEvent {
}
export declare class MovePointerEvent extends PointerEvent {
}
export declare class HoverPointerEvent extends PointerEvent {
}
export declare class CancelPointerEvent extends PointerEvent {
}
export declare class SignalPointerEvent extends PointerEvent {
    readonly deltaX: number;
    readonly deltaY: number;
    readonly deltaZ: number;
    constructor(option: Partial<SignalPointerEvent>);
}
export declare class PanZoomStartPointerEvent extends PanZoomPointerEvent {
}
export declare class PanZoomUpdatePointerEvent extends PanZoomPointerEvent {
    deltaScale: number;
    deltaRotationAngle: number;
    scale: number;
    rotationAngle: number;
}
export declare class PanZoomEndPointerEvent extends PanZoomPointerEvent {
}
export declare abstract class PointerEventConverter {
    static expand(data: GenPointerData): PointerEvent;
}
export type PointerRoute = (event: PointerEvent) => void;
/**
 *
 */
export declare class PointerRouter {
    private routeMap;
    addRoute(pointer: number, route: PointerRoute, matrix4?: Matrix4): void;
    removeRoute(pointer: number, route: PointerRoute): void;
    route(event: PointerEvent): void;
    private dispatch;
}
export {};
