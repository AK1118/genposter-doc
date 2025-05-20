import Rect from "../basic/rect";
import { Matrix4 } from "../math/matrix";
import Alignment from "./alignment";
import { Color } from "./color";
interface GradientArguments {
    colors: Array<Color>;
    stops: Array<number>;
    transform: Matrix4;
}
export declare abstract class Gradient {
    colors: Array<Color>;
    stops: Array<number>;
    transform: Matrix4;
    protected get gradientStrategy(): import("../native").NativeGradientStrategy;
    constructor(colors: Array<Color>, stops: Array<number>, transform: Matrix4);
    abstract createShader(rect: Rect): CanvasGradient;
    protected initGradient(gradient: CanvasGradient): void;
}
export interface LinearGradientArguments extends GradientArguments {
    begin: Alignment;
    end: Alignment;
}
export declare class LinearGradient extends Gradient {
    private readonly begin;
    private readonly end;
    constructor(args: Partial<LinearGradientArguments>);
    createShader(rect: Rect): CanvasGradient;
}
interface GradientArguments extends Gradient {
    center: Alignment;
    radius: number;
}
export declare class RadialGradient extends Gradient {
    private readonly center;
    private readonly radius;
    constructor(args: Partial<GradientArguments>);
    createShader(rect: Rect): CanvasGradient;
}
interface SweepGradientArguments extends GradientArguments {
    center: Alignment;
    startAngle: number;
}
export declare class SweepGradient extends Gradient {
    private readonly center;
    private readonly startAngle;
    private readonly endAngle;
    constructor(args: Partial<SweepGradientArguments>);
    createShader(rect: Rect): CanvasGradient;
}
export {};
