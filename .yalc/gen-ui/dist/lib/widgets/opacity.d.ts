import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import Vector from "../math/vector";
import { PaintingContext, SingleChildRenderView } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
export interface OpacityArguments {
    /**
     * # 不透明度
     *  - 取值范围 [0,1]
     */
    opacity: number;
}
export declare class Opacity extends SingleChildRenderObjectWidget {
    opacity: number;
    constructor(option: Partial<OpacityArguments & SingleChildRenderObjectWidgetArguments>);
    createRenderObject(context?: BuildContext): RenderView;
    updateRenderObject(context: BuildContext, renderView: OpacityRenderView): void;
}
declare class OpacityRenderView extends SingleChildRenderView {
    private _opacity;
    constructor(option: OpacityArguments);
    set opacity(value: number);
    get opacity(): number;
    render(context: PaintingContext, offset?: Vector): void;
}
export {};
