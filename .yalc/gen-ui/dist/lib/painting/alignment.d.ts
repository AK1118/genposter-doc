import Rect, { Offset, Size } from "../basic/rect";
import Vector from "../math/vector";
export declare class Alignment {
    private x;
    private y;
    private offset;
    constructor(x: number, y: number);
    toJSON(): {
        x: number;
        y: number;
    };
    copyWithOffset(offset: Offset): this;
    static format(x: number, y: number): Alignment;
    static readonly center: Alignment;
    static readonly topLeft: Alignment;
    static readonly bottomLeft: Alignment;
    static readonly topRight: Alignment;
    static readonly bottomRight: Alignment;
    static readonly centerRight: Alignment;
    static readonly bottomCenter: Alignment;
    static readonly centerLeft: Alignment;
    static readonly topCenter: Alignment;
    /**
     *
     *以矩形中心为原点，没有遵循计算机图形的左上角原点规则
     * @return Size
     */
    compute(size: Size): Offset;
    alongSize(other: Size): Offset;
    inscribe(size: Size, parentSize: Size): Vector;
    withRect(rect: Rect): Offset;
    computeWithVector(v: Vector): Vector;
}
export default Alignment;
