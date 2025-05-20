import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import Vector from "../math/vector";
import { BoxDecoration } from "../painting/decoration";
import { PaintingContext, SingleChildRenderView } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
interface DecoratedBoxArguments {
    decoration: BoxDecoration;
}
export declare class DecoratedBox extends SingleChildRenderObjectWidget {
    private decoration;
    constructor(option?: Partial<DecoratedBoxArguments & SingleChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: BoxDecorationRenderView): void;
}
export declare class BoxDecorationRenderView extends SingleChildRenderView {
    private _decoration;
    constructor(decoration: BoxDecoration);
    set decoration(value: BoxDecoration);
    get decoration(): BoxDecoration;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
}
export {};
