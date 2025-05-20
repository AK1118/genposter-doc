import { RenderBox } from "../render-object/basic";
import { BoxConstraints } from "../rendering/constraints";
declare abstract class GenUIError extends Error {
    constructor(message: string);
}
export declare class AssertionError extends GenUIError {
    constructor(message: string);
}
export declare class FormatException extends GenUIError {
    constructor(message: string);
}
export declare class NullThrownError extends GenUIError {
    constructor();
}
export declare class ArgumentError extends GenUIError {
    constructor(message: string);
}
export declare class UnimplementedError extends GenUIError {
    constructor(message?: string);
}
export declare class StateError extends GenUIError {
    constructor(message: string);
}
export declare class LayoutAssertion {
    /**
     * Assert that the given constraints do not contain infinite values.
     * Throws a detailed error if invalid constraints are detected.
     */
    static assertValidConstraints(constraints: BoxConstraints, node: RenderBox, contextMessage?: string): void;
}
export {};
