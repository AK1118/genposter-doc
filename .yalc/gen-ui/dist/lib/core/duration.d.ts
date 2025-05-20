interface DurationArguments {
    day: number;
    hour: number;
    minute: number;
    second: number;
    milliseconds: number;
    microsecond: number;
}
export declare class Duration {
    private _duration;
    constructor(duration: Partial<DurationArguments>);
    static get zero(): Duration;
    /**
     * 获取单位是`天`的值
     */
    get valueWithDays(): number;
    /**
     * 获取单位是`秒`的值
     */
    get valueWithSeconds(): number;
    /**
     * 获取单位是`毫秒`的值，与`Duration.value`一致
     */
    get valueWithMilliseconds(): number;
    /**
     * 获取单位是`时`的值
     */
    get valueWithHours(): number;
    /**
     * 获取单位是`分`的值
     */
    get valueWithMinutes(): number;
    /**
     * 获取默认值，单位毫秒
     */
    get value(): number;
}
export {};
