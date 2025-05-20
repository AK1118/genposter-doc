import { Size } from "../basic/rect";
import { BorderStyle } from "../core/base-types";
import Vector from "../math/vector";
import { Color } from "./color";
import { Painter } from "./painter";
import { BorderRadius } from "./radius";
/**
 * 四个边在默认情况下可以自由选填、更改颜色等。
 * 在borderRadius时，不论那个角是BorderRadius,四个边都必须：
 *  1. 四个边都不允许为空
 *  2.颜色都必须一致
 * 不满足以上条件，会报错。
 */
export declare abstract class BoxBorder {
    abstract paint(paint: Painter, size: Size, offset: Vector, radius: BorderRadius): void;
}
interface BordersArguments {
    top: BorderSide;
    right: BorderSide;
    bottom: BorderSide;
    left: BorderSide;
}
export declare class Border extends BoxBorder implements BordersArguments {
    top: BorderSide;
    right: BorderSide;
    bottom: BorderSide;
    left: BorderSide;
    constructor(option: Partial<BordersArguments>);
    paint(paint: Painter, size: Size, offset: Vector, radius: BorderRadius): void;
    paintBorders(paint: Painter, size: Size, offset: Vector, borderRadius: BorderRadius, option: BordersArguments): void;
    static all(option: Partial<BorderSideArguments>): Border;
    static only(option: Partial<BordersArguments>): Border;
}
interface BorderSideArguments {
    color: Color;
    width: number;
    style: BorderStyle;
    dashed: Iterable<number>;
}
export declare class BorderSide implements BorderSideArguments {
    color: Color;
    width: number;
    style: BorderStyle;
    dashed: Iterable<number>;
    constructor(option: Partial<BorderSideArguments>);
    static get none(): BorderSide;
}
export {};
