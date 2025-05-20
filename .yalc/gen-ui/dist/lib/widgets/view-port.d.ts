import { BuildContext } from "../basic/elements";
import { MultiChildRenderObjectWidget, MultiChildRenderObjectWidgetArguments, SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import { RenderView } from "../render-object/render-object";
import { RenderViewPort, RenderViewPortArguments } from "../render-object/viewport";
export { RenderViewPortArguments } from "../render-object/viewport";
export declare class ViewPort extends MultiChildRenderObjectWidget {
    private offset;
    private axisDirection;
    constructor(option: Partial<RenderViewPortArguments & MultiChildRenderObjectWidgetArguments>);
    updateRenderObject(context: BuildContext, renderView: RenderViewPort): void;
    createRenderObject(): RenderView;
}
export declare class WidgetToSliverAdapter extends SingleChildRenderObjectWidget {
    constructor(option: Partial<SingleChildRenderObjectWidgetArguments>);
    updateRenderObject(context: BuildContext, renderView: RenderView): void;
    createRenderObject(): RenderView;
}
