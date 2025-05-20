import { BuildContext, Element } from "../basic/elements";
import { SingleChildRenderObjectWidget, Widget } from "../basic/framework";
import { RenderView } from "../render-object/render-object";
export declare class RootWidget extends SingleChildRenderObjectWidget {
    createRenderObject(): RenderView;
    createElement(): Element;
    updateRenderObject(context: BuildContext, renderView: RenderView): void;
}
export declare const runApp: (rootWidget: Widget) => void;
