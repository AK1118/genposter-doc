export declare class Offset {
    offsetX: number;
    offsetY: number;
    get x(): number;
    get y(): number;
    set x(value: number);
    set y(value: number);
    constructor(offsetX: number, offsetY: number);
    static get zero(): Offset;
    toVector(): Vector;
    copy(): Offset;
    add(offset: Offset): Offset;
}
declare class Vector extends Offset {
    constructor(x: number, y: number);
    add(v: Vector): Vector;
    sub(v: Vector): this;
    mult(v: Vector): this;
    multNumber(n: number): Vector;
    div(v: Vector): this;
    divNumber(n: number): Vector;
    mag(): number;
    dist(v: Vector): number;
    normalize(): this;
    clampX(min: number, max: number): void;
    clampY(min: number, max: number): void;
    clamp(c: [max: number, min: number]): void;
    copy(): Vector;
    set(v: Vector): void;
    setXY(x: number, y: number): void;
    toJson(): {
        x: number;
        y: number;
    };
    half(): Vector;
    troweling(): Vector;
    equals(v: Vector): boolean;
    toArray(): number[];
    toZero(): void;
    double(): Vector;
    negate(): Vector;
    static dist(v1: Vector, v2: Vector): number;
    static mag(v: Vector): number;
    static sub(v1: Vector, v2: Vector): Vector;
    static add(v1: Vector, v2: Vector): Vector;
    static mult(v: Vector, factor: number): Vector;
    static troweling(v: Vector): Vector;
    static get zero(): Vector;
}
export default Vector;
