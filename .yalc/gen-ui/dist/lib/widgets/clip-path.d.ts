import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import { Clip } from "../core/base-types";
import Vector from "../math/vector";
import { PaintingContext, SingleChildRenderView } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
import { CustomClipper } from "../rendering/custom";
import { Path2D } from "../rendering/path-2D";
export interface CustomClipperArguments {
    clipper: CustomClipper;
    clipBehavior: Clip;
}
export declare class ClipPath extends SingleChildRenderObjectWidget {
    private clipper;
    private clipBehavior;
    constructor(args: Partial<CustomClipperArguments & SingleChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: ClipPathRenderView): void;
}
export declare abstract class CustomClipperRenderView extends SingleChildRenderView {
    protected clip: Path2D;
    private _clipper?;
    private _clipBehavior;
    private markNeedsRePaintBind;
    constructor(args: Partial<CustomClipperArguments>);
    set clipper(value: CustomClipper);
    get clipBehavior(): Clip;
    get defaultPath(): any;
    protected updateClip(offset: Vector): void;
    set clipBehavior(value: Clip);
}
export declare class ClipPathRenderView extends CustomClipperRenderView {
    get defaultPath(): Path2D;
    render(context: PaintingContext, offset?: Vector): void;
}
