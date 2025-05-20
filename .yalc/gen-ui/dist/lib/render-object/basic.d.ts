import { Painter } from "@/lib/painting/painter";
import Alignment from "@/lib/painting/alignment";
import Rect, { Offset, Size } from "@/lib/basic/rect";
import { BoxConstraints } from "@/lib/rendering/constraints";
import Vector from "@/lib/math/vector";
import { TextSpan } from "../painting/text-painter";
import { HitTestEntry, HitTestResult } from "../gesture/hit_test";
import { DownPointerEvent, MovePointerEvent, PointerEvent, SignalPointerEvent, UpPointerEvent } from "../gesture/events";
import { Matrix4 } from "../math/matrix";
import { ParentData, RenderView } from "./render-object";
import { Axis, Clip, CrossAxisAlignment, MainAxisAlignment, MainAxisSize, StackFit, WrapAlignment, WrapCrossAlignment } from "../core/base-types";
import { Path2D } from "../rendering/path-2D";
import { BorderRadius } from "../painting/radius";
export interface RenderViewOption {
    child: RenderBox;
}
export interface SingleChildRenderViewArguments<ChildType = RenderBox> {
    child: ChildType;
}
export interface MultiChildRenderViewOption {
    children: RenderBox[];
}
export interface BoundsRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface BoundsRRect extends BoundsRect {
    radii: number | Iterable<number>;
}
export interface ClipRectArguments {
    clipBehavior: Clip;
}
export interface ClipRRectArguments extends ClipRectArguments {
    borderRadius: BorderRadius;
}
export interface FlexOption {
    direction: Axis;
    mainAxisAlignment: MainAxisAlignment;
    crossAxisAlignment: CrossAxisAlignment;
    spacing: number;
    mainAxisSize: MainAxisSize;
}
export interface LayoutSizes {
    mainSize: number;
    crossSize: number;
    allocatedSize: number;
}
export interface ExpandedArguments {
    flex: number;
}
export interface StackOption {
    fit: StackFit;
    alignment: Alignment;
}
export interface RectTLRB<T = number> {
    left: T;
    right: T;
    top: T;
    bottom: T;
}
export interface WrapOption {
    direction: Axis;
    spacing: number;
    runSpacing: number;
    alignment: WrapAlignment;
    runAlignment: WrapAlignment;
    crossAxisAlignment: WrapCrossAlignment;
}
export declare class BoxParentData extends ParentData {
    offset: Vector;
}
export declare class ContainerRenderViewParentData<ChildType extends RenderView = RenderView> extends BoxParentData {
    previousSibling?: ChildType;
    nextSibling?: ChildType;
}
export declare class FlexParentData extends ContainerRenderViewParentData<RenderView> {
    private _flex;
    node: any;
    get flex(): number;
    set flex(value: number);
    constructor();
}
export declare abstract class RenderBox extends RenderView {
    protected _renderOffset: Offset;
    get renderBounds(): Rect;
    protected constraints: BoxConstraints;
    layout(constraints: BoxConstraints, parentUseSize?: boolean): void;
    attach(owner: Object): void;
    protected setupParentData(child: RenderView): void;
    performResize(): void;
    computeDryLayout(constrains: BoxConstraints): Size;
    getDryLayout(constrains: BoxConstraints): Size;
    hitTest(result: HitTestResult, position: Vector): boolean;
    hitTestChildren(result: HitTestResult, position: Vector): boolean;
    hitTestSelf(result: HitTestResult, position: Vector): boolean;
    protected defaultHitTestChildren(result: HitTestResult, position: Vector, transform?: Matrix4): boolean;
    applyPaintTransform(child: RenderView, transform: Matrix4): void;
}
export declare abstract class ParentDataRenderView<P extends ParentData = ParentData> extends RenderBox {
    parentData: P;
    constructor(child?: RenderBox);
    abstract applyParentData(renderObject: RenderView): void;
    updateParentData(): void;
    layout(constraints: BoxConstraints, parentUseSize?: boolean): void;
    /**
     * @mustCallSuper
     */
    performLayout(): void;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
}
export declare abstract class SingleChildRenderView extends RenderBox {
    constructor(child?: RenderBox);
    debugRender(context: PaintingContext, offset?: Vector): void;
    render(context: PaintingContext, offset?: Vector): void;
    /**
     * # 检查边界溢出情况，并绘制超出部分
     *   - 绘制超出父容器部分的背景色域，并绘制条纹效果
     *   - 检测范围 [RenderBox] ,它不具备滚动特性。
     * @param context
     * @param offset
     * @returns
     */
    private checkRenderBoundary;
    /**
     * 绘制倾斜的条纹用于警示溢出区域
     * @param paint 画笔对象
     * @param x 溢出矩形的 x 坐标
     * @param y 溢出矩形的 y 坐标
     * @param width 溢出区域宽度
     * @param height 溢出区域高度
     * @param direction "horizontal" | "vertical"
     */
    private drawSkewedStripes;
    performLayout(): void;
    layout(constraints: BoxConstraints, parentUseSize?: boolean): void;
}
export declare class LimitedBoxRender extends SingleChildRenderView {
    private _maxWidth;
    private _maxHeight;
    constructor(maxWidth?: number, maxHeight?: number, child?: RenderBox);
    get maxWidth(): number;
    get maxHeight(): number;
    setMaxSize(maxWidth: number, maxHeight: number): void;
    performLayout(): void;
}
export declare abstract class ClipContext {
    private _paint;
    constructor(paint: Painter);
    get paint(): Painter;
    private clipAndPaint;
    clipRRectAndPaint(clipBehavior: Clip, bounds: BoundsRRect, painter: VoidFunction): void;
    clipRectAndPaint(clipBehavior: Clip, bounds: BoundsRect, painter: VoidFunction): void;
    clipPath(clipBehavior: Clip, bounds: BoundsRect, clipPath: Path2D, painter: VoidFunction): void;
}
export declare class PaintingContext extends ClipContext {
    private estimatedBounds;
    constructor(paint: Painter, estimatedBounds: Rect);
    paintChildDebug(child: RenderView, offset?: Vector): void;
    paintChild(child: RenderView, offset?: Vector): void;
    /**
     * 使用该方法将child矩形矩阵转换
     * @effectiveTransform 矩阵来自偏移矩阵+效果矩阵，原点为(0,0)，这意味着在使用
     * transform 之前需要将原点移动到 @offset 位置，并在变换完毕后将原点移动回来
     */
    pushTransform(offset: Vector, transform: Matrix4, render: VoidFunction): void;
    paintDefaultDebugBoundary(offset: Vector, size: Size): void;
    paintEmptyDebugBoundary(offset: Vector, size: Size): void;
}
export declare abstract class ContainerRenderViewDelegate<ChildType extends RenderView, ParentDataType extends ContainerRenderViewParentData<ChildType>> extends RenderBox {
    protected lastChild: ChildType;
    protected firstChild: ChildType;
    protected childCount: number;
    constructor(children?: ChildType[]);
    protected defaultHitTestChildren(result: HitTestResult, position: Vector, transform?: Matrix4): boolean;
    addAll(value: ChildType[]): void;
    insert(renderView: ChildType, after?: ChildType): void;
    remove(child: RenderView): void;
    private removeFromChildList;
    private insertIntoList;
    protected parentDataOf(child: RenderView): ParentDataType;
    visitChildren(visitor: (child: RenderView) => void): void;
}
export declare abstract class MultiChildRenderView<ChildType extends RenderView = RenderView, ParentDataType extends ContainerRenderViewParentData<ChildType> = ContainerRenderViewParentData<ChildType>> extends ContainerRenderViewDelegate<ChildType, ParentDataType> {
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
    layout(constraints: BoxConstraints): void;
    performLayout(): void;
    performLayoutChild(child: RenderView, constraints: BoxConstraints): void;
    protected getChildList(): RenderView[];
    protected defaultRenderChild(context: PaintingContext, offset?: Vector): void;
    protected defaultRenderChildDebug(context: PaintingContext, offset?: Vector): void;
    hitTest(result: HitTestResult, position: Vector): boolean;
}
export interface ParagraphViewOption {
    text: TextSpan;
}
export declare class ParagraphView extends SingleChildRenderView {
    private textPainter;
    private _text;
    private needClip;
    constructor(option?: ParagraphViewOption);
    set text(text: TextSpan);
    get text(): TextSpan;
    performLayout(): void;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
}
export declare class RootRenderView extends SingleChildRenderView {
    get isRepaintBoundary(): boolean;
    scheduleFirstFrame(): void;
}
export declare class StatefulRenderView extends SingleChildRenderView {
    get isRepaintBoundary(): boolean;
}
export declare class StatelessRenderView extends SingleChildRenderView {
    get isRepaintBoundary(): boolean;
    markRepaint(): void;
}
export declare class PlaceholderRenderView extends SingleChildRenderView {
}
export type onPointerDownCallback = (event: DownPointerEvent) => void;
export type onPointerMoveCallback = (event: MovePointerEvent) => void;
export type onPointerUpCallback = (event: UpPointerEvent) => void;
export type onPointerCancelCallback = (event: UpPointerEvent) => void;
export type onSignalPointerCallback = (event: SignalPointerEvent) => void;
export interface RenderPointerListenerArguments {
    onPointerDown: onPointerDownCallback;
    onPointerMove: onPointerMoveCallback;
    onPointerUp: onPointerUpCallback;
    onPointerCancel: onPointerCancelCallback;
    onSignalPointer: onSignalPointerCallback;
}
export declare class RenderPointerListener extends SingleChildRenderView {
    private _onPointerDown;
    private _onPointerMove;
    private _onPointerUp;
    private _onPointerCancel;
    private _onSignalPointer;
    set onSignalPointer(value: onSignalPointerCallback);
    set onPointerDown(value: onPointerDownCallback);
    set onPointerMove(value: onPointerMoveCallback);
    set onPointerUp(value: onPointerUpCallback);
    set onPointerCancel(value: onPointerCancelCallback);
    constructor(option: Partial<RenderPointerListenerArguments & SingleChildRenderViewArguments>);
    handleEvent(event: PointerEvent, entry: HitTestEntry): void;
    hitTestSelf(result: HitTestResult, position: Vector): boolean;
}
