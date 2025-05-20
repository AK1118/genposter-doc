import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import Vector from "../math/vector";
import { PaintingContext, SingleChildRenderView } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
export declare class RepaintBoundaryRenderView extends SingleChildRenderView {
    get isRepaintBoundary(): boolean;
    private _context;
    private _layer;
    private _needsRepaint;
    markNeedsRepaint(): void;
    performLayout(): void;
    render(context: PaintingContext, offset: Vector): void;
}
export declare class RepaintBoundary extends SingleChildRenderObjectWidget {
    constructor(option: Partial<SingleChildRenderObjectWidgetArguments>);
    createRenderObject(context?: BuildContext): RenderView;
}
