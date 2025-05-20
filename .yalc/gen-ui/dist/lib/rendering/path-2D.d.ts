import { Size } from "../basic/rect";
import { HitTestResult } from "../gesture/hit_test";
import Vector from "../math/vector";
import { Painter } from "../painting/painter";
type PathTypes = "rect" | "arc" | "lineTo" | "moveTo" | "arcTo";
/**
 * 自定义Path类、@Path2D 类，方便在不同的平台都可以使用相同的效果。
 * @Path 类是一个原子路径，例如它可以是一个Rect路径，或是一个Arc路径等
 * @Path2D 类是一个 @Path 集合，它可以包含多个 @Path 对象, @Path2D 类需要实现一个 @hitTest 方法路径是否被点击
 */
export declare abstract class Path {
    constructor(type: PathTypes);
    private _type;
    get type(): PathTypes;
    contains(position: Vector): boolean;
    abstract render(paint: Painter, size: Size): void;
}
export declare class RectPath extends Path {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
    render(paint: Painter, size: Size): void;
}
export declare class ArcPath extends Path {
    x: number;
    y: number;
    radius: number;
    startAngle: number;
    endAngle: number;
    anticlockwise?: boolean;
    constructor(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean);
    render(paint: Painter, size: Size): void;
}
export declare class LineToPath extends Path {
    x: number;
    y: number;
    constructor(x: number, y: number);
    render(paint: Painter, size: Size): void;
}
export declare class ArcToPath extends Path {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    radius: number;
    constructor(x1: number, y1: number, x2: number, y2: number, radius: number);
    render(paint: Painter, size: Size): void;
}
export declare class MoveToPath extends Path {
    x: number;
    y: number;
    constructor(x: number, y: number);
    render(paint: Painter, size: Size): void;
}
export declare class Path2D {
    private _paths;
    private get _currentPathCount();
    rect(x: number, y: number, width: number, height: number): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    get paths(): Array<Path>;
    hitTest(result: HitTestResult, position: Vector): boolean;
    render(paint: Painter, size: Size): void;
}
export {};
