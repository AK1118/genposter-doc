import { EventListenType, GenUnifiedPointerEvent, NativeEventsBindingHandler } from "../events";
/**
 * # 默认浏览器事件绑定处理器
 */
export default class DefaultBrowserNativeEventsBindingHandler extends NativeEventsBindingHandler {
    protected adapter(type: EventListenType, data: TouchEvent | MouseEvent): GenUnifiedPointerEvent;
    protected performBindingHandler(): void;
}
