import { Size } from "../basic/rect";
import Vector from "../math/vector";
import { BoxBorder } from "./borders";
import { Color } from "./color";
import { Gradient } from "./gradient";
import { Painter } from "./painter";
import { BorderRadius } from "./radius";
import BoxShadow from "./shadow";
export declare abstract class Decoration {
    hitTest(size: Size, position: Vector): boolean;
    abstract createBoxPainter(onChanged: VoidFunction): BoxPainter;
}
export declare abstract class BoxPainter {
    onChanged: VoidFunction;
    constructor(onChanged: VoidFunction);
    abstract paint(paint: Painter, offset: Vector, size: Size): void;
    abstract debugPaint(paint: Painter, offset: Vector, size: Size): void;
    dispose(): void;
}
interface BoxDecorationArguments {
    backgroundColor: Color;
    border: BoxBorder;
    borderRadius: BorderRadius;
    shadows: Array<BoxShadow>;
    gradient: Gradient;
}
export declare class BoxDecoration extends Decoration implements BoxDecorationArguments {
    border: BoxBorder;
    borderRadius: BorderRadius;
    backgroundColor: Color;
    shadows: BoxShadow[];
    gradient: Gradient;
    constructor(option: Partial<BoxDecorationArguments>);
    createBoxPainter(onChanged: VoidFunction): BoxPainter;
}
export {};
