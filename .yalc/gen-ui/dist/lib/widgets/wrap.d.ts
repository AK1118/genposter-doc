import { BuildContext } from "../basic/elements";
import { MultiChildRenderObjectWidget, MultiChildRenderObjectWidgetArguments } from "../basic/framework";
import { Axis, WrapAlignment, WrapCrossAlignment } from "../core/base-types";
import { MultiChildRenderView } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
export interface WrapOption {
    direction: Axis;
    spacing: number;
    runSpacing: number;
    alignment: WrapAlignment;
    runAlignment: WrapAlignment;
    crossAxisAlignment: WrapCrossAlignment;
}
export declare class Wrap extends MultiChildRenderObjectWidget {
    direction: Axis;
    spacing: number;
    runSpacing: number;
    alignment: WrapAlignment;
    runAlignment: WrapAlignment;
    crossAxisAlignment: WrapCrossAlignment;
    constructor(option: Partial<WrapOption & MultiChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: WrapRenderView): void;
}
export declare class WrapRenderView extends MultiChildRenderView {
    private _direction;
    private _spacing;
    private _runSpacing;
    private _alignment;
    private _runAlignment;
    private _crossAxisAlignment;
    constructor(option: Partial<WrapOption>);
    get direction(): Axis;
    set direction(value: Axis);
    get spacing(): number;
    set spacing(value: number);
    get runSpacing(): number;
    set runSpacing(value: number);
    get alignment(): WrapAlignment;
    set alignment(value: WrapAlignment);
    get runAlignment(): WrapAlignment;
    set runAlignment(value: WrapAlignment);
    get crossAxisAlignment(): WrapCrossAlignment;
    set crossAxisAlignment(value: WrapCrossAlignment);
    private getMainAxisExtent;
    private getOffset;
    private getCrossAxisExtent;
    private getChildCrossAxisOffset;
    performLayout(): void;
    private applyPerformChild;
    protected setupParentData(child: RenderView): void;
}
