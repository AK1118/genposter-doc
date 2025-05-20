import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import { Clip } from "../core/base-types";
import Vector from "../math/vector";
import { BorderRadius } from "../painting/radius";
import { PaintingContext, SingleChildRenderViewArguments } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
import { ConstrainedBoxRender, ConstrainedBoxRenderArguments } from "./constrained-box";
import { SizedBox, SizedBoxOption } from "./sized-box";
export interface ClipRectArguments {
    clipBehavior: Clip;
}
export interface ClipRRectArguments extends ClipRectArguments {
    borderRadius: BorderRadius;
}
export declare class ClipRect extends SizedBox {
    protected clipBehavior: Clip;
    constructor(option: Partial<ClipRectArguments & SizedBoxOption & SingleChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: ClipRectRenderView): void;
}
export declare class ClipRRect extends ClipRect {
    private borderRadius;
    constructor(option: Partial<ClipRRectArguments & SizedBoxOption & SingleChildRenderObjectWidget>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: ClipRRectRenderView): void;
}
export declare class ClipRectRenderView extends ConstrainedBoxRender {
    protected _clipBehavior: Clip;
    constructor(option: Partial<ClipRectArguments & ConstrainedBoxRenderArguments & SingleChildRenderViewArguments>);
    set clipBehavior(value: Clip);
    get clipBehavior(): Clip;
    performLayout(): void;
    render(context: PaintingContext, offset?: Vector): void;
}
export declare class ClipRRectRenderView extends ClipRectRenderView {
    private _borderRadius;
    constructor(option: Partial<SizedBoxOption & ClipRRectArguments & SingleChildRenderViewArguments>);
    get borderRadius(): BorderRadius;
    set borderRadius(borderRadius: BorderRadius);
    performLayout(): void;
    render(context: PaintingContext, offset?: Vector): void;
}
