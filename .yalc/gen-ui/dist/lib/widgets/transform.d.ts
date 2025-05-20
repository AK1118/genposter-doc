import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import { HitTestResult } from "../gesture/hit_test";
import { Matrix4 } from "../math/matrix";
import Vector from "../math/vector";
import Alignment from "../painting/alignment";
import { PaintingContext, SingleChildRenderView, SingleChildRenderViewArguments } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
export interface TransformRotateArguments {
    angle: number;
    origin: Vector;
    alignment: Alignment;
    angleX: number;
    angleY: number;
}
export interface TransformScaleArguments {
    scale: number;
    scaleX: number;
    scaleY: number;
    alignment: Alignment;
    origin: Vector;
}
export interface TransformSkewArguments {
    skewX: number;
    skewY: number;
}
export interface TransformTranslateArguments {
    x: number;
    y: number;
}
export declare class Transform extends SingleChildRenderObjectWidget {
    private _transform;
    private origin;
    private alignment;
    constructor(option: Partial<RenderTransformArguments & SingleChildRenderObjectWidget>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: RenderTransformBox): void;
    static rotate(option: Partial<TransformRotateArguments & SingleChildRenderObjectWidgetArguments>): Transform;
    static translate(option: Partial<TransformTranslateArguments & SingleChildRenderObjectWidgetArguments>): Transform;
    static skew(option: Partial<TransformSkewArguments & SingleChildRenderObjectWidgetArguments>): Transform;
    static scale(option: Partial<TransformScaleArguments & SingleChildRenderObjectWidgetArguments>): Transform;
}
export interface RenderTransformArguments {
    transform: Matrix4;
    origin: Vector;
    alignment: Alignment;
}
export declare class RenderTransformBox extends SingleChildRenderView {
    private _transform;
    private _origin;
    private _alignment;
    set alignment(value: Alignment);
    get alignment(): Alignment;
    set origin(value: Vector);
    get origin(): Vector;
    set transform(value: Matrix4);
    get transform(): Matrix4;
    constructor(option: Partial<RenderTransformArguments & SingleChildRenderViewArguments>);
    render(context: PaintingContext, offset?: Vector): void;
    hitTest(result: HitTestResult, position: Vector): boolean;
    /**
     */
    hitTestChildren(result: HitTestResult, position: Vector): boolean;
    get originTransform(): Matrix4;
    get effectiveTransform(): Matrix4;
    applyPaintTransform(child: RenderView, transform: Matrix4): void;
}
