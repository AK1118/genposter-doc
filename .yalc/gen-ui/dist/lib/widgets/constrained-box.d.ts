import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import { Size } from "../basic/rect";
import Vector from "../math/vector";
import { PaintingContext, SingleChildRenderView, SingleChildRenderViewArguments } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
import { BoxConstraints } from "../rendering/constraints";
export interface ConstrainedBoxRenderArguments {
    additionalConstraints: BoxConstraints;
}
export declare class ConstrainedBoxRender extends SingleChildRenderView {
    _width: number;
    _height: number;
    private _additionalConstraints;
    constructor(option: Partial<ConstrainedBoxRenderArguments & SingleChildRenderViewArguments>);
    get additionalConstraints(): BoxConstraints;
    set additionalConstraints(constraints: BoxConstraints);
    computeDryLayout(constrains: BoxConstraints): Size;
    set width(width: number);
    set height(height: number);
    get width(): number;
    get height(): number;
    performUpdateAdditional(width?: number, height?: number): void;
    performLayout(): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
}
export declare class ConstrainedBox extends SingleChildRenderObjectWidget {
    private additionalConstraints;
    constructor(option: Partial<ConstrainedBoxRenderArguments & SingleChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: ConstrainedBoxRender): void;
}
