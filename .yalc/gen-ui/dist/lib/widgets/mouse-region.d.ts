import { BuildContext, Element } from "../basic/elements";
import { RenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import { RenderView } from "../render-object/render-object";
export declare class MouseRegion extends RenderObjectWidget {
    constructor(option: Partial<SingleChildRenderObjectWidgetArguments>);
    createRenderObject(context?: BuildContext): RenderView;
    createElement(): Element;
}
