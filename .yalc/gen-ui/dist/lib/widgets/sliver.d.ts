import { BuildContext, Element } from "../basic/elements";
import { RenderObjectElement, RenderObjectWidget, Widget } from "../basic/framework";
import { HitTestResult } from "../gesture/hit_test";
import Vector from "../math/vector";
import { ContainerRenderViewParentData, PaintingContext, RenderBox } from "../render-object/basic";
import { AbstractNode, RenderView } from "../render-object/render-object";
import { RenderSliver, SliverConstraints } from "../render-object/slivers";
import { BoxConstraints } from "../rendering/constraints";
export declare class SliverMultiBoxAdaptorParentData<ChildType extends RenderView> extends ContainerRenderViewParentData<ChildType> {
    index: number;
    keepAlive: boolean;
    layoutOffset: number;
    key: string;
}
export declare abstract class RenderSliverBoxChildManager {
    abstract createChild(index: number, after?: RenderBox): void;
    abstract removeChild(child: RenderBox): void;
    abstract didAdoptChild(child: RenderBox): void;
    abstract estimateMaxScrollOffset(constraints: SliverConstraints, firstIndex?: number, lastIndex?: number, leadingScrollOffset?: number, trailingScrollOffset?: number): number;
    abstract didStartLayout(): void;
    abstract didFinishLayout(): void;
    abstract get childCount(): number;
    abstract setDidUnderflow(value: boolean): void;
    abstract get autoKeepAlive(): boolean;
}
export declare abstract class SliverChildDelegate {
    abstract keepAlive: boolean;
    abstract build(context: BuildContext, index: number): Widget;
}
type SliverChildBuilderDelegateBuilder = (context: BuildContext, index: number) => Widget;
interface SliverChildBuilderDelegateArguments {
    builder: SliverChildBuilderDelegateBuilder;
    childCount?: number | null;
}
export declare class SliverChildBuilderDelegate extends SliverChildDelegate {
    keepAlive: boolean;
    private builder;
    childCount?: number;
    constructor(args: Partial<SliverChildBuilderDelegateArguments>);
    build(context: BuildContext, index: number): Widget;
}
export declare class SliverMultiBoxAdaptorElement extends RenderObjectElement implements RenderSliverBoxChildManager {
    private childDelegate;
    private childElement;
    private _currentlyUpdatingChildIndex;
    set currentlyUpdatingChildIndex(value: number);
    get currentlyUpdatingChildIndex(): number;
    private currentBeforeChild;
    constructor(childDelegate: SliverChildDelegate, widget: Widget);
    get autoKeepAlive(): boolean;
    createChild(index: number, after?: RenderBox): void;
    removeChild(child: RenderBox): void;
    didAdoptChild(child: RenderBox): void;
    estimateMaxScrollOffset(constraints: SliverConstraints, firstIndex?: number, lastIndex?: number, leadingScrollOffset?: number, trailingScrollOffset?: number): number;
    private extrapolateMaxScrollOffset;
    didStartLayout(): void;
    didFinishLayout(): void;
    get childCount(): number;
    setDidUnderflow(value: boolean): void;
    get renderObject(): SliverMultiBoxAdaptorRenderView;
    insertRenderObjectChild(child: RenderBox, slot?: Object): void;
    protected performRebuild(): void;
}
export declare class SliverMultiBoxAdaptorWidget extends RenderObjectWidget {
    protected childDelegate: SliverChildDelegate;
    constructor(childDelegate: SliverChildDelegate);
    createRenderObject(context: BuildContext): RenderView;
    updateRenderObject(context: BuildContext, renderView: SliverMultiBoxAdaptorRenderView): void;
    createElement(): Element;
}
type ChildType = RenderBox;
type ParentDataType = SliverMultiBoxAdaptorParentData<ChildType>;
export declare class SliverMultiBoxAdaptorRenderView extends RenderSliver {
    private _childManager;
    constructor(_childManager: RenderSliverBoxChildManager);
    get childManager(): RenderSliverBoxChildManager;
    set childDelegate(value: RenderSliverBoxChildManager);
    protected lastChild: ChildType;
    protected firstChild: ChildType;
    protected childCount: number;
    addAll(value: ChildType[]): void;
    insert(renderView: ChildType, after?: ChildType): void;
    protected adoptChild(child: AbstractNode): void;
    remove(child: RenderView): void;
    private removeFromChildList;
    private insertIntoList;
    parentDataOf(child: RenderView): ParentDataType;
    visitChildren(visitor: (child: RenderView) => void): void;
    protected setupParentData(child: RenderView): void;
    addInitialChild(index?: number, layoutOffset?: number): void;
    childAfter(child: ChildType): ChildType;
    indexOf(child: RenderBox): number;
    protected insertAndLayoutChild(childConstraints: BoxConstraints, after: RenderBox, parentUseSize?: boolean): RenderBox;
    protected insertAndLayoutLeadingChild(childConstraints: BoxConstraints, parentUsesSize?: boolean): RenderBox;
    protected paintExtentOf(child: RenderBox): number;
    renderChildren(context: PaintingContext, offset?: Vector, isDebug?: boolean): void;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
    protected childScrollOffset(child: RenderBox): number;
    /**
     * 回收不需要的child
     * @leadingGarbage 回收的leadingChild数量,即可视窗口上方的child(AxisDirection.down举例)，leadingGarbage为0表示不回收
     * @trailingGarbage 回收的trailingChild数量,即可视窗口下方的child,直至数据链末尾
     */
    protected garbageCollect(leadingGarbage: number, trailingGarbage: number): void;
    private keepAliveChildren;
    private destroyChild;
    private createOrObtainChild;
    hitTest(result: HitTestResult, position: Vector): boolean;
    hitTestChildren(result: HitTestResult, position: Vector): boolean;
}
export declare class SliverListRenderView extends SliverMultiBoxAdaptorRenderView {
    performLayout(): void;
}
interface SliverListArguments {
    childDelegate: SliverChildDelegate;
    autoKeepAlive: boolean;
}
export declare class SliverList extends SliverMultiBoxAdaptorWidget {
    private autoKeepAlive;
    constructor(args: Partial<SliverListArguments>);
    createRenderObject(context: BuildContext): RenderView;
    updateRenderObject(context: BuildContext, renderView: SliverListRenderView): void;
}
export {};
