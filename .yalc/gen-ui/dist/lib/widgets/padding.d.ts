import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import { Size } from "../basic/rect";
import Vector from "../math/vector";
import { EdgeInsetsGeometry } from "../painting/edge-insets";
import { PaintingContext, SingleChildRenderView, SingleChildRenderViewArguments } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
import { BoxConstraints } from "../rendering/constraints";
export declare class PaddingRenderView extends SingleChildRenderView {
    private _padding;
    get padding(): EdgeInsetsGeometry;
    set padding(padding: EdgeInsetsGeometry);
    constructor(option?: Partial<PaddingOption & SingleChildRenderViewArguments>);
    performLayout(): void;
    computeDryLayout(constrains: BoxConstraints): Size;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
}
export interface PaddingOption {
    padding: EdgeInsetsGeometry;
}
export declare class Padding extends SingleChildRenderObjectWidget {
    private padding;
    constructor(option: Partial<PaddingOption & SingleChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: PaddingRenderView): void;
}
