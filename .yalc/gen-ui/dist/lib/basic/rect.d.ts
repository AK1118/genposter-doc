import Vector, { Offset } from "../math/vector";
export { Offset } from "../math/vector";
export declare class Size {
    private _width;
    private _height;
    constructor(width: number, height: number);
    static get zero(): Size;
    get width(): number;
    get height(): number;
    set width(value: number);
    set height(value: number);
    toVector(): Vector;
    half(): Size;
    copy(): Size;
    equals(size: Size | {
        width?: number;
        height?: number;
    }): boolean;
    setWidth(width: number): void;
    setHeight(height: number): void;
    toObject(): {
        width: number;
        height: number;
    };
    contains(offset: Offset): boolean;
}
declare class Rect {
    private _x;
    private _y;
    private _width;
    private _height;
    constructor(x?: number, y?: number, width?: number, height?: number);
    static compose(offset: Offset, size: Size): Rect;
    update({ x, y, width, height, }: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    }): void;
    get x(): number;
    get y(): number;
    get width(): number;
    get height(): number;
    set x(value: number);
    set y(value: number);
    set width(value: number);
    set height(value: number);
    static get zero(): Rect;
    get left(): number;
    get right(): number;
    get top(): number;
    get bottom(): number;
    contains(point: Offset): boolean;
    get size(): Size;
    get offset(): Offset;
    set offset(value: Offset);
    static merge(offset: Offset | Vector, size: Size): Rect;
    /**
     * 获取矩形较短的一边的长度
     */
    get shortestSide(): number;
    /**
     * 获取矩形较长的一边的长度
     */
    get longestSide(): number;
    copy(): Rect;
}
export default Rect;
