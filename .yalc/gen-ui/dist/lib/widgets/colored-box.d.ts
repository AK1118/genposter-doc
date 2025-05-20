import { BuildContext } from "../basic/elements";
import { SingleChildRenderObjectWidget, SingleChildRenderObjectWidgetArguments } from "../basic/framework";
import Vector from "../math/vector";
import { Color } from "../painting/color";
import { PaintingContext, RenderBox, SingleChildRenderView } from "../render-object/basic";
import { RenderView } from "../render-object/render-object";
export interface ColoredBoxOption {
    color: Color;
}
export declare class ColoredBox extends SingleChildRenderObjectWidget {
    private color;
    constructor(option: Partial<ColoredBoxOption & SingleChildRenderObjectWidgetArguments>);
    createRenderObject(): RenderView;
    updateRenderObject(context: BuildContext, renderView: RenderView): void;
}
export declare class ColoredRender extends SingleChildRenderView {
    _color: Color;
    constructor(color?: Color, child?: RenderBox);
    set color(color: Color);
    get color(): Color;
    performResize(): void;
    render(context: PaintingContext, offset?: Vector): void;
    debugRender(context: PaintingContext, offset?: Vector): void;
}
