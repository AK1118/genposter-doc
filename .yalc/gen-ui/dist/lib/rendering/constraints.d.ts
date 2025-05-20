import { Size } from "@/lib/basic/rect";
import Vector from "../math/vector";
export declare abstract class Constraints {
}
declare class BoxConstraints extends Constraints {
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    constructor(option?: {
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
    });
    get hasTightWidth(): boolean;
    get hasTightHeight(): boolean;
    get isTight(): boolean;
    get hasInfiniteWidth(): boolean;
    get hasInfiniteHeight(): boolean;
    get hasBoundedWidth(): boolean;
    get hasBoundedHeight(): boolean;
    equals(constraints: BoxConstraints): boolean;
    constrainSizeAndAttemptToPreserveAspectRatio(size: Size): Size;
    static expand(width?: number, height?: number): BoxConstraints;
    /**
     * 返回一个新的约束盒，约束盒的大小是此约束盒缩小 edges
     */
    deflate(edges: Vector): BoxConstraints;
    tighten(width?: number, height?: number): BoxConstraints;
    enforce(constraints: BoxConstraints): BoxConstraints;
    constrainWidth(width: number): number;
    constrainHeight(height: number): number;
    constrain(size: Size): Size;
    clamp(value: number, min: number, max: number): number;
    static get zero(): BoxConstraints;
    static tightFor(width?: number, height?: number): BoxConstraints;
    loosen(): BoxConstraints;
}
export default Constraints;
export { BoxConstraints };
