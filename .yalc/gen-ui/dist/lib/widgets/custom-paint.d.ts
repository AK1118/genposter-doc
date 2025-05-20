import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import Vector from "../math/vector";
import { PaintingContext, SingleChildRenderView } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
import { CustomPainter } from "../rendering/custom";
export declare class CustomPaint extends SingleChildRenderObjectWidget {
    private painter;
    private foregroundPainter;
    constructor(option: Partial<SingleChildRenderObjectWidgetArguments & CustomPaintArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: RenderView): void;
}
export interface CustomPaintArguments {
    painter: CustomPainter;
    foregroundPainter: CustomPainter;
}
export declare class CustomPaintRenderView extends SingleChildRenderView {
    private _painter;
    private _foregroundPainter;
    constructor(args: Partial<CustomPaintArguments>);
    set painter(value: CustomPainter);
    set foregroundPainter(value: CustomPainter);
    render(context: PaintingContext, offset?: Vector): void;
    private renderWidthPainter;
}
