type StreamGenerator<T, R = void, N = unknown> = Generator<T, R, N> | AsyncGenerator<T, R, N>;
export default abstract class Stream<T> {
    protected generator: StreamGenerator<T>;
    constructor(generator: StreamGenerator<T>);
    abstract map<M>(callback: (v: T) => M): Stream<M>;
    abstract forEach(callback: (v: T) => void): void | Promise<void>;
    abstract filters(callback: (v: T) => boolean): Stream<T>;
    static fromArray<T>(array: Array<T>): Stream<T>;
    static withAsync<T>(generate: AsyncGenerator<T, T, unknown>): Stream<T>;
    [Symbol.iterator](): StreamGenerator<T>;
}
export declare class AsyncStream<T> extends Stream<T> {
    protected generator: AsyncGenerator<T>;
    constructor(generator: AsyncGenerator<any, any, any>);
    static fromArray<T>(array: Array<T>): AsyncStream<T>;
    map<M>(callback: (v: T) => M): AsyncStream<M>;
    forEach(callback: (v: T) => void): Promise<void>;
    filters(callback: (v: T) => boolean): Stream<T>;
    [Symbol.asyncIterator](): AsyncGenerator<T>;
}
export {};
