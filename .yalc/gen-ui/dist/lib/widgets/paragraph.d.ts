import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import Vector from "../math/vector";
import { TextSpan, TextStyle } from "../painting/text-painter";
import { PaintingContext, SingleChildRenderView } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
export interface TextArguments {
    style: TextStyle;
}
export declare class Text extends SingleChildRenderObjectWidget {
    private text;
    private style;
    constructor(text: string, option?: Partial<TextArguments & SingleChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: ParagraphView): void;
}
export interface TextRichArguments {
    textSpan: TextSpan;
}
export declare class TextRich extends SingleChildRenderObjectWidget {
    private textSpan;
    constructor(args: Partial<TextRichArguments & Omit<SingleChildRenderObjectWidgetArguments, "child">>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: ParagraphView): void;
}
export interface ParagraphViewOption {
    text: TextSpan;
}
export declare class ParagraphView extends SingleChildRenderView {
    private textPainter;
    private _text;
    private needClip;
    constructor(option?: ParagraphViewOption);
    set text(text: TextSpan);
    get text(): TextSpan;
    performLayout(): void;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
}
