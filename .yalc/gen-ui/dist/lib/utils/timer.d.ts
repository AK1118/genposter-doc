import { Duration } from "../core/duration";
export default class Timer {
    private duration;
    private timer;
    private callback;
    private runTimeDuration;
    private startTime;
    constructor(callback: VoidFunction, duration: Duration);
    /**
     * 在停止时需要记录剩余多少秒
     * 再次允许需要在上一次的剩余基础上再次运行
     */
    stop(): void;
    cancel(): void;
    reset(): void;
    reStart(): void;
    start(): void;
    private running;
}
