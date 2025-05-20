import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget } from "../basic/framework";
import { RenderView } from "../render-object/render-object";
export declare class GenUIErrorBoundary extends SingleChildRenderObjectWidget {
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: RenderView): void;
}
