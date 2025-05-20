import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget } from "../basic/framework";
import { RenderView } from "../render-object/render-object";
import { BoxConstraints } from "../rendering/constraints";
import { ConstrainedBoxRender } from "./constrained-box";
export interface SizedBoxOption {
    width: number;
    height: number;
}
export declare class SizedBox extends SingleChildRenderObjectWidget {
    protected width: number;
    protected height: number;
    protected additionalConstraints: BoxConstraints;
    constructor(option: Partial<SizedBoxOption & SingleChildRenderObjectWidget>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: ConstrainedBoxRender): void;
}
