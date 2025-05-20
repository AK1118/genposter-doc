import { BindingBase } from "../basic/framework";
import { Offset } from "../math/vector";
export type EventListenType = "mousedown" | "mouseup" | "mousemove" | "wheel" | "mouseout" | "touchstart" | "touchend" | "touchmove" | "touchcancel";
type EventData = any;
type EventDataCallback = (data: EventData) => void;
export declare class GenPointerEvent {
    identifier: number;
    pointer: Offset;
    parent: GenUnifiedEvent;
    constructor(args: Partial<GenPointerEvent>);
}
export interface GenUnifiedEvent {
    pointer: GenPointerEvent;
    pointers: Array<GenPointerEvent>;
    ctrlKey?: boolean;
    metaKey?: boolean;
    shiftKey?: boolean;
    deltaX?: number;
    deltaY?: number;
    deltaZ?: number;
}
export declare class GenUnifiedPointerEvent implements GenUnifiedEvent {
    pointer: GenPointerEvent;
    pointers: GenPointerEvent[];
    ctrlKey?: boolean;
    metaKey?: boolean;
    shiftKey?: boolean;
    deltaX?: number;
    deltaY?: number;
    deltaZ?: number;
    constructor(args: GenUnifiedEvent);
}
export declare class NativeEventsBinding extends BindingBase {
    static instance: NativeEventsBinding;
    protected initInstance(): void;
    /**
     * 只需要监听一个方法，使用Map即可
     */
    listeners: Map<EventListenType, EventData>;
    addEventListener(type: EventListenType, callback: EventDataCallback): void;
    removeEventListener(type: EventListenType): void;
    applyEvent(type: EventListenType, data: EventData): void;
}
export declare class NativeEventsBindingHandler {
    constructor();
    private binding;
    applyEvent(type: EventListenType, data: EventData): void;
    /**
     * 事件平台差异转换，转换各个平台数据到指定格式
     * 电脑端浏览器事件应满足格式 MouseEvent,详情参考 [MDN Reference](https://developer.mozilla.org/docs/Web/API/MouseEvent)
     * 移动端浏览器事件应满足格式 TouchEvent,详情参考 [MDN Reference](https://developer.mozilla.org/docs/Web/API/TouchEvent)
     */
    protected adapter(type: EventListenType, data: EventData): EventData;
    protected performBindingHandler(): void;
}
export {};
