import { ChangeNotifier } from "./change-notifier";
import { Duration } from "./duration";
export declare abstract class Curve {
    abstract transformInternal(t: number): number;
}
/**
 * 三次贝塞尔曲线
 */
declare class Cubic extends Curve {
    private readonly cubicErrorBound;
    private a;
    private b;
    private c;
    private d;
    constructor(a: number, b: number, c: number, d: number);
    private _evaluateCubic;
    transformInternal(t: number): number;
}
declare class Linear extends Curve {
    transformInternal(t: number): number;
}
export declare class Curves {
    static readonly ease: Cubic;
    static readonly easeIn: Cubic;
    static readonly fastLinearToSlowEaseIn: Cubic;
    static readonly easeInToLinear: Cubic;
    static readonly easeInSine: Cubic;
    static readonly easeInQuad: Cubic;
    static readonly easeOut: Cubic;
    static readonly easeInBack: Cubic;
    static readonly linear: Linear;
    static bezier(p0: number, p1: number, p2: number, t: number): number;
}
export declare enum AnimationStatus {
    dismissed = "dismissed",
    forward = "forward",
    reverse = "reverse",
    completed = "completed"
}
declare abstract class Animation<T> extends ChangeNotifier {
    protected currentValue: T;
    private _statusListener;
    constructor();
    get value(): T;
    set status(status: AnimationStatus);
    get status(): AnimationStatus;
    /**
     * 动画开始之前
     */
    get isDismissed(): boolean;
    /**
     * 动画正向线性中
     */
    get isForward(): boolean;
    /**
     * 动画反向线性中
     */
    get isReverse(): boolean;
    /**
     * 动画结束之后
     */
    get isCompleted(): boolean;
    addStatusListener(listener: VoidFunction): void;
    removeStatusListener(listener: VoidFunction): void;
}
export declare abstract class Simulation {
    abstract x(time: number): number;
    abstract dx(time: number): number;
    abstract isDone(time: number): boolean;
}
interface AnimationControllerArguments {
    begin: number;
    end: number;
    duration: Duration;
    reverseDuration: Duration;
    curve: Curve;
}
export declare class AnimationController extends Animation<number> {
    private ticker;
    private begin;
    private end;
    private simulation;
    private duration;
    private direction;
    private reverseDuration;
    private curve;
    private lastTimeStamp;
    constructor(args: Partial<AnimationControllerArguments>);
    get velocity(): number;
    get isAnimating(): boolean;
    private start;
    animateWidthSimulation(simulation: Simulation): void;
    private startSimulation;
    private tick;
    private animateToInternal;
    forward(from?: number): void;
    reverse(from?: number): void;
    stop(canceled?: boolean): void;
    cancel(): void;
}
export declare class FrictionSimulation extends Simulation {
    private drag;
    private dragLog;
    private position;
    private velocity;
    private constantDeceleration;
    private finalTime;
    private toleranceVelocity;
    constructor(drag: number, position: number, velocity: number, toleranceVelocity?: number, constantDeceleration?: number);
    /**
     * 指数衰减阻尼物理模型：
     * x(t) =p0 + v0 * d^t / ln(d) - v0 / ln(d) - (c / 2)*t^2
     * * 牛顿迭代方法求解
     * x'(t) = v0 * d^t / ln(d) - c*t
     * 其中t单位是秒,p0是初始位置,v0是初始速度,d是阻尼因子,c是一个常量的减速度（负加速度）
     *
     */
    x(time: number): number;
    dx(time: number): number;
    /**
     * 可能会到达的最终位置
     */
    get finalX(): number;
    /**
     * 在某一位置上的时间
     */
    timeAtX(targetX: number): number;
    isDone(time: number): boolean;
    private newtonsMethod;
}
export declare class BouncingSimulation extends Simulation {
    private position;
    private maxScrollExtent;
    private minScrollExtent;
    private velocity;
    private frictionSimulation;
    private springTime;
    private springSimulation;
    constructor(position: number, maxScrollExtent: number, minScrollExtent: number, velocity: number);
    private offsetTime;
    private simulation;
    x(time: number): number;
    dx(time: number): number;
    isDone(time: number): boolean;
}
export {};
