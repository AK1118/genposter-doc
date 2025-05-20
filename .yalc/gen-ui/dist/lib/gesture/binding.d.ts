import { BindingBase } from "../basic/framework";
import Vector from "../math/vector";
import GestureArenaManager from "./arena-manager";
import { GenPointerData, PointerEvent, PointerRouter } from "./events";
import { HitTestEntry, HitTestResult, HitTestTarget } from "./hit_test";
export declare class GestureBinding extends BindingBase implements HitTestTarget {
    static instance: GestureBinding;
    private pointerEventHandler;
    private hitTestPointer;
    private pointerEvents;
    protected initInstance(): void;
    gestureArena: GestureArenaManager;
    pointerRouter: PointerRouter;
    /**
     * 将输入事件转换为 @PointerEvent
     */
    handlePointerData(data: GenPointerData): PointerEvent;
    private flushPointerEvents;
    private handlePointerEvent;
    private performPointerEventHandle;
    handleEvent(event: PointerEvent, entry: HitTestEntry): void;
    /**
     * @RendererBinding 派生自该类，该方法用于命中测试，@performPointerEventHandle 调用该方法时，会优先调用 @RendererBinding 的 hitTest 方法，
     * 此处的 @hitTest 方法为事件系统的根部，即，从 @RendererBinding.hitTest 开始, @GestureBinding.hitTest 结束。
     *
     * 命中测试从根部 @PipelineOwner.renderView 开始，子根部向叶子节点递归，叶子节点在调用此方法后如果命中会将自己包裹为 @HitTestEntry 实体后加入命中结果中
     * 参考
     * ```
     * protected hitTest(result: HitTestResult, position: Vector) {
     *     result.add(new HitTestEntry(this));
     * }
     *
     * ```
     */
    protected hitTest(result: HitTestResult, position: Vector): void;
}
