import { BuildContext } from "../basic/elements";
import { MultiChildRenderObjectWidget, MultiChildRenderObjectWidgetArguments, ParentDataWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import { Axis, CrossAxisAlignment, MainAxisAlignment, MainAxisSize } from "../core/base-types";
import { ContainerRenderViewParentData, ExpandedArguments, FlexOption, FlexParentData, MultiChildRenderView, MultiChildRenderViewOption, ParentDataRenderView } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
export declare class FlexRenderView extends MultiChildRenderView<RenderView, ContainerRenderViewParentData<RenderView>> {
    private overflow;
    _direction: Axis;
    _mainAxisAlignment: MainAxisAlignment;
    _crossAxisAlignment: CrossAxisAlignment;
    private _spacing;
    private _mainAxisSize;
    constructor(option: Partial<FlexOption & MultiChildRenderViewOption>);
    set direction(value: Axis);
    set mainAxisSize(value: MainAxisSize);
    set mainAxisAlignment(value: MainAxisAlignment);
    set crossAxisAlignment(value: CrossAxisAlignment);
    set spacing(value: number);
    get direction(): Axis;
    get mainAxisAlignment(): MainAxisAlignment;
    get crossAxisAlignment(): CrossAxisAlignment;
    get spacing(): number;
    performLayout(): void;
    private computeSize;
    private getFlex;
    protected setupParentData(child: RenderView): void;
    private getCrossSize;
    private getMainSize;
}
export declare class Flex extends MultiChildRenderObjectWidget {
    direction: Axis;
    mainAxisAlignment: MainAxisAlignment;
    crossAxisAlignment: CrossAxisAlignment;
    spacing: number;
    mainAxisSize: MainAxisSize;
    constructor(option: Partial<FlexOption & MultiChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: FlexRenderView): void;
}
export type RowArguments = Omit<FlexOption, "direction">;
export declare class Row extends Flex {
    constructor(args: Partial<RowArguments & MultiChildRenderObjectWidgetArguments>);
}
export type ColumnArguments = Omit<FlexOption, "direction">;
export declare class Column extends Flex {
    constructor(args: Partial<ColumnArguments & MultiChildRenderObjectWidgetArguments>);
}
export declare class Expanded extends ParentDataWidget<FlexParentData> {
    private flex;
    constructor(option: Partial<ExpandedArguments & SingleChildRenderObjectWidgetArguments>);
    applyParentData(renderView: ParentDataRenderView<FlexParentData>): void;
}
