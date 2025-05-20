import { BuildContext } from "../basic/elements";
import { MultiChildRenderObjectWidget, MultiChildRenderObjectWidgetArguments, ParentDataWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import { Clip, StackFit } from "../core/base-types";
import Vector from "../math/vector";
import Alignment from "../painting/alignment";
import { ContainerRenderViewParentData, MultiChildRenderView, MultiChildRenderViewOption, PaintingContext, ParentDataRenderView } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
export interface StackOption {
    /**
     * # 子控件的填充方式
     */
    fit: StackFit;
    /**
     * # 子控件的对齐位置
     */
    alignment: Alignment;
    /**
     * # 超出边界裁剪行为
     */
    clipBehavior: Clip;
}
export declare class Stack extends MultiChildRenderObjectWidget {
    private _fit;
    private _alignment;
    private _clipBehavior;
    constructor(option: Partial<StackOption & MultiChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: StackRenderView): void;
}
export declare class StackRenderView extends MultiChildRenderView {
    private _fit;
    private _alignment;
    private _clipBehavior;
    constructor(option: Partial<StackOption & MultiChildRenderViewOption>);
    get alignment(): Alignment;
    set alignment(value: Alignment);
    set clipBehavior(value: Clip);
    get fit(): StackFit;
    get clipBehavior(): Clip;
    set fit(value: StackFit);
    private computeSize;
    /**
     * 未定位的组件随align 对其布局
     *
     */
    performLayout(): void;
    private layoutPositionedChild;
    protected setupParentData(child: RenderView): void;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
}
export declare class StackParentData extends ContainerRenderViewParentData<RenderView> {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
    get isPositioned(): boolean;
}
export interface PositionedArguments {
    top: number;
    left: number;
    bottom: number;
    right: number;
    width: number;
    height: number;
}
export declare class Positioned extends ParentDataWidget<StackParentData> {
    private top;
    private left;
    private right;
    private bottom;
    private width;
    private height;
    constructor(option: Partial<PositionedArguments & SingleChildRenderObjectWidgetArguments>);
    applyParentData(child: ParentDataRenderView<StackParentData>): void;
}
