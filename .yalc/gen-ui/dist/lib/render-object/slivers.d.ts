import { Size } from "../basic/rect";
import { Axis, AxisDirection, GrowthDirection, ScrollDirection } from "../core/base-types";
import { HitTestResult } from "../gesture/hit_test";
import Vector from "../math/vector";
import Constraints, { BoxConstraints } from "../rendering/constraints";
import { PaintingContext } from "./basic";
import { RenderView } from "./render-object";
export declare const axisDirectionToAxis: (axisDirection: AxisDirection) => Axis;
export declare const flipAxisDirection: (axisDirection: AxisDirection) => AxisDirection;
/**
 * 判断滚动方向是否反向
 * up -> down
 * left -> right
 *
 * 例如：当一个列表的滚动方向是 AxisDirection.down 时，如果用户向上滚动，则
 * 用户手指的deltaY 必定为正值。不加以处理就参与滚动计算会导致滚动向下
 * 滚动（滚动值为正数向上滚动，详见 @RenderViewPort.performLayoutSliverChild 和 @RenderSliverToSingleBoxAdapter.setChildParentData)

 */
export declare const axisDirectionIsReversed: (axisDirection: AxisDirection) => boolean;
interface SliverConstraintsArguments {
    /**
     * 滚动视图的主轴方向（例如，垂直或水平）。
     * 该属性决定了内容在视图中的滚动方向。
     */
    axisDirection: AxisDirection;
    /**
     * 滚动内容的生长方向，决定内容在滚动方向上的添加方式。
     * 例如，可以从前向后（正向）或从后向前（反向）生长。
     */
    growthDirection: GrowthDirection;
    /**
     * 用户滚动的方向，表示用户在进行滚动操作时的意图方向。
     * 例如，向上滚动或向下滚动。
     */
    userScrollDirection: ScrollDirection;
    /**
     * 滚动视图的交叉轴方向（与主轴垂直的方向）。
     * 例如，主轴为垂直方向时，交叉轴为水平方向。
     */
    crossAxisDirection: AxisDirection;
    /**
     * 滚动视图当前滚动的偏移量。
     * 该属性表示从滚动视图开始位置到当前滚动位置的距离。
     */
    scrollOffset: number;
    /**
     * 在当前视图之前已经滚动的距离。
     * 该属性用于表示视图内容之前的滚动范围。
     */
    precedingScrollExtent: number;
    /**
     * 当前视图的重叠部分的距离。
     * 这用于计算相邻视图之间的重叠量，通常在多层滚动视图中使用。
     */
    overlap: number;
    /**
     * 在当前视图中剩余的可以绘制的距离。
     * 该属性表示视图内容还可以在屏幕上显示的剩余空间。
     */
    remainingPaintExtent: number;
    /**
     * 视图的交叉轴方向上的尺寸。
     * 例如，主轴为垂直方向时，交叉轴的尺寸为视图的宽度。
     */
    crossAxisExtent: number;
    /**
     * 视图的主轴方向上的尺寸。
     * 例如，主轴为垂直方向时，主轴的尺寸为视图的高度。
     */
    viewportMainAxisExtent: number;
    /**
     * 在缓存区域中剩余的距离。
     * 该属性表示视图内容可以加载到缓存中的剩余空间。
     */
    remainingCacheExtent: number;
    /**
     * 缓存区域的起始位置。
     * 这用于表示缓存区域相对于视图内容起始位置的偏移。
     */
    cacheOrigin: number;
}
export declare class SliverConstraints extends Constraints implements SliverConstraintsArguments {
    axisDirection: AxisDirection;
    growthDirection: GrowthDirection;
    userScrollDirection: ScrollDirection;
    crossAxisDirection: AxisDirection;
    scrollOffset: number;
    precedingScrollExtent: number;
    overlap: number;
    remainingPaintExtent: number;
    crossAxisExtent: number;
    viewportMainAxisExtent: number;
    remainingCacheExtent: number;
    cacheOrigin: number;
    constructor(args: SliverConstraintsArguments);
    get axis(): Axis;
    asBoxConstraints(minExtent?: number, maxExtent?: number, crossAxisExtent?: number): BoxConstraints;
}
export interface SliverGeometryArguments {
    /**
     * Sliver 在滚动方向上的总长度。
     * 该属性表示滚动视图中的内容的总长度。
     */
    scrollExtent: number;
    /**
     * 当前 Sliver 可以绘制的区域的长度。
     * 该属性决定了在当前滚动状态下，可以在屏幕上绘制的 Sliver 部分。
     */
    paintExtent: number;
    /**
     * 当前 Sliver 绘制的起点位置相对于视图的偏移量。
     * 这通常用于调整 Sliver 的绘制起点，尤其是在有重叠的情况下。
     */
    paintOrigin: number;
    /**
     * Sliver 在布局中的有效长度。
     * 该属性表示 Sliver 对其父布局贡献的空间。
     */
    layoutExtent: number;
    /**
     * Sliver 可以绘制的最大长度。
     * 这表示 Sliver 即使完全展开，也不会超过的最大绘制长度。
     */
    maxPaintExtent: number;
    /**
     * Sliver 在滚动方向上阻挡其他内容的最大长度。
     * 该属性表示当前 Sliver 可能遮挡的最大滚动范围。
     */
    maxScrollObstructionExtent: number;
    /**
     * 参与命中测试的 Sliver 的长度。
     * 该属性表示可以响应用户交互（如点击）的区域长度。
     */
    hitTestExtent: number;
    /**
     * Sliver 是否可见。
     * 如果为 `true`，则表示 Sliver 当前可见，否则不可见。
     */
    visible: boolean;
    /**
     * Sliver 是否超出其可绘制区域。
     * 如果为 `true`，则表示 Sliver 的内容超出了可绘制区域，可能需要裁剪或处理溢出。
     */
    hasVisualOverflow: boolean;
    /**
     * 对当前滚动偏移量的修正值。
     * 该属性用于在某些情况下调整 Sliver 的滚动位置，例如在内容大小改变时。
     */
    scrollOffsetCorrection: number;
    /**
     * Sliver 在缓存中的长度。
     * 该属性表示 Sliver 被加载到缓存中的部分的长度，用于优化滚动性能。
     */
    cacheExtent: number;
}
export declare class SliverGeometry implements SliverGeometryArguments {
    scrollExtent: number;
    paintExtent: number;
    paintOrigin: number;
    layoutExtent: number;
    maxPaintExtent: number;
    maxScrollObstructionExtent: number;
    hitTestExtent: number;
    visible: boolean;
    hasVisualOverflow: boolean;
    scrollOffsetCorrection: number;
    cacheExtent: number;
    constructor(args: Partial<SliverGeometryArguments>);
    static get zero(): SliverGeometry;
}
export declare abstract class RenderSliver extends RenderView {
    protected constraints: SliverConstraints;
    private _geometry;
    /**
     * 返回该 RenderSliver 在视口中实际绘制的高度或宽度，具体取决于滚动方向。这是计算 Sliver 在视口中的可见部分时的重要值。
     */
    paintExtent: number;
    /**
     * 返回 RenderSliver 理论上可以绘制的最大高度或宽度。这个值可以超过 paintExtent，在某些情况下，Sliver 的内容可能超出当前视口的范围。
     */
    maxPaintExtent: number;
    /**
     * 当 RenderSliver 需要调整视口中的滚动偏移量时使用的字段。通常用于处理像素对齐问题。
     */
    scrollOffsetCorrection: number;
    /**
     * 当滚动中心发生变化时，用于调整 Sliver 的中心偏移量。
     */
    centerOffsetAdjustment: number;
    /**
     * 在 Sliver 中表示当前子节点的索引。这个字段在 SliverList 和 SliverGrid 等实现中尤为重要，用于跟踪当前布局的子节点。
     */
    index: number;
    /**
     * 这个字段定义了在视口之外应保留多少内容以便快速滚动。RenderSliver 会使用这个字段来确定哪些子元素应该保留在内存中，哪些可以丢弃。
     */
    cacheExtent: number;
    get geometry(): SliverGeometry;
    set geometry(value: SliverGeometry);
    attach(owner: Object): void;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
    layout(constraints: Constraints, parentUseSize?: boolean): void;
    performLayout(): void;
    performResize(): void;
    computeDryLayout(constrains: BoxConstraints): Size;
    getDryLayout(constrains: BoxConstraints): Size;
}
export declare abstract class RenderSliverToSingleBoxAdapter extends RenderSliver {
    protected setupParentData(child: RenderView): void;
    protected setChildParentData(child: RenderView, constraints: SliverConstraints, geometry: SliverGeometry): void;
    hitTest(result: HitTestResult, position: Vector): boolean;
}
export declare class RenderSliverBoxAdapter extends RenderSliverToSingleBoxAdapter {
    performLayout(): void;
}
export {};
