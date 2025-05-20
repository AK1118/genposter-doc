import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import Vector from "../math/vector";
import Alignment from "../painting/alignment";
import { PaintingContext, SingleChildRenderView, SingleChildRenderViewArguments } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
export declare class Align extends SingleChildRenderObjectWidget {
    private alignment;
    constructor(option: Partial<AlignArguments & SingleChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: RenderView): void;
}
export interface AlignArguments {
    alignment: Alignment;
}
export declare class AlignRenderView extends SingleChildRenderView {
    private _alignment;
    constructor(option: Partial<AlignArguments & SingleChildRenderViewArguments>);
    set alignment(alignment: Alignment);
    get alignment(): Alignment;
    performLayout(): void;
    private alignChild;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
}
export declare class Center extends Align {
    constructor(option: Partial<SingleChildRenderObjectWidgetArguments>);
}
