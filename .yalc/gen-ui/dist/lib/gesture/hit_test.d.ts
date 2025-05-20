import { PointerEvent } from "./events";
export declare class HitTestEntry<T extends HitTestTarget = HitTestTarget> {
    target: T;
    constructor(target: T);
}
export interface HitTestTarget {
    handleEvent(event: PointerEvent, entry: HitTestEntry): void;
}
/**
 * @HitTestResult 内维护一个Map<HitTestTarget, HitTestEntry>，该Map用于存储命中测试的结果，且每个target不允许被命中多次
 */
export declare class HitTestResult {
    private _path;
    get path(): HitTestEntry[];
    add(entry: HitTestEntry): void;
}
