import Rect, { Size } from "@/lib/basic/rect";
import Constraints, { BoxConstraints } from "@/lib/rendering/constraints";
import Vector from "@/lib/math/vector";
import { HitTestEntry, HitTestResult, HitTestTarget } from "../gesture/hit_test";
import { PointerEvent } from "../gesture/events";
import { Matrix4 } from "../math/matrix";
import { PaintingContext } from "./basic";
export declare class Layer {
}
export declare class OffsetLayer {
    constructor(offset: Vector);
    offset: Vector;
}
export declare class LayerHandler<T extends Layer> {
    layer: T;
}
export declare class ParentData {
}
export declare abstract class AbstractNode {
    key: string;
    private _owner;
    private _parent;
    private _depth;
    get owner(): Object;
    get parent(): AbstractNode;
    set parent(value: AbstractNode);
    get depth(): number;
    set depth(value: number);
    protected reDepthChild(child: AbstractNode): void;
    protected reDepthChildren(): void;
    protected dropChild(child: AbstractNode): void;
    protected adoptChild(child: AbstractNode): void;
    get attached(): boolean;
    attach(owner: Object): void;
    detach(): void;
}
type ChildVisitorCallback = (child: RenderView) => void;
export declare abstract class RenderView extends AbstractNode implements HitTestTarget {
    protected constraints: Constraints;
    layerHandler: LayerHandler<OffsetLayer>;
    private _child?;
    private _firstChild?;
    /**
     * 定义渲染伴随数据，即父节点数据，用于 @ParentDataElement 使用，被作为 @ParentDataElement 的 子节点时
     * 会被定义类型，默认类型为 @ParentData ，在不同常见会被父节点的 @setupParentData 赋予不同的类型,达到自定义效果。
     * 例如在 @Stack 内会被 @StackParentData 赋值，在 @Flex 内会被 @FlexParentData 赋值。
     */
    parentData: ParentData;
    private _size;
    needsRePaint: boolean;
    needsReLayout: boolean;
    get size(): Size;
    set size(size: Size);
    get mounted(): boolean;
    get view(): RenderView;
    get isRepaintBoundary(): boolean;
    get renderBounds(): Rect;
    /**
     * 派生类必须实现该方法才会被正常渲染，并且在渲染child时必须使用 `context.paintChild` 方法渲染child，这是
     * 必须的。
     */
    abstract render(context: PaintingContext, offset?: Vector): void;
    abstract debugRender(context: PaintingContext, offset?: Vector): void;
    abstract layout(constraints: Constraints, parentUseSize?: boolean): void;
    abstract performLayout(): void;
    protected dropChild(child: AbstractNode): void;
    protected adoptChild(child: AbstractNode): void;
    get child(): RenderView;
    set child(value: RenderView);
    /**
     * 为child设置parentData类型，子类可重写该方法便于自定义。
     * 默认parentData
     * @param child
     */
    protected setupParentData(child: RenderView): void;
    markNeedsPaint(): void;
    markNeedsLayout(): void;
    layoutWithoutResize(): void;
    reassemble(): void;
    visitChildren(visitor: ChildVisitorCallback): void;
    paintWidthContext(context: PaintingContext, offset?: Vector): void;
    abstract performResize(): void;
    abstract computeDryLayout(constrains: BoxConstraints): Size;
    abstract getDryLayout(constrains: BoxConstraints): Size;
    hitTest(result: HitTestResult, position: Vector): boolean;
    handleEvent(event: PointerEvent, entry: HitTestEntry): void;
    private getAncestorRenderers;
    /**
     * 获取相对于ancestor的变换矩阵，如果没有指定ancestor则默认相对于root节点。
     * 子节点通过调用该方法获取所有父节点使用的变换矩阵，然后通过将I矩阵变换矩阵计算。
     * @applyPaintTransform 使用方法参考 @RenderTransformBox
     */
    getTransformTo(ancestor?: RenderView): Matrix4;
    localToGlobal(offset: Vector, ancestor?: RenderView): Vector;
    applyPaintTransform(child: RenderView, transform: Matrix4): void;
}
export {};
