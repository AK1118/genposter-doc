export declare class Queue<T> {
    list: Array<T>;
    push(value: T): void;
    addFirst(value: T): void;
    addLast(value: T): void;
    removeFirst(): T;
    removeLast(): T;
    get size(): number;
    get isEmpty(): boolean;
    clear(): void;
}
export declare const getRandomColor: () => string;
export declare const getRandomStrKey: () => string;
export declare const clone: <T>(object: T) => T;
