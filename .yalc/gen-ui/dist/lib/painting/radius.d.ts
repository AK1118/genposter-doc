import { Radius } from "../core/base-types";
interface BorderRadiusArguments {
    /**
     * 左上角圆角
     */
    topLeft: number;
    /**
     * 右上角圆角
     */
    topRight: number;
    /**
     * 左下角圆角
     */
    bottomLeft: number;
    /**
     * 右下角圆角
     */
    bottomRight: number;
}
/**
 * 边框圆角数值类，用于指定 Box 的四个边的圆角。
 * 常用于 @BoxDecoration 的 @borderRadius 属性。
 *
 * 使用方法示例:
 * ```typescript
 * new Container({
 *     decoration: new BoxDecoration({
 *         borderRadius: BorderRadius.all(10)
 *     }),
 *     height: 10,
 *     color: Colors.white,
 * })
 * ```
 */
export declare class BorderRadius implements BorderRadiusArguments {
    topLeft: number;
    topRight: number;
    bottomLeft: number;
    bottomRight: number;
    constructor(option: Partial<BorderRadiusArguments>);
    /**
     * 将四个角都设置为相同的圆角
     * 例如将四个角都设置为 10
     * ```typescript
     *  BorderRadius.all(10)
     * ```
     */
    static all(radius: number): BorderRadius;
    /**
     * 将四个角分别设置为不同的圆角，如果未指定，则默认为0
     * 例如将左上角设置为 10
     * ```typescript
     * BorderRadius.only(
     *    {
     *      topLeft: 10
     *    }
     * )
     * ```
     */
    static only(option: Partial<BorderRadiusArguments>): BorderRadius;
    static get zero(): BorderRadius;
    isNone(): boolean;
    static equals(a: BorderRadius, b: BorderRadius): boolean;
    equals(a: BorderRadius): boolean;
    get radius(): Radius;
}
export {};
