import { Offset } from "../basic/rect";
import { Curve, Simulation } from "../core/animation";
import { Axis, AxisDirection, GrowthDirection, ScrollDirection } from "../core/base-types";
import { ChangeNotifier } from "../core/change-notifier";
import { ScrollPhysics } from "../core/scroll-physics";
import { HitTestResult } from "../gesture/hit_test";
import Vector from "../math/vector";
import { ContainerRenderViewParentData, MultiChildRenderView, PaintingContext } from "./basic";
import { RenderView } from "./render-object";
import { RenderSliver } from "./slivers";
import { Duration } from "../core/duration";
import { SimpleKey } from "../basic/key";
export declare abstract class ViewPortOffset extends ChangeNotifier {
    private _pixels;
    get pixels(): number;
    setPixels(value: number): void;
    abstract get userScrollDirection(): ScrollDirection;
    abstract applyViewportDimension(viewportDimension: number): boolean;
    abstract applyContentDimension(minScrollExtent: number, maxScrollExtent: number): boolean;
    /**
     * 矫正偏移量，该方法不会触发notifyListeners,仅用于偏移量的矫正
     */
    correctBy(value: number): void;
}
interface ScrollPositionArguments {
    physics: ScrollPhysics;
    axisDirection: AxisDirection;
    initPixels: number;
}
export declare abstract class ScrollPosition extends ViewPortOffset {
    private physics;
    private _scrollDirection;
    private _axisDirection;
    private _minScrollExtent;
    private _maxScrollExtent;
    private _viewportDimension;
    constructor(args: Partial<ScrollPositionArguments>);
    get viewportDimension(): number;
    get axisDirection(): AxisDirection;
    get scrollDirection(): ScrollDirection;
    get minScrollExtent(): number;
    get maxScrollExtent(): number;
    get userScrollDirection(): ScrollDirection;
    get atEdge(): boolean;
    get outOfRange(): boolean;
    get axis(): Axis;
    get extentBefore(): number;
    get extentAfter(): number;
    private updateScrollDirection;
    protected didUpdateScrollDirection(scrollDirection: ScrollDirection): void;
    jumpTo(value: number): void;
    animateTo(offset: number, duration: Duration, curve: Curve): Promise<void>;
    protected didEndScroll(): void;
    applyViewportDimension(viewportDimension: number): boolean;
    private pendingDimensions;
    applyContentDimension(minScrollExtent: number, maxScrollExtent: number): boolean;
    /**
     * 更新新的尺寸后
     */
    applyNewDimensions(): void;
    applyBoundaryConditions(newPixels: number): number;
    setPixels(newPixels: number): void;
    applyUserOffset(offset: Offset): number;
    createBallisticSimulation(velocity: number): Simulation;
    abstract scrollEnd(): void;
    abstract scrollStart(): void;
    abstract scrollUpdate(position: Offset): any;
    abstract pointerScroll(offset: Offset): void;
}
export declare class ScrollPositionWithSingleContext extends ScrollPosition {
    key: SimpleKey;
    private velocityTicker;
    private animationController;
    pointerScroll(offset: Offset): void;
    get velocity(): number;
    goBallistic(velocity: number): void;
    animateTo(offset: number, duration: Duration, curve: Curve): Promise<void>;
    applyNewDimensions(): void;
    scrollEnd(): void;
    scrollUpdate(position: Offset): void;
    scrollStart(): void;
}
export declare class SliverPhysicalParentData extends ContainerRenderViewParentData<RenderSliver> {
    paintOffset: Offset;
}
export interface ViewPortArguments {
    center: RenderSliver;
    axisDirection: AxisDirection;
    crossDirection: AxisDirection;
}
export interface RenderViewPortArguments {
    offset: ViewPortOffset;
    axisDirection: AxisDirection;
}
export declare class RenderViewPortBase extends MultiChildRenderView<RenderSliver> {
    protected _offset: ViewPortOffset;
    protected center: RenderSliver;
    private _axisDirection;
    private _crossDirection;
    protected maxScrollExtent: number;
    protected minScrollExtent: number;
    private markNeedsLayoutBind;
    private anchor;
    constructor(args: Partial<RenderViewPortArguments>);
    get axisDirection(): AxisDirection;
    get axis(): Axis;
    get crossDirection(): AxisDirection;
    set axisDirection(value: AxisDirection);
    set offset(value: ViewPortOffset);
    get offset(): ViewPortOffset;
    protected setupParentData(child: RenderView): void;
    performLayout(): void;
    protected computeLayoutScrollOffset(mainAxisExtent: number, crossAxisExtent: number): void;
    protected performLayoutSliverChild(child: RenderSliver, scrollOffset: number, layoutOffset: number, remainingPaintExtent: number, mainAxisExtent: number, crossAxisExtent: number, growthDirection: GrowthDirection, another: (child: RenderSliver) => NonNullable<RenderSliver>, remainingCacheExtent: number, axisDirection: AxisDirection, cacheOrigin: number): number;
    protected updateChildLayoutOffset(child: RenderSliver, layoutOffset: number, growthDirection: GrowthDirection): void;
    protected computeAbsolutePaintOffset(child: RenderSliver, layoutOffset: number, growthDirection: GrowthDirection): Offset;
    private paintContents;
    hitTestChildren(result: HitTestResult, position: Vector): boolean;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
}
export declare class RenderViewPort extends RenderViewPortBase {
    private cachedMaxScrollExtent;
    constructor(args: Partial<RenderViewPortArguments>);
    protected computeLayoutScrollOffset(mainAxisExtent: number, crossAxisExtent: number): void;
    private lastScrolledMaxScrollExtent;
    private lastScrolledChild;
    private handleUpdateVisualChildOrder;
}
export {};
